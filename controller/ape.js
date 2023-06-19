
const res = require('express/lib/response');
var moment = require('moment');
const { Apes, Default_Item_Equip, Maps, Missions, Mission_Histories, Inventory, Item_Equipped, Items, Resource_Inventory, Resource,sequelize } = require('../models/index');
const { Op } = require("sequelize");
const checkLevelUp = require('../utils/apes/check-level-up');
const levelUpApe = require('../utils/apes/level-up-apes');
const getMissionPreviewFromMissionHistory = require('../utils/mission/get-mission-preview-from-mission-history');
const Redis = require("ioredis");
const checkIfApeIsInWallet = require('../utils/nft/check-if-ape-is-in-wallet');
const getLevel = require('../utils/levels/get-level');
const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});
const cpToLevelUp = async (currentLevel) => {
  if (currentLevel < 0 || currentLevel >= 25) {
    return '#'
  }

  return 0
}

module.exports = {
  async store(req, res) {
    var {name, address, image, owner, symbol} = req.body;

    let searchTerm = `Ape_${address}`;
    redis.del(searchTerm);

    var checkApe = await Apes.findOne({
      where: {
        address: address
      }
    })
    
    var ape = null;
    
    if(checkApe) {
      ape = await Apes.update({
        owner: owner
      }, {
        where: {
          address: address
        }
      });
      
    } else {
      ape = await Apes.create({
        name,
        address,
        image,
        owner,
        symbol,
        level: 0,
        cp: 0
      });
    }
    
    var ape = await Apes.findOne({
      where: {
        address: address
      }
    })
    
    
    res.json(ape)
  },
  
  async bulkStore(req, res) {
    try {
      var apes = [];
      req.body.map(async v => {
        var {name, address, image, owner, symbol} = v;

        console.log(`APE Bulk Store Saving  ${name} - ${address} - ${owner} - ${symbol} `)
        let searchTerm = `Ape_${address}`;
        redis.del(searchTerm);
        var checkApe = await Apes.findOne({
          where: {
            address: address
          }
        })

        var ape = null;

        if (checkApe) {
          ape = await Apes.update({
            owner: owner
          }, {
            where: {
              address: address
            }
          });

        } else {
          ape = await Apes.create({
            name,
            address,
            image,
            owner,
            symbol,
            level: 0,
            cp: 0
          });
        }

        await apes.push(Apes.findOne({
          where: {
            address: address
          }
        }))
      })

      res.json(apes)
    }catch(err){

      console.log(err)
      return res.status(400).json({
        msg: "Failed to save some or all of the apes"
      })
    }
  },
  
  async checkLevelUp(req, res) {
    var { address } = req.body;
    if (!address) {
      return res.status(400).json({
        msg: "Ape Address is required"
      })
    }
    let searchTerm = `Ape_${address}`;
    redis.del(searchTerm);
    
    var ape = await Apes.findOne({
      where: {
        address
      }
    })
    if (!ape) {
      return res.status(404).json({
          msg: "No Ape found with this address"
      })
    }

    const canLevelUp = await checkLevelUp({ ape })
    
    res.json({
      check_level_up: canLevelUp
    })
  },

  async levelUp(req, res) {
    var {
      address,
      wallet,
    } = req.body;

    if (!address || !wallet) {
      return res.status(400).json({
        msg: "No Ape or No Wallet"
      })
    }
    if (!await checkIfApeIsInWallet({
      wallet,
      address,
    })) {
      return res.status(200).json({
        msg: "This ape can not be detected in this wallet"
      })
    }

    let searchTerm = `Ape_${address}`;
    await redis.del(searchTerm)
    try {
      await sequelize.transaction(async (t) => {
        var ape = await Apes.findOne({
          where: {
            address
          }
        })
        if (!ape) {
          return res.status(404).json({
            msg: "No Ape found with this address"
          })
        }

        //check level up for ape
        const canLevelUp = await checkLevelUp({ape})
        if (!canLevelUp) {
          return res.status(400).json({
            msg: "This Ape cannot be leveled up"
          })
        }

        //level up for ape
        const upgradedApe = await levelUpApe({ape,t})
        res.json({
          ape: upgradedApe
        })
      });
    }catch(err){
      console.log(`Failed to level up ape ${address}`);
      console.log(err)
      res.json({
        ape: false
      })
    }
    

  },

  async getInfo(req, res) {
    let { address } = req.query;
    let searchTerm = `Ape_${address}`;

    redis.get(searchTerm,async (err,result) => {

      if(err)
        console.log(`Failed to get value from redis ${err}`);

      if(result)
        res.json(JSON.parse(result))
      else {
        if(!address) {
          res.json({
            msg: "Address is required"
          })

          return;
        }

        var ape = {
          cpToLevelUp: 0
        }
        try {
          ape = await Apes.findOne({
            where: {
              address: address
            },
            include: [
              {
                model: Default_Item_Equip,
                include: Items,
                as: 'default_items',
                required: false,
              },

              {
                model: Inventory,
                where: {
                  item_durability: {
                    [Op.gt]: 0
                  }
                },
                include: Items,
                required: false,
              },
            ]
          })
          if (!!ape) {
            const availableItems = (ape.dataValues.Inventories || []).map(inv => inv.Item.id)

            await Promise.all(
                (ape.dataValues.default_items || []).map(async dItem => {
                  if (!availableItems.includes(dItem.Item.id)) {
                    return await Default_Item_Equip.destroy({
                      where: {
                        id: dItem.id
                      }
                    })
                  } else {
                    return undefined
                  }
                })
            )
          }

          ape = await Apes.findOne({
            where: {
              address: address
            },

            include: [
              {
                model: Inventory,
                where: {
                  item_durability: {
                    [Op.gt]: 0
                  }
                },
                include: Items,
                required: false,
              },

              {
                model: Resource_Inventory,
                where: {
                  resource_quantity: {
                    [Op.gt]: 0
                  }
                },
                include: Resource,
                required: false
              },

              {
                model: Mission_Histories,
                as: 'active_mission',
                where: {
                  ended_at: null
                },
                include: [
                  {
                    model: Missions,
                    required: false,
                    include: [{
                      model: Maps,
                      required: true,
                    }, {
                      model: Items,
                      as: 'item1',
                      required: false,
                    }, {
                      model: Items,
                      as: 'item2',
                      required: false,
                    }, {
                      model: Items,
                      as: 'item3',
                      required: false,
                    }, {
                      model: Items,
                      as: 'item4',
                      required: false,
                    }],
                  }
                ],
                required: false
              },

              {
                model: Mission_Histories,
                as: 'mission_history',
                where: {
                  ended_at: null
                },
                include: [
                  {
                    model: Item_Equipped,
                    as: 'equippedItems',
                    include: Items,
                    required: false,
                  }
                ],
                required: false
              },

              {
                model: Default_Item_Equip,
                include: Items,
                as: 'default_items',
                required: false,
              }
            ]
          })

          const data = {
            ...((!!ape && ape.dataValues) || {}),
            level: ((!!ape && await getLevel({ level: ape.level, redis })) || {}),
            cpToLevelUp: 0,
            activeMissionEffect: (!!ape && !!ape.active_mission
                && await getMissionPreviewFromMissionHistory(
                    {missionHistory: ape.active_mission})) || {},
          }
          redis.set(searchTerm, JSON.stringify(data), "EX", 600);
          res.json(data)
        }catch(err){
          console.log(`Failed to get ape info for ${address} error is ${err}`)
          return res.status(400).json({
            msg: `Failed to Get Ape Info ${address}`
          })
        }

      }
    });




  }

}