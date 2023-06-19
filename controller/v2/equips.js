const { Apes, Default_Item_Equip, Items, Utility } = require('../../models/index');

const Redis = require("ioredis");
const checkIfApeIsInWallet = require('../../utils/nft/check-if-ape-is-in-wallet');
const getLevel = require('../../utils/levels/get-level');
const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host

});

module.exports = {  
  async defaultEquip(req, res) {
    const {
      address,
      wallet,
      item_id,
      item_type,
    } = req.body

    const itemType = item_type || 'item'

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
    
    if (itemType === 'item') {
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
      
      const level = await getLevel(ape)

      const defaultItemEquips = await Default_Item_Equip.findAll({
        where: {
          ape_id: ape.id,
          type: 'item'
        },
        include: Items
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
        type: 'item'
      })

      return res.json({
        item_equip: defaultItemEquip
      })
    } else if (itemType === 'utility') {
      const item = await Utility.findOne({
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
          msg: "No Ape or No Utility"
        })
      }
      
      const defaultItemEquips = await Default_Item_Equip.findAll({
        where: {
          ape_id: ape.id,
          type: 'utility'
        },
        include: Utility
      })

      if (defaultItemEquips.length >= 2) {
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
        type: 'utility'
      })

      return res.json({
        item_equip: defaultItemEquip
      })
    }
  },
  
  async defaultUnequip(req, res) {
    const {
      address,
      wallet,
      item_id,
      item_type
    } = req.body

    const itemType = item_type || 'item'

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
    
    if (itemType === 'item') {
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
          item_id: item.id,
          type: 'item'
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
          item_id: item.id,
          type: 'item'
        }
      })
  
      return res.json({
        item_unequip: destroyResult
      })
    } else if (itemType === 'utility') {
      const item = await Utility.findOne({
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
          msg: "No Ape or No Utility"
        })
      }
      
      const defaultItemEquip = await Default_Item_Equip.findOne({
        where: {
          ape_id: ape.id,
          item_id: item.id,
          type: 'utility',
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
          item_id: item.id,
          type: 'utility',
        }
      })
  
      return res.json({
        item_unequip: destroyResult
      })
    }
  },
}