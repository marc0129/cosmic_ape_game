const { Op } = require('sequelize');
const { 
  Apes,
  Inventory,
  Items,
  Resource,
  Resource_Inventory,
  Utility,
  Utility_Inventory,
  Mission_Histories,
  Mission_Item_Reward,
  Missions,
  Maps,
  Item_Equipped,
  Default_Item_Equip,
  Tier,
} = require('../../models/index');
const getCurrenciesByCharacters = require('../currencies/get-currencies-by-characters');

const getApesInfoByAddresses = async ({
  addresses,
  transaction
}) => {


  let existing_apes  = await Apes.findAll({
    where: {
      address: {
        [Op.in]: addresses
      }
    },
    attributes:['id'],


  },{transaction: transaction});

  let existing_ape_ids = existing_apes.map(a => a.id)

  let resource_inventories = await Resource_Inventory.findAll({
    where:{
      ape_id:{
        [Op.in]: existing_ape_ids
      },
      resource_quantity: {
        [Op.gt]: 0
      }
    },

    include: {
      model: Resource,
    },
  },{transaction: transaction})

  let inventories = await Inventory.findAll({
    where:{
      ape_id:{
        [Op.in]: existing_ape_ids
      },
      item_durability: {
        [Op.gt]: 0
      }
    },
    include: {
      model: Items,
      include: {
        model: Mission_Item_Reward,
        include: [{
          model: Missions,
          include: Maps,
        }],
      },
    },
    required: false,

  },{transaction: transaction})

  let utility_inventory = await Utility_Inventory.findAll({
    where: {
      ape_id:{
        [Op.in]: existing_ape_ids
      },
      utility_quantity: {
        [Op.gt]: 0
      }

    },
    include: {
      model: Utility,
    },
  },{transaction:transaction})


  let apes = await Apes.findAll({
    where: {
      address: {
        [Op.in]: addresses
      }
    },

    include: [
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
            }],
          },
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
        include: [{
          model: Items,
          // include: {
          //   model: Mission_Item_Reward,
          //   include: [{
          //     model: Missions,
          //     where: {
          //       is_active: true,
          //     },
          //     include: Maps,
          //   }],
          // },
        }, {
          model: Utility,
        }],
        as: 'default_items',
        required: false,
      },

      {
        model: Tier,
        required: true
      },
    ]
  }, { transaction })

   apes = apes.map(a => {
    let inv = inventories.filter(i => i.ape_id=== a.id);
    let resInv = resource_inventories.filter(i => i.ape_id=== a.id);
    let util_inv = utility_inventory.filter(i => i.ape_id=== a.id)

    return {...(a.dataValues),Inventories:inv||[],Resource_Inventories:resInv||[],Utility_Inventories:util_inv}
  })
  console.log(`Got apes from DB `)
  const currencies = await getCurrenciesByCharacters({
    apes,
    transaction,
  })

  return (apes || []).map(ape => ({
    ...(ape.dataValues || ape || {}),
    currencies: currencies.filter(currency => currency.character_id === ape.id)
  }))
}

module.exports = getApesInfoByAddresses;