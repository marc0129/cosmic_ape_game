var express = require('express');
var router = express.Router();
var moment = require('moment');

const apes = require('../controller/ape');
const mission = require('../controller/mission');
const nft = require('../controller/nft');
const inventories = require('../controller/inventories');
const equips = require('../controller/equips')
const items = require('../controller/items')
const maps = require('../controller/maps')
const listings = require('../controller/listings')

const v2Accounts = require('../controller/v2/accounts');
const v2Apes = require('../controller/v2/ape');
const v2Mission = require('../controller/v2/mission');
const v2Maps = require('../controller/v2/maps');
const v2Items = require('../controller/v2/items');
const v2Resources = require('../controller/v2/resources');
const v2Currencies = require('../controller/v2/currencies');
const v2Equips = require('../controller/v2/equips');
const v2Levels = require('../controller/v2/levels');
const v2Info = require('../controller/v2/info');
const v2StakeRewards = require('../controller/v2/staking-rewards')
const v2Bank = require('../controller/v2/bank');
const v2Shop = require('../controller/v2/shop');

router.get('/health', (req, res) => {
  res.status(200).send('Ok');
});

// Home page route.
router.post('/apes/store',  apes.store)
router.post('/apes/store/bulk',  apes.bulkStore)
router.post('/apes/check-levelup', apes.checkLevelUp)
router.post('/apes/levelup', apes.levelUp)
router.get('/apes/info', apes.getInfo)

router.get('/maps', maps.maps)
router.get('/map/get', maps.getMap)

router.get('/missions', mission.missions)
router.get('/missions/map', mission.mapMissions)
router.get('/mission/get', mission.getMission);
router.post('/mission/go-mission-selected', mission.goMissionSelected)
router.post('/mission/go-mission', mission.goMissionSelected)
router.post('/mission/reward', mission.getReward)

router.get('/nft/fetch', nft.getWalletNfts)
router.post('/wallet/verify', nft.verifyWallet)

// inventories
router.get('/inventories', inventories.getInventories)
router.post('/inventories/create', inventories.createInventory)

// items
router.get('/items/get-ingredients', items.getIngredients)
router.get('/items', items.getItemsByTier)
router.post('/items/craft', items.craft)

//item equips
router.post('/equip/check-equip', equips.checkEquip)
router.post('/equip/equip', equips.equip)
router.post('/equip/unequip', equips.unequip)
router.post('/equip/default/equip', equips.defaultEquip)
router.post('/equip/default/unequip', equips.defaultUnequip)
router.get('/equip/default', equips.defaultItems)
router.get('/listings',listings.getlistings)
router.get('/listings/ape',listings.getlisting)
// router.get('/listings/get',listings.getlisting)
router.get('/stats', listings.getStats)
router.get("/itemsList", listings.getItems)
router.get("/levels", listings.getLevels)
router.get("/resourceList",listings.getResources)
// rewards
router.post('/reward/claim-all', mission.claimAllRewards)

//v2 apis
router.post('/v2/apes/store/bulk', v2Apes.bulkStore)
router.post('/v2/apes', v2Apes.getInfos)
router.post('/v2/ape/crowned', v2Apes.getCrowned)
router.post('/v2/ape/crown', v2Apes.setCrown)
router.post('/v2/ape/uncrown', v2Apes.removeCrown)
router.post('/v2/ape/favorite', v2Apes.favorite)
router.post('/v2/ape/unfavorite', v2Apes.unfavorite)
router.post('/v2/apes/levelup', v2Apes.levelUp)
router.post('/v2/apes/levelup-by-xp', v2Apes.levelUpByExperienceItems)
router.post('/v2/apes/evolute', v2Apes.evolute)
router.get('/v2/apes/refresh-stamina', v2Apes.refreshStamina)

router.get('/v2/account', v2Accounts.getInfo)

router.get('/v2/missions', v2Mission.missions)
router.get('/v2/missions/by-reward-item', v2Mission.missionsByRewardItem)
router.get('/v2/missions/by-reward-resource', v2Mission.missionsByRewardResource)
router.post('/v2/missions/go-mission-selected', v2Mission.goMissionSelected)
router.post('/v2/missions/claim-all-rewards', v2Mission.claimAllRewards)

router.get('/v2/maps', v2Maps.maps)
router.get('/v2/items', v2Items.items)
router.get('/v2/craft-recipes', v2Items.craftRecipes)
router.get('/v2/resources', v2Resources.resources)
router.get('/v2/currencies', v2Currencies.currencies)

router.post('/v2/equip/default/equip', v2Equips.defaultEquip)
router.post('/v2/equip/default/unequip', v2Equips.defaultUnequip)
router.post('/v2/craft', v2Items.craft)
router.post('/v2/items/forge', v2Items.forge)
router.post('/v2/items/repair', v2Items.repair)
router.post('/v2/items/reveal', v2Items.reveal)

router.get('/v2/info/repair-costs', v2Info.repairCosts)
router.get('/v2/info/evolution-costs', v2Info.evolutionCosts)

router.get('/v2/levels', v2Levels.levels)
router.get('/v2/staking-rewards', v2StakeRewards.reward)

//v2 shop
router.post('/v2/shop/generateToken', v2Shop.generateToken)
router.get('/v2/shop/getAll', v2Shop.getAll)

router.post('/v2/bank/deposit/start', v2Bank.depositStart)
router.post('/v2/bank/deposit/complete', v2Bank.depositComplete)
router.post('/v2/bank/withdraw', v2Bank.withdraw)
router.get('/v2/bank/verify-unconfirmed-signatures', v2Bank.verifyUnconfirmedSignatures)

module.exports = router;