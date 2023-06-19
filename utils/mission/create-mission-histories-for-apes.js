var moment = require('moment');

const { Apes, Currency, Inventory, Item_Equipped, Mission_Histories, Account_Transaction, Character_Transaction, Utility_Inventory } = require('../../models/index')
const { Op } = require("sequelize")
const { TRANSACTION_PLAY_MISSION } = require('../../static/transaction-types')
const getCurrenciesByAccounts = require('../currencies/get-currencies-by-accounts')
const getCurrenciesByCharacters = require('../currencies/get-currencies-by-characters')
const getLevel = require('../levels/get-level')
const getValueBetweenLowestAndHighest = require('../statics/get-value-between-lowest-and-highest')
const getReducedInventoryDurabilityByMission = require('../items/get-reduced-inventory-durability-by-mission')
const getReducedInventoryEfficiencyByMission = require('../items/get-reduced-inventory-efficiency-by-mission')
const getEffectForInventory = require('../items/get-effect-for-inventory')
const getReducedUtilityInventoryDurabilityByMission = require('../utilities/get-reduced-utility-inventory-durability-by-mission');
const fetchMissionDurations = require('../info/fetch-mission-durations');

const createMissionHistoriesForApes = async ({
  account,
  apes,
  mission,
  apesInfo,
  redis,
  transaction,
}) => {
  if (!apes || !mission || !apesInfo) {
    return false
  }
  let actives = [], activeCurencies = [], utilActives = []
  const now = new Date()

  const accountCurrencies = await getCurrenciesByAccounts({
    accounts: [account], 
    transaction
  })
  const characterCurrencies = await getCurrenciesByCharacters({
    apes, 
    transaction
  })
  const missionCurrencies = mission.Mission_Currencies || []
  const missionDurations = await fetchMissionDurations({ redis })
  const missionDurationX = missionDurations.find(missionDuration => missionDuration.mission_tier === mission.tier)
  
  //check cost to start the mission
  const ables = apes.map(ape => {
    const info = apesInfo.find(apeInfo => apeInfo.address === ape.address)
    const inventoryIds = (info && info.inventoryIds) || []
    const inventories = (ape.Inventories || []).filter(inv => inventoryIds.includes(inv.id))
    const utilityInventoryIds = (info && info.utilityInventoryIds) || []
    const utilityInventories = (ape.Utility_Inventories || []).filter(inv => utilityInventoryIds.includes(inv.id))

    const inventoriesWithChance = inventories.map(inventory => ({
      ape,
      inventory,
      isActive: Math.random() * 100 <= inventory.Item.activation_chance
    }))

    const currenciesWithAvailability = missionCurrencies.map(
      missionCurrency => {
        const amount = (getValueBetweenLowestAndHighest(missionCurrency.lowest_amount, missionCurrency.highest_amount) || 0).toFixed(1)

        if (missionCurrency.Currency.belongs_to === 'Account') {
          const accountCurrency = accountCurrencies.find(accountCurrency => accountCurrency.currency_id === missionCurrency.currency_id)
          if (!accountCurrency) {
            return {
              isActive: amount === 0,
              amount,
              missionCurrency,
              ape,
            }
          } else {
            const updatedAmount = (accountCurrency.amount || 0) - amount
            accountCurrency.set({
              amount: updatedAmount
            })

            return {
              isActive: updatedAmount >= 0,
              amount,
              missionCurrency,
              ape,
            }
          }
        } else if (missionCurrency.Currency.belongs_to === 'Character') {
          const characterCurrency = characterCurrencies.find(characterCurrency => characterCurrency.currency_id === missionCurrency.currency_id && characterCurrency.character_id === ape.id)
          if (!characterCurrency) {
            return {
              isActive: amount === 0,
              amount,
              missionCurrency,
              ape,
            }
          } else {
            return {
              isActive: (characterCurrency.amount || 0) >= amount,
              amount,
              missionCurrency,
              ape,
            }
          }
        }
      }
    )
    const unableCurrencies = currenciesWithAvailability.filter(currencyResult => !currencyResult.isActive)

    if (unableCurrencies.length === 0) {
      actives = actives.concat(inventoriesWithChance)
      utilActives = utilActives.concat(utilityInventories.map(inventory => ({
        ape,
        inventory,
      })))
      activeCurencies = activeCurencies.concat(currenciesWithAvailability)
    }

    //adjusting mission time by equipped items
    const speedInventory = inventoriesWithChance.find(inv => !!inv.isActive && inv.inventory.Item.category === 'speed')
    let missionDuration = !!speedInventory ? (mission.time * (100.0 - speedInventory.inventory.Item.effect_bonus) / 100) : mission.time
    if (!!missionDuration) {
      missionDuration *= (missionDurationX[`tier${ape.tier || 0}`] || 1)
    }

    return {
      result: unableCurrencies.length === 0,
      ape,
      time: missionDuration
    }
  })

  let missionHistories = []

  try {
    const filteredAbles = ables.filter(able => !!able.result)
    console.log('Bulk Creating mission histories', filteredAbles)

    missionHistories = await Mission_Histories.bulkCreate(filteredAbles.map(able => ({
      ape_id: able.ape.id,
      mission_id: mission.id,
      level: able.ape.level,
      started_at: now,
      duration: able.time || mission.time,
      expected_end_time: moment(now).add(able.time || mission.time, 'hours').toDate()
    })), { transaction, returning: true })
    console.log('Mission histories are bulk-created', missionHistories)

    console.log('Creating currency transactions since the apes are sent to the mission', activeCurencies)
    const accountTransactions = await Account_Transaction.bulkCreate(
      activeCurencies
        .filter(activeCurrency => activeCurrency.missionCurrency.Currency.belongs_to === 'Account')
        .map(activeCurrency => ({
          account_id: account.id,
          currency_id: activeCurrency.missionCurrency.currency_id,
          amount: -activeCurrency.amount,
          transaction_date: now,
          source_of_transaction: {
            type: TRANSACTION_PLAY_MISSION,
            mission_id: activeCurrency.missionCurrency.mission_id,
            character_id: activeCurrency.ape.id,
            account_id: account.id,
          },
          audit_fields: {
            transaction_date: now,
            lowest_amount: activeCurrency.missionCurrency.lowest_amount,
            highest_amount: activeCurrency.missionCurrency.highest_amount,
          },
          is_settlement: false,
        }))
    )
    console.log('Account Transactions are bulk-created to play missions', accountTransactions)

    const characterTransactions = await Character_Transaction.bulkCreate(
      activeCurencies
        .filter(activeCurrency => activeCurrency.missionCurrency.Currency.belongs_to === 'Character')
        .map(activeCurrency => ({
          character_id: activeCurrency.ape.id,
          currency_id: activeCurrency.missionCurrency.currency_id,
          amount: -activeCurrency.amount,
          transaction_date: now,
          source_of_transaction: {
            type: TRANSACTION_PLAY_MISSION,
            mission_id: activeCurrency.missionCurrency.mission_id,
            character_id: activeCurrency.ape.id,
            account_id: account.id,
          },
          audit_fields: {
            transaction_date: now,
            lowest_amount: activeCurrency.missionCurrency.lowest_amount,
            highest_amount: activeCurrency.missionCurrency.highest_amount,
          },
          is_settlement: false,
        }))
    )
    console.log('Character Transactions are bulk-created to play missions', characterTransactions)
  } catch {
    console.log('Unable to create the mission histories')
    return false
  }

  try {
    console.log('Bulk equipping', actives)
    const itemEquippeds = await Item_Equipped.bulkCreate(await Promise.all(actives.map(async active => ({
      mission_history_id: missionHistories.find(history => history.ape_id === active.ape.id).id,
      item_id: active.inventory.Item.id,
      type: 'item',
      is_active: active.isActive,
      effect: await getEffectForInventory(active.inventory)
    }))), { transaction, returning: true })
    console.log('Bulk equipped', itemEquippeds)

    console.log('Bulk equipping utilities', utilActives)
    const utilItemEquippeds = await Item_Equipped.bulkCreate(await Promise.all(utilActives.map(async active => ({
      mission_history_id: missionHistories.find(history => history.ape_id === active.ape.id).id,
      item_id: active.inventory.Utility.id,
      type: 'utility',
      is_active: true,
      effect: 1
    }))), { transaction, returning: true })
    console.log('Utilities bulk equipped', utilItemEquippeds)

    console.log('Reducing inventory durability && efficiency', actives)
    const updatedInventories = await Inventory.bulkCreate(await Promise.all(actives.map(async active => ({
      ...active.inventory.dataValues,
      item_durability: await getReducedInventoryDurabilityByMission({ inventory: active.inventory, mission }),
      efficiency: await getReducedInventoryEfficiencyByMission({ inventory: active.inventory, mission })
    }))), {
      transaction,
      returning: true,
      updateOnDuplicate: ['item_durability', 'efficiency']
    })
    actives.forEach(active => active.inventory.set({ item_durability: active.inventory.item_durability - 1 }))
    console.log('Reduced inventory durability && efficiency', updatedInventories)

    console.log('Reducing utility inventory durability && efficiency', utilActives)
    const updatedUtilityInventories = await Utility_Inventory.bulkCreate(await Promise.all(utilActives.map(async active => ({
      ...active.inventory.dataValues,
      utility_durability: await getReducedUtilityInventoryDurabilityByMission({ inventory: active.inventory, mission }),
    }))), {
      transaction,
      returning: true,
      updateOnDuplicate: ['utility_durability']
    })
    utilActives.forEach(active => active.inventory.set({ utility_durability: active.inventory.utility_durability - 1 }))
    console.log('Reduced utility inventory durability && efficiency', updatedUtilityInventories)
  } catch(err) {
    console.log('Unable to equip inventories', err)
    return false
  }

  return missionHistories
}

module.exports = createMissionHistoriesForApes