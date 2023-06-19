const { Apes, Resource_Inventory, Craft_Recipe, Resource, Items, Inventory, sequelize } = require('../models/index');
const Redis = require("ioredis");
const checkIfApeIsInWallet = require('../utils/nft/check-if-ape-is-in-wallet');
const {Op} = require("sequelize");
const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
  async craft(req, res) {
    const {
      ape_id,
      main_ingredient_id,
      craftable_id,
      ingredients,
      wallet,
      address,
    } = req.body;

    if (!ape_id || !address) {
			return res.status(400).json({
				msg: "Invalid Ape"
			})
		}

		if (!main_ingredient_id) {
			return res.status(400).json({
				msg: "Invalid Ingredient Item"
			})
		}

    if (!craftable_id) {
			return res.status(400).json({
				msg: "Invalid Craftable Item"
			})
		}

    if (!wallet) {
			return res.status(400).json({
				msg: "Connect wallet to craft items"
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

    try {
      await sequelize.transaction(async (t) => {
        var inventory = await Inventory.findOne({
          where: {
            ape_id,
            item_id: main_ingredient_id,
          }
        }, { transaction: t });
    
        inventory.item_id = craftable_id;
        inventory.item_durability = (await Items.findOne({
          where: {
            id: craftable_id
          }
        }, { transaction: t })).durability;

        try {
          console.log(`APE_ID=${ape_id} - Craft Item ${JSON.stringify(inventory)}`);
          await inventory.save({ transaction: t });
        } catch (err) {
          console.log(err)
          throw new Error(`Failed to craft item ${craftable_id} for ${ape_id} - ${err}`)
        }
    
        const resource_id_for_cp = (await Resource.findOne({
          where: {
            name: 'Cosmic Particles'
          }
        }, { transaction: t })).id;
    
        var current_ape = await Apes.findOne({
          where: {
            id: ape_id
          }
        }, { transaction: t });
    
        let searchTerm = `Ape_${current_ape.address}`;
        redis.del(searchTerm);
    
        for (let i = 0 ; i < ingredients.length ; i ++) {
          if (ingredients[i].ingredient_id == resource_id_for_cp) {
            try {
              current_ape.cp -= ingredients[i].ingredient_quantity;
              await current_ape.save({ transaction: t });
              continue;
            } catch (err) {
              console.log(err)
              throw new Error(`Failed to craft item ${craftable_id} for ${ape_id} - ${err}`)
            }
          }
    
          var resource_inventory = await Resource_Inventory.findOne({
            where: {
              ape_id,
              resource_id: ingredients[i].Resource.id
            }
          }, { transaction: t });
          
          try {
            resource_inventory.resource_quantity -= ingredients[i].ingredient_quantity;
            await resource_inventory.save({ transaction: t });
          } catch (err) {
            console.log(err)
            throw new Error(`Failed to craft item ${craftable_id} for ${ape_id} - ${err}`)
          }
        }
    
        res.status(200).json({
          msg: "Success"
        })
      })
    } catch(err) {
      console.log(err);
      res.status(400).json({
          msg: `Failed to craft item - ${err.message}`
      })
    }
  },

  async getIngredients(req, res) {
    const { craftable_id } = req.query;

    let searchTerm = `Ingredients_${craftable_id}`;

    redis.get(searchTerm, async (err, result) => {
      if(err)
        console.log(`Failed to get value from redis ${err}`);

      if(result) {
        console.log("Hit");
        res.json(JSON.parse(result));
      } else {
        if (!craftable_id) {
          return res.status(400).json({
            msg: "Invalid Craftable Item"
          });
        }
    
        var ingredient_item = await Craft_Recipe.findOne({
          where: {
            craftable_id,
            ingredient_type: 'item'
          },
          include: [
            {
              model: Items,
              required: false
            }
          ]
        });
    
        var ingredient_resources = await Craft_Recipe.findAll({
          where: {
            craftable_id,
            ingredient_type: 'resource'
          },
          include: [
            {
              model: Resource,
              required: false
            }
          ]
        });
        
        redis.set(searchTerm, JSON.stringify({
          ingredient_item,
          ingredient_resources
        }), "EX", 600);
        res.status(200).json({
          ingredient_item,
          ingredient_resources
        })
      }
    })
  },

  async getItemsByTier(req, res) {
    const { tier, ape_id} = req.query;

    if (!tier || tier > 8) {
      return res.status(400).json({
        msg: "Invalid Tier"
      });
    }

    if (!ape_id) {
      return res.status(400).json({
        msg: "Invalid Ape"
      })
    }

    let searchTerm = `Items_By_Tier_${tier}`;
    var items;
    var recipes;

    let ape = await Apes.findOne({
      where: {
        id: ape_id
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
          ]
      });
    let cp_balance  = await ape.cp;
    let inventories =  JSON.parse(JSON.stringify(ape.Inventories));
    let resource_inventories = JSON.parse(JSON.stringify(ape.Resource_Inventories));

        redis.get(searchTerm,async (err,result) => {
      if(err) {
        console.log(`Failed to get value from redis ${err}`);
        return
      }

      if(result) {
        console.log("Hit");
        items = JSON.parse(result).items;
        recipes = JSON.parse(result).recipes;
      }
      else {
        items = await Items.findAll({
          where: {
            tier: tier - 1
          },
        })

        if (tier == 1) {
          redis.set(searchTerm, JSON.stringify({
            items,
            recipes: []
          }), "EX", 600);
          return res.status(200).json(items)
        }
      
        recipes = await Craft_Recipe.findAll({
          where: {
            craftable_tier: tier - 1
          },
        })
        redis.set(searchTerm, JSON.stringify({
          items,
          recipes
        }), "EX", 600);
        items = items.map(item => item.dataValues)
      }

      const resource_id_for_cp = (await Resource.findOne({
        where: {
          name: 'Cosmic Particles'
        }
      })).id;
      
      var itemsByTier = await Promise.all(items.map(async item => {
        const ingredients = recipes.filter(recipe => recipe.craftable_id == item.id)
        
        let item_with_uncraftable = null
        ingredients.every(ingredient => {
          const { ingredient_id, ingredient_quantity, ingredient_type } = ingredient;
          
          if (ingredient_type == 'item') {
            try {
              let main_ingredient = inventories.find(inventory => inventory.ape_id == ape_id && inventory.item_id == ingredient_id)
              if (! main_ingredient) {
                item_with_uncraftable = {
                  ...item,
                  uncraftable: 1
                }
                return false
              }
      
              return true
            } catch (err) {
              console.log(err);
              item_with_uncraftable = {
                ...item,
                uncraftable: 1
              }
              return false
            }
          }
    
          if (ingredient_id == resource_id_for_cp) {
            if (cp_balance < ingredient_quantity) {
              item_with_uncraftable = {
                ...item,
                uncraftable: 2
              }
              return false
            }
    
            return true
          }
          
          try {
            const resource_balance = resource_inventories.find(inventory => inventory.ape_id == ape_id && inventory.resource_id == ingredient_id)?.resource_quantity || 0
    
            if (resource_balance < ingredient_quantity) {
              item_with_uncraftable = {
                ...item,
                uncraftable: 2
              }
              return false
            }

            return true
          } catch (err) {
            item_with_uncraftable = {
              ...item,
              uncraftable: 2
            }
            return false
          }
        })
        
        if (item_with_uncraftable == null) {
          item_with_uncraftable = {
            ...item,
            uncraftable: 0
          }
        }
        return item_with_uncraftable
      }))
      res.json(itemsByTier);
    })
  }
}