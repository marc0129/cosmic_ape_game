const axios = require('axios');
const minted = require('../static/cosmic_mint_data.json')
const {Apes, Inventory, Items, Resource_Inventory, Resource} = require('../models/index');
const { Op } = require("sequelize");
const Redis = require("ioredis");
const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});
const getRarityData = require("../utils/services/howrare-api")
const {magic_eden_listings,get_magic_eden_stats} = require("../utils/services/magic-eden-api");
const fetchLevels = require('../utils/info/fetch-levels');
const listing_cache_expiry = 3600;

global.refreshingCache = false;
module.exports = {

  applyFilters(apes,query){
    let { search,item, resource,levelFrom, levelTo, priceFrom,priceTo, rankFrom, rankTo,listed} = query;
    let filteredApes
    if(listed == "true"){
      filteredApes = apes.filter((ape) => {
        return ape.listed == true
      })
    } else {
      filteredApes = apes
    }
    if (search && search != "") {
      filteredApes = filteredApes.filter((ape) => {
        return ape.name.includes(search);
      })
    }

    if (item && item != "") {
      let itemId = parseInt(item)
      filteredApes = filteredApes.filter(ape => {
        if (ape.game_info) {
          return ape.game_info.Inventories.some(i => itemId == i.item_id)
        }

      })
    }

    if (resource && resource != "") {
      let resourceId = parseInt(resource)
      filteredApes = filteredApes.filter(ape => {
        if (ape.game_info) {
          return ape.game_info.Resource_Inventories.some(r => resourceId == r.resource_id)
        }
      })
    }

    if ((levelFrom && levelFrom != "") && (levelTo && levelTo != "")) {
      let levelFrom = parseInt(levelFrom)
      let levelTo = parseInt(levelTo)
      filteredApes = filteredApes.filter(ape => {
        if (ape.game_info) {
          return (ape.game_info.level >= levelFrom) && (ape.game_info.level <=levelTo);
        }
      })
    }

    if ((rankFrom && rankFrom != "") && (rankTo && rankTo != "")) {
      let parsedRankFrom = parseInt(rankFrom)
      let parsedRankTo = parseInt(rankTo)
      filteredApes = filteredApes.filter(ape => {
        let rank = parseInt(ape.rank);
        return (rank >= parsedRankFrom) && (rank <= parsedRankTo);

      })
    }

    if ( (priceFrom && priceFrom != "") && (priceTo && priceTo != "")) {
      let parsedPriceFrom = parseFloat(priceFrom)
      let parsedPriceTo = parseFloat(priceTo)
      filteredApes = filteredApes.filter(ape => {
        if (ape.listed) {
          let parseApePrice = parseFloat(ape.price)
          return (parseApePrice >= parsedPriceFrom) && (parseApePrice <= parsedPriceTo);
        }
      })
    }
    return filteredApes;
  },

  handleResponse(res, apes, query, limit) {

    let {pageNumber, sort} = query

    if (apes) {
      let filteredApes =  module.exports.applyFilters(apes, query)
      if(sort != ""){
        let [property,direction] = sort.split("-")
        let sortOrder = direction=="asc" ?1:-1;

        if(property =="rank") {
          filteredApes.sort((a, b) => {
            let result = (a[property] < b[property]) ? -1 : (a[property]
                > b[property]) ? 1 : 0;
            return result * sortOrder;
          })
        }
        else if(property == "price"){
          filteredApes = filteredApes.filter(ape => {
            if (ape.listed) {
              return true;
            } else {
              return false;
            }
          })
          filteredApes.sort((a, b) => {
            let result = (a[property] < b[property]) ? -1 : (a[property]
                > b[property]) ? 1 : 0;
            return result * sortOrder;
          })
        }
        else if(property == "level") {
          filteredApes = filteredApes.filter(ape => {
            if (ape.game_info) {
              return true;
            } else {
              return false;
            }
          })
          filteredApes.sort((a, b) => {

            let result = (a.game_info.level < b.game_info.level) ? -1
                : (a.game_info.level
                    > b.game_info.level) ? 1 : 0;
            return result * sortOrder;
          });
        }

        console.log(`property ${property}  - direction ${direction}`)
      }
      let totalSize = filteredApes.length
      filteredApes = filteredApes.slice((pageNumber - 1) * limit,
          pageNumber * limit)
      res.status(200).send({
        apes: filteredApes,
        size: filteredApes.length,
        hasMore: (pageNumber * limit) < totalSize
      });
    } else {
      res.status(400).send({
        message: "Failed to retrieve apes"
      });
    }
  },

  async getlisting(req, res) {
    let { mint_address } = req.query;
    let searchTerm = "listed_apes"
    while(global.refreshingCache){
      console.log("sleeping waiting for cache refresh");
      await module.exports.sleep(5000)
    }
    await redis.get(searchTerm, async (err, listings) => {
          if (err)
            console.log(`Failed to get value from redis ${err}`);
          if (listings) {
            let apes = JSON.parse(listings);
            module.exports.handleListingResponse(res,mint_address,apes)

          } else {
            let apes = await module.exports.loadListings();
            //We will set this to the same key as the main application
            redis.set(searchTerm, JSON.stringify(apes));
            global.refreshingCache=false;
            module.exports.handleListingResponse(res,mint_address,apes)
          }
    });


  },

  async handleListingResponse(res, mint_address, apes) {
    let filteredApe;
    if (mint_address && mint_address != "") {
      filteredApe = apes.find((ape) => {
        return ape.mint_address == mint_address;
      })
    }
    if (!filteredApe) {
      res.status(404).send({
        message: `Ape not found with address ${mint_address}`
      })
    } else {
      let apes_game_info = await module.exports.getApeGameInfo(
          [filteredApe.mint_address]);
      if(apes_game_info && apes_game_info.length>0){
        filteredApe.game_info=apes_game_info[0];
      }
      res.status(200).send({
        ape: filteredApe
      })
    }
  },

  async sleep(millis) {
   return new Promise(resolve => setTimeout(resolve, millis));
  },
  async getlistings(req, res) {

    let limit = 20;
    let searchTerm = "listed_apes"
    while(global.refreshingCache){
      console.log("sleeping waiting for cache refresh");
      await module.exports.sleep(5000)
    }
    try {
      let stats = await axios.get(
          `${process.env.MAGIC_EDEN_HOST}/v2/collections/cosmic_ape_crusaders/stats`);

    let cacheStats = await redis.get("stats");
    if(cacheStats){
      let parsedCacheStats = JSON.parse(cacheStats)
      let currentListedCount = stats.data.listedCount;
      let cachedListedCount = parsedCacheStats.listedCount;
      let currentfloorPrice  =stats.data.floorPrice;
      let cachedFloorPrice = parsedCacheStats.floorPrice;
      let currentVolumeAll =  stats.data.volumeAll;
      let cachedVolumeAll = parsedCacheStats.volumeAll
      if((currentListedCount != cachedListedCount) || (currentfloorPrice != cachedFloorPrice) ||
      currentVolumeAll != cachedVolumeAll){
        console.log("something has changed on magic eden refreshing cache");
        await redis.del(searchTerm);
        global.refreshingCache = true
      }
    }
    }catch(err){
      console.log(err);
    }
    redis.get(searchTerm, async (err, listings) => {

      if (err)
        console.log(`Failed to get value from redis ${err}`);
      if (listings) {
        let apes = JSON.parse(listings);
        module.exports.handleResponse(res,apes, req.query,limit);
      } else {
        let apes = await module.exports.loadListings();
        redis.set(searchTerm, JSON.stringify(apes));
        global.refreshingCache=false;
        module.exports.handleResponse(res, apes, req.query,limit);
      }
    });

  },


  async loadListings(){
        global.refreshingCache=true
        let startTime = Date.now();
        let offset = 0;
        let limit = 20;
        let stats = await get_magic_eden_stats();
        let {listedCount} = stats;
        redis.set('stats', JSON.stringify(stats));

        let result  = await magic_eden_listings(offset,limit,listedCount)

        let rarity_collection = await getRarityData();

        let minted_addresses = minted.map((minted_Ape) => {
            return minted_Ape.address
        });
        let apes_game_info_minted = await module.exports.getApeGameInfo(minted_addresses)


        let all_apes = minted.map((minted_ape) => {

          let apeRank = 0;
          if(rarity_collection  && rarity_collection.length>0){
            apeRank = rarity_collection.find(function (ape){
              if(ape.mint === minted_ape.address){
                return true
              }
            })
          }
          let ape_game_info = apes_game_info_minted.find(function (ape, index) {
            if (ape.address === minted_ape.address) {
              return true;
            }
          });
          let magic_eden_listed = result.find(function (listed_ape){
            if(minted_ape.address === listed_ape.tokenMint){
              return true;
            }
          });


          let ape = {
            'mint_address': minted_ape.address,
            'price': (magic_eden_listed)? magic_eden_listed.price:null,
            'listed': (magic_eden_listed) ? true:false,
            'image_url': minted_ape.metadata.image,
            'name': minted_ape.metadata.name,
            'rank':apeRank.rank,
            'seller_address': (magic_eden_listed) ? magic_eden_listed.seller:null,
            'token_address': (magic_eden_listed) ? magic_eden_listed.tokenAddress: null,
            'game_info': ape_game_info
          }
          return ape;
        });

    let endtime = Date.now();
    let totaltimeTaken = endtime-startTime
    console.log(`Listing time is ${totaltimeTaken}`)

    return all_apes;
  },


  async getStats(req, res) {

    try {
      let stats = await get_magic_eden_stats();
      res.status(200).send(stats);

    } catch (err) {
      console.log(`Failed to get stats from magic eden ${err}`)
    }

  },

  async getApeGameInfo(addresses){


    let apes = await Apes.findAll({
      where: {
        address: {
          [Op.in]: addresses
        }
      },attributes:['address','level','cp'],
      include: [
        {
          model: Inventory,

          required: false,
          where: {
            item_durability: {
              [Op.gt]: 0
            }
          },
          attributes:['item_id','item_durability'],
          include: [
            {
              model: Items,
              attributes:['name','category','icon', 'description',"activation_chance","durability","tier","score","effect_bonus","effect_type"],

            },
          ]
        },

        {
          model: Resource_Inventory,
          attributes: ['resource_id','resource_quantity'],
          include: [
            {
              model:Resource,
              attributes: ['name', 'icon', 'description']
            }
          ],
          required: false
        },
      ]
    });

    return apes;

  },

  async getItems(req, res) {
    let items = await Items.findAll(

    )
    res.status(200).send(items)
  },

  async getResources(req, res) {
    let resources = await Resource.findAll(
        {
          where: {
            name: {
              [Op.notIn]: ["$COSMIC", "Cosmic Particles"]
            }
          }
        }

    )
    res.status(200).send(resources)
  },

  async getLevels(req, res) {
    let levels = fetchLevels()
    
    res.status(200).send(levels)
  }

}
