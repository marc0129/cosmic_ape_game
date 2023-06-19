
var moment = require('moment');
const { Apes, Default_Item_Equip, Missions, Mission_Histories, Items, Inventory } = require('../models/index');

const { Op } = require("sequelize");
const checkEquip = require('../utils/equips/check-equip');
const equip = require('../utils/equips/equip');
const unequip = require('../utils/equips/unequip');
const Redis = require("ioredis");
const checkIfApeIsInWallet = require('../utils/nft/check-if-ape-is-in-wallet');
const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
  async _checkEquip(mission_id, address, inventory_ids) { 
    console.log('checkEquip', mission_id, address, inventory_ids)   
    if(!mission_id || !address || !inventory_ids) {
      return {
        status: 404,
        value: {
          msg: "Invalid Parameters"
        }
      }
    }
    
    const mission = await Missions.findOne({
      where: {
        id: mission_id
      }
    });
    
    const ape = await Apes.findOne({
      where: {
        address
      }
    })
    
    if (!mission || !ape) {
      return {
        status: 404,
        value: {
          msg: "No ape or no mission"
        }
      }
    }
    
    const inventories = await Inventory.findAll({
      where: {
        id: {
          [Op.in]: inventory_ids || [] 
        }
      }
    })

    const checkEquipResult = await checkEquip({
      ape,
      mission,
      inventories
    })
    
    return {
      status: checkEquipResult.status || 200,
      value: {
        check_equip: checkEquipResult.result,
        msg: checkEquipResult.msg,
        title: checkEquipResult.title,
      }
    }
  },

  async checkEquip(req, res) {
    const {
      mission_id,
      address,
      inventory_ids
    } = req.body
    let searchTerm = `Ape_${address}`;
    redis.del(searchTerm)
    
    const result = await this._checkEquip(mission_id, address, inventory_ids)
    
    return res.status(result.status).json(result.value)
  },
  
  async _equip(mission_history_id, inventory_ids) {
    if(!mission_history_id || !inventory_ids) {
      return {
        status: 404,
        value: {
          msg: "Invalid Parameters"
        }
      }
    }
    
    const missionHistory = await Mission_Histories.findOne({
      where: {
        id: mission_history_id
      }
    });
    
    if (!missionHistory) {
      return {
        status: 404,
        value: {
          msg: "No mission history"
        }
      }
    }
    
    const ape = await missionHistory.getApe()
    let searchTerm = `Ape_${ape.address}`;
    redis.del(searchTerm)
    const mission = await missionHistory.getMission()
    
    if (!ape) {
      return {
        status: 400,
        value: {
          msg: "Invalid mission history"
        }
      }
    }
    
    const inventories = await Inventory.findAll({
      where: {
        id: {
          [Op.in]: inventory_ids || [] 
        }
      }
    })

    const checkEquipResult = await checkEquip({
      ape,
      mission,
      inventories
    })
    
    if (!checkEquipResult.result) {
      return {
        status: checkEquipResult.status,
        value: {
          check_equip: checkEquipResult.result,
          msg: checkEquipResult.msg
        }
      }
    }

    const equipResult = await equip({
      ape,
      mission,
      missionHistory,
      inventories,
    })

    return {
      status: 200,
      value: {
        equip: equipResult
      }
    }
  },

  async equip(req, res) {
    const {
      mission_history_id,
      inventory_ids
    } = req.body
    
    const result = this._equip(mission_history_id, inventory_ids)
    return res.status(result.status).json(result.value)
  },
  
  async unequip(req, res) {
    const {
      mission_history_id,
    } = req.body
    
    if(!mission_history_id) {
      return res.status(404).json({
        msg: "Invalid Parameter"
      })
    }
    
    const missionHistory = await Mission_Histories.findOne({
      where: {
        id: mission_history_id
      }
    });

    let searchTerm = `Ape_${missionHistory.getApe().address}`;
    redis.del(searchTerm)
    
    if (!missionHistory) {
      return res.status(404).json({
        msg: "No mission history"
      })
    }

    const unequipResult = await unequip({
      missionHistory,
    })

    return res.json({
      unequip: unequipResult
    })
  },
  
  async defaultEquip(req, res) {
    const {
      address,
      wallet,
      item_id
    } = req.body

    let searchTerm = `Ape_${address}`;
    redis.del(searchTerm);

    if(!address || !item_id || !wallet) {
      return res.status(200).json({
        msg: "Invalid Parameters"
      })
    }

    if (!await checkIfApeIsInWallet({
      address,
      wallet,
    })) {
      console.log(`Default Equip - This ape can not be detected in this wallet`);
      return res.status(200).json({
        msg: "This ape can not be detected in this wallet"
      })
    }
    
    const item = await Items.findOne({
      where: {
        id: item_id
      }
    })

    const ape = await Apes.findOne({
      where: {
        address
      }
    })


    
    if (!item || !ape) {
      return res.status(200).json({
        msg: "No Ape or No Item"
      })
    }
    
    const defaultItemEquips = await Default_Item_Equip.findAll({
      where: {
        ape_id: ape.id
      }
    })

    if (defaultItemEquips.length >= 3) {
      return res.status(200).json({
        msg: "Fully equipped for this ape"
      })
    }
    if (defaultItemEquips.filter(itemEquip => itemEquip.item_id === item.id).length > 0) {
      return res.status(200).json({
        msg: "This item is already equipped"
      })
    }

    const defaultItemEquip = await Default_Item_Equip.create({
      ape_id: ape.id,
      item_id: item.id,
    })

    return res.json({
      item_equip: defaultItemEquip
    })
  },
  
  async defaultUnequip(req, res) {
    const {
      address,
      wallet,
      item_id
    } = req.body

    let searchTerm = `Ape_${address}`;
    redis.del(searchTerm);

    if(!address || !item_id || !wallet) {
      return res.status(200).json({
        msg: "Invalid Parameters"
      })
    }

    if (!await checkIfApeIsInWallet({
      address,
      wallet,
    })) {
      console.log(`Default Unequip - This ape can not be detected in this wallet`);
      return res.status(200).json({
        msg: "This ape can not be detected in this wallet"
      })
    }
    
    const item = await Items.findOne({
      where: {
        id: item_id
      }
    })

    const ape = await Apes.findOne({
      where: {
        address
      }
    })
    
    if (!item || !ape) {
      return res.status(200).json({
        msg: "No Ape or No Item"
      })
    }
    
    const defaultItemEquip = await Default_Item_Equip.findOne({
      where: {
        ape_id: ape.id,
        item_id: item.id
      }
    })

    if (!defaultItemEquip) {
      return res.status(200).json({
        msg: "This item is not equipped yet"
      })
    }
    const destroyResult = await Default_Item_Equip.destroy({
      where: {
        ape_id: ape.id,
        item_id: item.id
      }
    })

    return res.json({
      item_unequip: destroyResult
    })
  },
  
  async defaultItems(req, res) {
    const {
      address
    } = req.query

    let searchTerm = `Ape_${address}`;
    redis.del(searchTerm);

    if(!address) {
      return res.status(200).json({
        msg: "Invalid Parameter"
      })
    }

    const ape = await Apes.findOne({
      where: {
        address
      }
    })
    
    if (!ape) {
      return res.status(200).json({
        msg: "No Ape"
      })
    }
    
    const defaultItemEquips = await Default_Item_Equip.findAll({
      where: {
        ape_id: ape.id
      },
      include: [
        {
          model: Items,
          required: false
        },
      ]
    })

    return res.json({
      default_items: defaultItemEquips
    })
  },
}