
var moment = require('moment');
const { Apes, Maps, Missions, Mission_Histories, Items, Inventory, Item_Equipped, sequelize } = require('../models/index');

const { Op } = require("sequelize");
const getMissionPreviewFromMissionHistory = require('../utils/mission/get-mission-preview-from-mission-history');
const getRewards = require('../utils/apes/get-rewards');
const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

const checkMultipleApesEquipable = require('../utils/equips/check-multiple-apes-equipable');
const createMissionHistoriesForApes = require('../utils/mission/create-mission-histories-for-apes');
const getApesNotInWallet = require('../utils/nft/get-apes-not-in-wallet');
const checkIfApeIsInWallet = require('../utils/nft/check-if-ape-is-in-wallet');

module.exports = {
    async missions(req, res) {
        let searchTerm =  "missions"
        redis.get(searchTerm, async (err, result) => {
            let missions;
            if(err)
                console.log(`Failed to get value from redis ${err}`)
            if(result) {
                console.log("Mission retrieved from cache");
                missions = JSON.parse(result);

            } else {
                missions = await Missions.findAll();
                redis.set(searchTerm, JSON.stringify(missions), "EX", 600);
            }
            res.json(missions)

        });
    },

    async mapMissions(req, res) {
        var {
            map_id,
        } = req.query
        let searchTerm = `Map_Mission_${map_id}`;

        redis.get(searchTerm, async (err, result) => {
            if(err)
                console.log(`Failed to get value from redis ${err}`);

            if(result)
                res.json(JSON.parse(result))
            else {
                let missions = await Missions.findAll({
                    where: {
                        map_id: map_id
                    }
                });
                redis.set(searchTerm, JSON.stringify(missions), "EX", 600);
                res.json(missions)
            }

        })

    },

    async getMission(req, res) {
        var {
            mission_id,
            address
        } = req.query

        let searchTerm = `Mission_${mission_id}_${address}`
        redis.get(searchTerm,async (err,result) => {

            if(err)
                console.log(`Failed to get value from redis ${err}`);
            if(result) {
                console.log("Hit");
                res.json(JSON.parse(result));
            }
            else {
                if (!mission_id) {
                    res.status(404).json({
                        msg: "Invalid Mission"
                    })
                }

                var mission = await Missions.findOne({
                    where: {
                        id: mission_id
                    },
                    include: Maps
                });

                var items = [
                    await Items.findOne({
                        where: {
                            id: mission.item_pool_1
                        }
                    }),
                    await Items.findOne({
                        where: {
                            id: mission.item_pool_2
                        }
                    }),
                    await Items.findOne({
                        where: {
                            id: mission.item_pool_3
                        }
                    }),
                    await Items.findOne({
                        where: {
                            id: mission.item_pool_4
                        }
                    }),
                ].filter(item => !!item)

                var active = {
                    history: null,
                    mission: null,
                    items: null
                }

                if (address) {
                    const ape = await Apes.findOne({
                        where: {
                            address: address
                        }
                    })

                    if (ape) {
                        var actionMissionHistory = await Mission_Histories.findOne(
                            {
                                where: {
                                    ape_id: ape.id,
                                    ended_at: null
                                }
                            })

                        var activeMission = null

                        if (actionMissionHistory) {
                            active['history'] = actionMissionHistory

                            activeMission = await Missions.findOne({
                                where: {
                                    id: actionMissionHistory.mission_id
                                }
                            })

                            active['mission'] = activeMission;

                            var activeItems = [
                                await Items.findOne({
                                    where: {
                                        id: activeMission.item_pool_1
                                    }
                                }),
                                await Items.findOne({
                                    where: {
                                        id: activeMission.item_pool_2
                                    }
                                }),
                                await Items.findOne({
                                    where: {
                                        id: activeMission.item_pool_3
                                    }
                                }),
                                await Items.findOne({
                                    where: {
                                        id: activeMission.item_pool_4
                                    }
                                }),
                            ].filter(item => !!item)

                            active['items'] = activeItems;

                            let equippedItems = await actionMissionHistory.getEquippedItems()
                            equippedItems = await Promise.all(
                                equippedItems.map(
                                    async itemEquipped => await itemEquipped.getItem())
                            )

                            active['equippedItems'] = equippedItems
                        }

                    }
                }
                let missions  ={mission, items, active: active}
                redis.set(searchTerm, JSON.stringify(missions), "EX", 600);
                res.json(missions)
            }

        })

    },
    
    async goMission(req, res) {
      var {
          address,
          mission_id,
          inventory_ids,
      } = req.body

      // check if mission exists
      let searchTerm = `Mission_${mission_id}_${address}`
      let apeSearchTerm = `Ape_${address}`;
      await redis.del(apeSearchTerm);
      await redis.del(searchTerm);
      try {
          await sequelize.transaction(async (t) => {
              const mission = await Missions.findOne({
                  where: {
                      id: mission_id
                  }
              })

              const ape = await Apes.findOne({
                  where: {
                      address: address
                  }
              })

              const inventories = await Inventory.findAll({
                  where: {
                      id: {
                          [Op.in]: inventory_ids || []
                      }
                  },
                  include: Items
              })

              if(!mission
              || !ape) {
                  res.status(404).json({
                      msg: "Invalid Mission or Ape"
                  })
              }

              const hasActiveMission = await Mission_Histories.findOne({
                  where: {
                      ape_id: ape.id,
                      ended_at: null
                  }
              })

              if(hasActiveMission) {
                  res.status(401).json({
                      msg: "Ape has an active mission"
                  })

                  return;
              }

              let cpCost = mission.cp_cost
              const sightInventory = inventories.find(inv => inv.Item.category === 'sight')
              if (!!sightInventory) {
                  const sightItem = sightInventory.Item
                  if (Math.random() * 100 <= sightItem.activation_chance) {   //chance working
                      cpCost *= (1.0 - sightItem.effect_bonus / 100)
                  }
              }

              if (ape.cp < cpCost) {
                  return res.status(200).json({
                      title: "Not Enough CP",
                      msg: "You need more CP in order to start the mission"
                  })
              }

              //reduce ape cp to start the mission

              ape.set({
                  cp: ape.cp - cpCost
              })
              await ape.save({transaction:t})

              let history = await Mission_Histories.create({
                  ape_id: ape.id,
                  mission_id: mission_id,
                  level: ape.level,
                  started_at: moment(),
                  ended_at: null,
                  duration: mission.time
              },{transaction:t})
              res.send(history);
          }
      )
      }catch(err){
          console.log(err);
          res.status(400).json({
              msg: `Failed to Send ape on missions ${ape.id}- ${err.message}`
          })
      }
    },

    async goMissionSelected(req, res) {
        var {
            missionId,
            apes: apesInfo,
            wallet,
        } = req.body

        if (!missionId || !apesInfo || !wallet) {
            return res.status(404).json({
                msg: "Can't Send apes to the mission"
            })
        }

        const apesNotInWallet = await getApesNotInWallet({
            addresses: (apesInfo || []).map(apeInfo => apeInfo.address),
            wallet,
        })
        if (!apesNotInWallet || apesNotInWallet.length > 0) {
            console.log(`MISSION_START - Some apes can not be detected in this wallet - ${apesNotInWallet.join(', ')}`);
            if (apesInfo.length > 1) {
                return res.status(200).json({
                    msg: 'Some apes can not be detected in this wallet'
                })
            } else {
                return res.status(200).json({
                    msg: 'This ape can not be detected in this wallet'
                })
            }
        }

        try {
            const apeAddresses = (apesInfo || []).map(ape => ape.address)
            
            console.log(`Multi Mission - Mission Start for these apes - (${apeAddresses.join(', ')})`);

            //clear redis cache for the apes
            apeAddresses.forEach(address => {
                redis.del(`Ape_${address}`);
                redis.del(`Mission_${missionId}_${address}`);
            });

            await sequelize.transaction(async (t) => {
                console.log(`Multi Mission - Getting Mission - Mission ID = ${missionId}`)
                const mission = await Missions.findOne({
                    where: {
                        id: missionId
                    }
                }, { transaction: t })

                if (!mission) {  
                    console.log(`Multi Mission - No mission - Mission ID = ${missionId}`)
                    return res.status(400).json({
                        msg: "Invalid Mission"
                    })
                }

                console.log(`Multi Mission - Getting Apes - Apes = ${apeAddresses.join(', ')}`)
                const apes = await Apes.findAll({
                    where: {
                        address: {
                            [Op.in]: apeAddresses
                        },
                    },
                    include: [{
                        model: Mission_Histories,
                        as: 'active_mission',
                        where: {
                            ended_at: null,
                        },
                        required: false,
                    }, {
                        model: Inventory,
                        where: {
                            item_durability: {
                                [Op.gt]: 0
                            }
                        },
                        required:false,
                        include: Items,
                    }]
                }, { transaction: t })
                
                if (apes.filter(ape => !!ape.active_mission).length > 0) {
                    console.log(`Multi Mission - Some apes are already sent to missions = ${apes.filter(ape => !!ape.active_mission).map(ape => ape.address).join(', ')}`)
                    return res.status(400).json({
                        msg: "Some apes are already sent to missions"
                    })
                }
                
                console.log(`Multi Mission - Checking equipability for the apes - Apes = ${apeAddresses.join(', ')}`)
                const equipable = await checkMultipleApesEquipable({ apes, apesInfo })
                if (!equipable.result) {
                    console.log(`Multi Mission - Equip Check is failed - ${equipable}`)
                    return res.status(400).json({
                        msgs: equipable.info.map(info => info.msg)
                    }) 
                }

                console.log(`Multi Mission - Creating mission histories - Mission ID = ${missionId} && Apes = ${apeAddresses.join(', ')}`)
                const missionHistories = await createMissionHistoriesForApes({ apes, mission, apesInfo, transaction: t })
                if (!missionHistories) {
                    throw new Error(`Multi Mission - Cannot create mission histories && rolling back - Apes = ${apeAddresses.join(', ')}`)
                }

                //checking if all apes are being sent to the mission
                if (missionHistories.length === apes.length) {
                    return res.json({
                        missionHistories,
                        allSent: true,
                    })
                } else {
                    return res.json({
                        missionHistories,
                        allSent: false,
                    })
                }
            })
        } catch (err) {
            console.log(err);
            res.status(400).json({
                msg: `Failed to start missions - ${err.message}`
            })
        }
      
    },

    async getReward(req, res) {
        let {
            address,
            wallet,
        } = req.body

        // check if mission exists
        if(!address || !wallet) {
            console.log(`REWARD - No wallet or no ape`);
            return res.status(404).json({
                msg: "Can't get any reward"
            })
        }
        if (!await checkIfApeIsInWallet({
            address,
            wallet,
        })) {
            console.log(`REWARD - This ape can not be detected in this wallet`);
            return res.status(200).json({
                msg: "This ape can not be detected in this wallet"
            })
        }
        let apeSearchTerm = `Ape_${address}`;
        redis.del(apeSearchTerm);
    
        var ape
        try {
            await sequelize.transaction(async (t) => {
                ape = await Apes.findOne({
                    where: {
                        address: address
                    },

                    include: [{
                        model: Mission_Histories,
                        as: 'active_mission',
                        where: {
                        ended_at: null,
                        expected_end_time: {
                            [Op.or]: [{
                                [Op.lte]: Date.now(),
                            }, {
                                [Op.eq]: null
                            }]
                        }
                        },
                        required: false,
                        include: [{
                            model: Item_Equipped,
                            as: 'equippedItems',
                            include: Items,
                        }, {
                            model: Missions,
                            include: [{
                                model: Items,
                                as: 'item1'
                            }, {
                                model: Items,
                                as: 'item2'
                            }, {
                                model: Items,
                                as: 'item3'
                            }, {
                                model: Items,
                                as: 'item4'
                            }]
                        }]
                    }],
                } ,{ transaction: t })
                if (!ape) {
                    console.log(`REWARD_APE_ADDRESS=${address} - No Ape for this address`);
                    return res.status(400).json({
                        msg: "Can't get any reward"
                    })
                }

                const  hasActiveMission = await ape.active_mission
            
                if(!hasActiveMission) {
                    console.log(`REWARD_APE_ID=${ape.id} - This Ape has no active mission`);
                    throw new Error(`Ape with address ${address} has no active missions`)
                }
                let activeMission = hasActiveMission;
                let current =  moment(new Date());
                //finish the mission history
                try {
                    activeMission.set({
                        ended_at: current || new Date(),
                    })

                    console.log(`REWARD_APE_ID=${ape.id} - Saving Mission history ${JSON.stringify(activeMission)}`);
                    await activeMission.save({ transaction: t });
                } catch(err){
                    console.log(err);
                    throw new Error(`Failed to end mission for APE at address ${address} - ${err.message}`)
                }

                const missionEffect = await getMissionPreviewFromMissionHistory({ missionHistory: activeMission, transaction: t })
            
                var start_at = moment(activeMission.started_at);

                var duration = moment.duration(current.diff(start_at));
                var elapsed = Math.floor(duration.asHours());


                // getting chance
                const rewardChance = [
                    missionEffect['item_luck_1'],
                    missionEffect['item_luck_2'],
                    missionEffect['item_luck_3'],
                    missionEffect['item_luck_4'],
                ]
                const beRewarded = rewardChance.map(luck => Math.random() * 1000000 <= luck * 10000)
                let itemRewards = [];

                if (elapsed >= missionEffect.time) {
                    itemRewards = beRewarded.map((rewarded, idx) => !!rewarded ? ape.active_mission.Mission[`item${idx + 1}`] : undefined)
                }
                //filtering undefined items
                itemRewards = itemRewards.filter(item => !!item)

                // Calculate cp based on the elapsed time or mission time
                const cpPerHour = missionEffect.cp_hour;
                const cpReward = elapsed >= missionEffect.time 
                                ? missionEffect.cp_reward 
                                : Math.round(parseFloat(cpPerHour) * parseFloat(elapsed));

                //create an inventory rewarded
                try {
                    if (!!itemRewards) {
                        await Promise.all(
                            itemRewards.map(
                                async itemReward => await Inventory.create({
                                    ape_id: ape.id,
                                    item_id: itemReward.id,
                                    item_durability: itemReward.durability
                                }, { transaction: t })
                            )
                        )
                    }
                } catch (err) {
                    throw new Error(`Failed to create inventory for ape with id ${ape.id} and address ${address} -${err.message}`);
                }

                //getting rewards
                const resourceRewards = await getRewards({
                    ape,
                    missionEffect,
                    transaction: t
                })

                res.status(200).json({
                    cpReward,
                    itemRewards,
                    resourceRewards,
                    ape
                })
            })
        } catch(err) {
            console.log(err);
            res.status(400).json({
                msg: `Failed to claim rewards - ${err.message}`
            })
        }
    },

    async claimAllRewards(req, res) {
        var {
            addresses,
            wallet,
        } = req.body

        if (!wallet) {
            console.log(`REWARD_ALL - No Wallet Address`);
            return res.status(200).json({
                msg: 'Connect your wallet to claim rewards'
            })
        }

        if (!addresses || addresses === []) {
            console.log(`REWARD_ALL - No address`);
            return res.status(200).json([])
        }

        const apesNotInWallet = await getApesNotInWallet({
            addresses,
            wallet,
        })
        const addressesInMyWallet = addresses.filter(address => !(apesNotInWallet || []).includes(address))

        if (!apesNotInWallet || addressesInMyWallet.length === 0) {
            console.log(`REWARD_ALL - All apes can not be detected in this wallet - ${apesNotInWallet.join(', ')}`);
            if (addresses.length > 1) {
                return res.status(200).json({
                    msg: 'All apes can not be detected in this wallet'
                })
            } else {
                return res.status(200).json({
                    msg: 'This ape can not be detected in this wallet'
                })
            }
        }
        
        console.log(`Claiming All Rewards - started for this apes (${addressesInMyWallet.join(', ')})`);
        
        try {
            
            addressesInMyWallet.forEach(address => {
                let apeSearchTerm = `Ape_${address}`;
                redis.del(apeSearchTerm);
            });
            
            await sequelize.transaction(async (t) => {
                var apes = await Apes.findAll({
                    where: {
                        address: {
                            [Op.in]: addressesInMyWallet
                        },
                    },

                    include: [{
                        model: Mission_Histories,
                        as: 'active_mission',
                        where: {
                        ended_at: null,
                        expected_end_time: {
                            [Op.or]: [{
                                [Op.lte]: Date.now(),
                            }, {
                                [Op.eq]: null
                            }]
                        }
                        },
                        required: false,
                        include: [{
                            model: Item_Equipped,
                            as: 'equippedItems',
                            include: Items,
                        }, {
                            model: Missions,
                            include: [{
                                model: Items,
                                as: 'item1'
                            }, {
                                model: Items,
                                as: 'item2'
                            }, {
                                model: Items,
                                as: 'item3'
                            }, {
                                model: Items,
                                as: 'item4'
                            }]
                        }]
                    }]
                }, { transaction: t })
                apes = apes.filter(ape => !!ape.active_mission)
                
                console.log(`Claiming All Rewards - only these apes are able to claim rewards (${apes.map(ape => ape.address).join(', ')})`);

                const rewards = await Promise.all(
                    apes.map(async ape => {
                        const missionEffect = await getMissionPreviewFromMissionHistory({ missionHistory: ape.active_mission, transaction: t })
                        let isFinished = !!ape.active_mission.expected_end_time || moment(ape.active_mission.started_at).add(missionEffect.time, 'hours').isBefore(moment())
                        
                        if (!isFinished) return undefined

                        // finish the active mission
                        try {
                            console.log(`REWARD_APE_ID=${ape.id} - Saving Mission history ${JSON.stringify(ape.active_mission)}`);
                            ape.active_mission.set({
                                ended_at: Date.now()
                            })
                            await ape.active_mission.save({ transaction: t })
                        } catch (err) {
                            console.log(err)
                            throw new Error(`Failed to claim reward for ${ape.id} all addresses  rolling back  ${addressesInMyWallet.join(', ')} - ${err}`)
                        }

                        // getting chance
                        const rewardChance = [
                            missionEffect['item_luck_1'],
                            missionEffect['item_luck_2'],
                            missionEffect['item_luck_3'],
                            missionEffect['item_luck_4'],
                        ]
                        const beRewarded = rewardChance.map(luck => Math.random() * 1000000 <= luck * 10000)
                        let itemRewards = beRewarded.map((rewarded, idx) => !!rewarded ? ape.active_mission.Mission[`item${idx + 1}`] : undefined)
                        //filtering undefined items
                        itemRewards = itemRewards.filter(item => !!item)

                        // Calculate cp based on the elapsed time or mission time
                        const cpReward = missionEffect.cp_reward;

                        //create an inventory rewarded
                        try {
                            if (!!itemRewards) {
                                console.log(`REWARD_APE_ID=${ape.id} - Saving rewarded items - ${JSON.stringify(itemRewards)} for this mission(${ape.active_mission})`);
                                await Promise.all(
                                    itemRewards.map(
                                        async itemReward => await Inventory.create({
                                            ape_id: ape.id,
                                            item_id: itemReward.id,
                                            item_durability: itemReward.durability
                                        }, { transaction: t })
                                    )
                                )
                            }
                        } catch (err) {
                            console.log(err);
                            throw new Error(`Failed to create Inventory for address  ape ${ape.id} - ${err}`)
                        }

                        //getting rewards
                        const resourceRewards = await getRewards({
                            ape,
                            missionEffect,
                            transaction: t,
                        })

                        return {
                            cpReward,
                            itemRewards,
                            ape,
                            resourceRewards
                        }
                    })
                )

                console.log(`Claim All Rewards Done - Ape Addresses: ${addressesInMyWallet.join(', ')}`)
                return res.status(200).json(rewards.filter(reward => !!reward))
            })
        } catch (err) {
            console.log(err)
            console.log(`Unable to claim all rewards - Ape Addresses: ${addressesInMyWallet.join(', ')}`)
            res.status(400).json({
                msg: `Failed to claim rewards - ${err.message}`
            })
        }
    }
}