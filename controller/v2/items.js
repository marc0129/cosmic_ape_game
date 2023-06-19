
const { Apes, Account_Transaction, Character_Transaction, Currency, Items, Craft_Recipe, Resource, Inventory, Maps, Missions, Mission_Item_Reward, Resource_Inventory, Utility_Inventory, Utility, sequelize } = require('../../models/index');
const Redis = require("ioredis");
const { Op } = require('sequelize');
const checkIfApeIsInWallet = require('../../utils/nft/check-if-ape-is-in-wallet');
const { TRANSACTION_CRAFT_ITEMS, TRANSACTION_REPAIR_ITEM } = require('../../static/transaction-types');
const getOrCreateAccountIfNeeded = require('../../utils/accounts/get-or-create-account-if-needed');
const getCurrenciesByAccounts = require('../../utils/currencies/get-currencies-by-accounts');
const getCurrenciesByCharacters = require('../../utils/currencies/get-currencies-by-characters');
const fetchRepairCosts = require('../../utils/info/fetch-repair-costs');
const { MYSTERIOUS_KEYS_REVEAL_CHANCES } = require('../../static/mysterious-keys-reveal-chances');
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host
    
});

module.exports = {
    async items(req, res) {
        let searchTerm = "Items"
        let items
        
        try {
            console.log('Getting items from cache')
            items = await redis.get(searchTerm)
            
            if (!!items) {
                console.log(`Items retrieved from cache `)
                return res.json(JSON.parse(items));
            }
        } catch (err) {
            console.log(`Failed to get items from cache - ${err}`)
        }
        
        try {
            console.log('Getting items from DB')
            
            items = await Items.findAll();
            
            console.log(`Got items from DB && set to Cache `)
            redis.set(searchTerm, JSON.stringify(items), "EX", 600);
            
            return res.json(items)
        } catch (err) {
            console.log(`Failed to get items ${err}`)
            
            return res.status(500).json({
                msg: "Something went wrong."
            })
        }
    },
    
    async craftRecipes(req, res) {
        let searchTerm = "CraftRecipes"
        let craftRecipes
        
        try {
            console.log('Getting craft recipes from cache')
            craftRecipes = await redis.get(searchTerm)
            
            if (!!craftRecipes) {
                return res.json(JSON.parse(craftRecipes));
            }
        } catch (err) {
            console.log(`Failed to get craftRecipes from cache - ${err}`)
        }
        
        try {
                console.log('Getting craftRecipes from DB')
            
            craftRecipes = await Items.findAll({
                include: [{
                    model: Craft_Recipe,
                    as: 'recipes',
                    required: false,
                    where: {
                        is_active: true,
                    },
                    include: [{
                        model: Items,
                        include: {
                            model: Mission_Item_Reward,
                            include: [{
                                model: Missions,
                                where: {
                                    is_active: true,
                                },
                                include: Maps
                            }]
                        },
                    }, {
                        model: Resource,
                    }, {
                        model: Currency,
                    }]
                }, {
                    model: Mission_Item_Reward,
                    include: [{
                        model: Missions,
                        where: {
                            is_active: true,
                        },
                        include: Maps
                    }]
                }],
            });
            craftRecipes = craftRecipes
            .filter(recipe => (recipe.recipes || []).length > 0)
            .map(recipe => ({
                ...(recipe.dataValues || {}),
                recipes: (recipe.recipes || []).map(r => ({
                    ...(r.dataValues || {}),
                    ingredient: (
                        r.ingredient_type === 'resource' 
                        ? r.Resource 
                        : r.ingredient_type === 'currency' 
                        ? r.Currency 
                        : r.Item
                    )
                }))
            }))
            

            redis.set(searchTerm, JSON.stringify(craftRecipes));
            
            return res.json(craftRecipes)
        } catch (err) {
            console.log(`Failed to get craftRecipes ${err}`)
            
            return res.status(500).json({
                msg: "Something went wrong."
            })
        }
    },
    
    async craft(req, res) {
        const {
            main_ingredient_id,
            craftable_id,
            ingredient_ids,
            ingredient_currency_ids,
            wallet,
            address,
        } = req.body;
        
        if (!address) {
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
            console.log(`Craft - This ape can not be detected in this wallet`);
            return res.status(200).json({
                msg: "This ape can not be detected in this wallet"
            })
        }
        
        try {
            await sequelize.transaction(async (t) => {
                const account = await getOrCreateAccountIfNeeded({ address: wallet, transaction: t })
                const ape = await Apes.findOne({
                    where: {
                        address,
                    }
                })
                var inventory = await Inventory.findOne({
                    where: {
                        ape_id: ape.id,
                        item_id: main_ingredient_id,
                    }
                }, { transaction: t });
                if (!inventory) {
                    throw new Error(`No main ingredient to craft this item - ingredient id(${main_ingredient_id})`)
                }

                const now = new Date()
                
                inventory.item_id = craftable_id;
                inventory.item_durability = (await Items.findOne({
                    where: {
                        id: craftable_id
                    }
                }, { transaction: t })).durability;
                
                try {
                    console.log(`address=${address} - Craft Item ${JSON.stringify(inventory)}`);
                    await inventory.save({ transaction: t });
                } catch (err) {
                    console.log(err)
                    throw new Error(`Failed to craft item ${craftable_id} for ${address} - ${err}`)
                }

                const ingredients = await Craft_Recipe.findAll({
                    where: {
                        id: {
                            [Op.in]: ingredient_ids || []
                        }
                    },
                    include: Resource
                })
                
                redis.del(`Ape_${ape.address}`)
                redis.del(`Account_${wallet}`)
                
                for (let i = 0 ; i < ingredients.length ; i ++) {                    
                    var resource_inventory = await Resource_Inventory.findOne({
                        where: {
                            ape_id: ape.id,
                            resource_id: ingredients[i].Resource.id
                        }
                    }, { transaction: t });
                    
                    try {
                        resource_inventory.resource_quantity -= ingredients[i].ingredient_quantity;
                        if (resource_inventory.resource_quantity < 0) {
                            throw new Error(`Not enough resource to craft this item - ${ingredients[i]}`)
                        }
                        await resource_inventory.save({ transaction: t });
                    } catch (err) {
                        console.log(err)
                        throw new Error(`Failed to craft item ${craftable_id} for ${address} - ${err}`)
                    }
                }

                const currencyIngredients = await Craft_Recipe.findAll({
                    where: {
                        id: {
                            [Op.in]: ingredient_currency_ids || []
                        }
                    },
                    include: Currency
                })

                console.log('checking if currencies are enough')
                const accountCurrencies = await getCurrenciesByAccounts({ accounts: [ account ], transaction: t })
                const characterCurrencies = await getCurrenciesByCharacters({ apes: [ ape ], transaction: t })
                currencyIngredients.forEach(ingredient => {
                    if (ingredient.ingredient_type !== 'currency' || !ingredient.Currency) {
                        throw new Error(`Failed to craft item ${craftable_id} for ${address} - ${err}`)
                    }
                    const amount = (
                        ingredient.Currency.belongs_to === 'Account' 
                        ? accountCurrencies.find(accountCurrency => accountCurrency.currency_id === ingredient.ingredient_id)?.amount || 0
                        : ingredient.Currency.belongs_to === 'Character' 
                        ? characterCurrencies.find(characterCurrency => characterCurrency.currency_id === ingredient.ingredient_id)?.amount || 0
                        : 0
                    )

                    if (!amount && !!ingredient.ingredient_quantity) {
                        throw new Error(`Not enough ${ingredient.Currency.name} to craft this item`)
                    } else if (amount < ingredient.ingredient_quantity) {
                        throw new Error(`Not enough ${ingredient.Currency.name} to craft this item`)
                    }
                })

                //account currency transactions
                const accountTransactions = await Account_Transaction.bulkCreate(
                    currencyIngredients
                    .filter(ingredient => ingredient.ingredient_type === 'currency' && ingredient.Currency?.belongs_to === 'Account')
                    .map(ingredient => ({
                        account_id: account.id,
                        currency_id: ingredient.ingredient_id,
                        amount: -ingredient.ingredient_quantity,
                        transaction_date: now,
                        source_of_transaction: {
                            type: TRANSACTION_CRAFT_ITEMS,
                            craft_recipe_id: ingredient.id,
                            character_id: ape.id,
                            account_id: account.id,
                        },
                        audit_fields: {
                            transaction_date: now,
                            currency_name: ingredient.Currency.name,
                            amount: -ingredient.ingredient_quantity,
                        },
                        is_settlement: false,
                    })),
                    {
                        transaction: t
                    }
                )
                //account currency transactions
                const characterTransactions = await Character_Transaction.bulkCreate(
                    currencyIngredients
                    .filter(ingredient => ingredient.ingredient_type === 'currency' && ingredient.Currency?.belongs_to === 'Character')
                    .map(ingredient => ({
                        character_id: ape.id,
                        currency_id: ingredient.ingredient_id,
                        amount: -ingredient.ingredient_quantity,
                        transaction_date: now,
                        source_of_transaction: {
                            type: TRANSACTION_CRAFT_ITEMS,
                            craft_recipe_id: ingredient.id,
                            character_id: ape.id,
                            account_id: account.id,
                        },
                        audit_fields: {
                            transaction_date: now,
                            currency_name: ingredient.Currency.name,
                            amount: -ingredient.ingredient_quantity,
                        },
                        is_settlement: false,
                    })),
                    {
                        transaction: t
                    }
                )
                
                return res.status(200).json({
                    ape,
                    accountTransactions,
                    characterTransactions
                })
            })
        } catch(err) {
            console.log(err);
            if (err.message.includes('Not enough resource to craft this item')) {
                return res.status(400).json({
                    msg: 'Not enough resource to craft this item'
                })
            } else if (err.message.includes('No main ingredient to craft this item')) {
                return res.status(400).json({
                    msg: 'No main ingredient to craft this item'
                })
            } else {
                res.status(400).json({
                    msg: `Failed to craft item - ${err.message}`
                })
            }
        }
    },
    
    async forge(req, res) {
        const {
            inventoryId,
            materials,
            wallet,
            address,
        } = req.body;
        
        if (!address) {
            return res.status(400).json({
                msg: "Invalid Ape Address"
            })
        }
        
        if (!inventoryId || !materials || (materials || []).length === 0) {
            return res.status(400).json({
                msg: "Invalid Inventory or Materials"
            })
        }
        
        if (!wallet) {
            return res.status(400).json({
                msg: "Connect wallet to forge items"
            })
        }
        
        if (!await checkIfApeIsInWallet({
            address,
            wallet,
        })) {
            console.log(`Forge - This ape can not be detected in this wallet`);
            return res.status(200).json({
                msg: "This ape can not be detected in this wallet"
            })
        }
        
        try {
            await sequelize.transaction(async (transaction) => {
                const account = await getOrCreateAccountIfNeeded({ address: wallet, transaction })
                const ape = await Apes.findOne({
                    where: {
                        address,
                    }
                }, { transaction })
                const inventory = await Inventory.findOne({
                    where: {
                        id: inventoryId,     
                        item_durability: {
                            [Op.gt]: 0
                        }
                    },
                    include: Items
                }, { transaction });

                if (!inventory) {
                    throw new Error(`No inventory to be forged - inventory id(${inventoryId})`)
                } else if (inventory.ape_id !== ape.id) {
                    throw new Error(`This inventory is not allocated to the current ape - inventory id(${inventoryId}), ape id(${ape.id})`)
                }
                const invMaterialIds = (materials || []).filter(material => material.type === 'item').map(material => material.id)
                const invMaterials = await Inventory.findAll({
                    where: {
                        id: {
                            [Op.in]: invMaterialIds
                        },     
                        item_durability: {
                            [Op.gt]: 0
                        },
                        ape_id: ape.id
                    },
                    include: Items
                }, { transaction });

                if (!invMaterialIds.length > invMaterials.length) {
                    throw new Error(`Not enough materials to be used for forging - material ids(${invMaterialIds})`)
                }

                const now = new Date()
                
                try {
                    inventory.set({
                        experience: Math.min(
                            inventory.Item?.experience || 0,
                            invMaterials.map(material => material.Item?.gxp || 0).reduce((a, b) => a + b, inventory.experience || 0)
                        )
                    })
                    console.log(`address=${address} - Forge Item ${JSON.stringify(inventory)}`);
                    await inventory.save({ transaction });
                } catch (err) {
                    console.log(err)
                    throw new Error(`Failed to forge item ${inventoryId} for ${address} - ${err}`)
                }

                console.log(`Make materials' durabilities to 0`)
                
                const updatedMaterials = await Inventory.update({
                    item_durability: 0
                }, {
                    where: {
                        id: {
                            [Op.in]: invMaterials.map(material => material.id)
                        }
                    },
                    transaction
                });
                
                redis.del(`Ape_${ape.address}`)
                  
                return res.status(200).json({
                    ape,
                })
            })
        } catch(err) {
            console.log(err);
            if (err.message.includes('No inventory to be forged')) {
                return res.status(400).json({
                    msg: 'No inventory to be forged'
                })
            } else if (err.message.includes('This inventory is not allocated to the current ape')) {
                return res.status(400).json({
                    msg: 'This inventory is not allocated to the current ape'
                })
            } else if (err.message.includes('Not enough materials to be used for forging')) {
                return res.status(400).json({
                    msg: 'Not enough materials to be used for forging'
                })
            } else {
                res.status(400).json({
                    msg: `Failed to forge item - ${err.message}`
                })
            }
        }
    },
    
    async repair(req, res) {
        const {
            inventoryId,
            materials,
            efficiency,
            wallet,
            address,
        } = req.body;
        
        if (!address) {
            return res.status(400).json({
                msg: "Invalid Ape Address"
            })
        }
        
        if (!inventoryId || !materials || !efficiency) {
            return res.status(400).json({
                msg: "Invalid Parameters"
            })
        }
        
        if (!wallet) {
            return res.status(400).json({
                msg: "Connect wallet to repair items"
            })
        }
        
        if (!await checkIfApeIsInWallet({
            address,
            wallet,
        })) {
            console.log(`Repair - This ape can not be detected in this wallet`);
            return res.status(200).json({
                msg: "This ape can not be detected in this wallet"
            })
        }
        
        try {
            await sequelize.transaction(async (transaction) => {
                const account = await getOrCreateAccountIfNeeded({ address: wallet, transaction })
                const ape = await Apes.findOne({
                    where: {
                        address,
                    }
                }, { transaction })
                const inventory = await Inventory.findOne({
                    where: {
                        id: inventoryId,     
                        item_durability: {
                            [Op.gt]: 0
                        }
                    },
                    include: Items
                }, { transaction });

                if (!inventory) {
                    throw new Error(`No inventory to be repaired - inventory id(${inventoryId})`)
                } else if (inventory.ape_id !== ape.id) {
                    throw new Error(`This inventory is not allocated to the current ape - inventory id(${inventoryId}), ape id(${ape.id})`)
                }

                const materialIds = (materials || []).map(material => material.id)
                const invMaterials = await Resource_Inventory.findAll({
                    where: {
                        resource_id: {
                            [Op.in]: materialIds
                        },
                        ape_id: ape.id
                    },
                    include: Resource
                }, { transaction });

                const now = new Date()
                let efficiencyFromItems = 0
                const updatedMaterialInventories = await Promise.all(
                    materials.map(async material => {
                        if (!material.count) return true

                        const inv = invMaterials.find(inv => material.id === inv.resource_id)
                        if ((inv?.resource_quantity || 0) < material.count) {
                            throw new Error(`Not enough materials to be used for repairing - material ids(${materialIds})`)
                        }
                        
                        const reparingEfficiency = (typeof inv.Resource.effect === 'object') 
                                        ? (inv.Resource.effect?.efficiency || 0 )
                                        : (JSON.parse(inv.Resource.effect || '{}' )?.efficiency || 0)
                        efficiencyFromItems += (inventory.Item?.efficiency / 100 * reparingEfficiency * material.count)

                        console.log(`Reduce ${inv.Resource.name || ''}'s count by ${material.count}`)
                        const updatedInv = await inv.update({
                            resource_quantity: inv.resource_quantity - material.count
                        }, { transaction })

                        return updatedInv
                    })
                )

                const payingEfficiency = Math.max(0, efficiency - efficiencyFromItems - inventory.efficiency)
                console.log('Pay for not enough repairing efficiency', payingEfficiency)
                if (payingEfficiency > 0) {
                    const accountTransactions = await getCurrenciesByAccounts({
                        accounts: [account],
                        transaction,
                    })

                    const cosmic = accountTransactions.find(trx => trx.Currency.name === 'Cosmic')
                    const gold = accountTransactions.find(trx => trx.Currency.name === 'Gold')
                    const repairCosts = await fetchRepairCosts({ redis })
                    const cost = repairCosts.find(cost => cost.tier === (inventory.Item?.tier || 0))

                    if (!cost) {
                        throw new Error(`Not enough currencies to be used for repairing`)
                    }
                    if ((cosmic?.amount || 0) < cost.cosmic * payingEfficiency) {
                        throw new Error(`Not enough $COSMIC to be used for repairing`)
                    }
                    if ((gold?.amount || 0) < cost.gold * payingEfficiency) {
                        throw new Error(`Not enough Gold to be used for repairing`)
                    }

                    console.log(`Creating a transaction for ${ cost.cosmic * payingEfficiency } $COSMIC for forge`)
                    const cosmicTransaction = await Account_Transaction.create(
                      {
                        account_id: account.id,
                        currency_id: cosmic.Currency.id,
                        amount: -cost.cosmic * payingEfficiency,
                        transaction_date: now,
                        source_of_transaction: {
                          type: TRANSACTION_REPAIR_ITEM,
                          efficiency_point: payingEfficiency,
                          cost_per_efficiency: cost.cosmic,
                          character_id: ape.id,
                          account_id: account.id,
                        },
                        audit_fields: {
                          transaction_date: now,
                          item_tier: inventory.Item?.tier || 0,
                          efficiency_point: payingEfficiency,
                          cost_per_efficiency: cost.cosmic,
                        },
                        is_settlement: false,
                      },
                      { transaction }
                    )
                    console.log('Created a cosmic transaction for forge', cosmicTransaction)

                    console.log(`Creating a transaction for ${ cost.gold * payingEfficiency } gold for forge`)
                    const goldTransaction = await Account_Transaction.create(
                      {
                        account_id: account.id,
                        currency_id: gold.Currency.id,
                        amount: -cost.gold * payingEfficiency,
                        transaction_date: now,
                        source_of_transaction: {
                          type: TRANSACTION_REPAIR_ITEM,
                          efficiency_point: payingEfficiency,
                          cost_per_efficiency: cost.gold,
                          character_id: ape.id,
                          account_id: account.id,
                        },
                        audit_fields: {
                          transaction_date: now,
                          item_tier: inventory.Item?.tier || 0,
                          efficiency_point: payingEfficiency,
                          cost_per_efficiency: cost.gold,
                        },
                        is_settlement: false,
                      },
                      { transaction }
                    )
                    console.log('Created a gold transaction for forge', goldTransaction)
                }

                try {
                    inventory.set({
                        efficiency: Math.min(
                            inventory.Item?.efficiency || 0,
                            efficiency
                        )
                    })
                    console.log(`address=${address} - Repair Item ${JSON.stringify(inventory)}`);
                    await inventory.save({ transaction });
                } catch (err) {
                    console.log(err)
                    throw new Error(`Failed to repair item ${inventoryId} for ${address} - ${err}`)
                }
                
                redis.del(`Ape_${ape.address}`)
                redis.del(`Account_${wallet}`)
                  
                return res.status(200).json({
                    ape,
                })
            })
        } catch(err) {
            console.log(err);
            if (err.message.includes('No inventory to be repaired')) {
                return res.status(400).json({
                    msg: 'No inventory to be repaired'
                })
            } else if (err.message.includes('This inventory is not allocated to the current ape')) {
                return res.status(400).json({
                    msg: 'This inventory is not allocated to the current ape'
                })
            } else if (err.message.includes('Not enough materials to be used for repairing')) {
                return res.status(400).json({
                    msg: 'Not enough materials to be used for repairing'
                })
            } else if (err.message.includes('Not enough currencies to be used for repairing')) {
                return res.status(400).json({
                    msg: 'Not enough currencies to be used for repairing'
                })
            } else if (err.message.includes('Not enough $COSMIC to be used for repairing')) {
                return res.status(400).json({
                    msg: 'Not enough $COSMIC to be used for repairing'
                })
            } else if (err.message.includes('Not enough Gold to be used for repairing')) {
                return res.status(400).json({
                    msg: 'Not enough Gold to be used for repairing'
                })
            } else {
                res.status(400).json({
                    msg: `Failed to repair item - ${err.message}`
                })
            }
        }
    },

  async reveal(req, res) {
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
    
    if (itemType === 'utility') {
      const ape = await Apes.findOne({
        where: {
          address
        }
      })
      
      const inventory = await Utility_Inventory.findOne({
        where: {
          utility_id: item_id,
          ape_id: ape.id,
          utility_quantity: {
            [Op.gt]: 0
          }
        },
        include: Utility,
      })

      
      if (!inventory || !ape) {
        return res.status(200).json({
          msg: "No Ape or No Utility"
        })
      }

      let revealedInventory, revealedUtility
      if (inventory.Utility.category === 'Mysterious'){
        const luck = Math.random() * 100

        let category = 'Gold'
        if (luck < MYSTERIOUS_KEYS_REVEAL_CHANCES.Bronze) {
          category = 'Bronze'
        } else if (luck < (MYSTERIOUS_KEYS_REVEAL_CHANCES.Bronze + MYSTERIOUS_KEYS_REVEAL_CHANCES.Silver)) {
          category = 'Silver'
        }

        revealedUtility = await Utility.findOne({
          where: {
            key: inventory.Utility.key,
            category,
          }
        })

        revealedInventory = await Utility_Inventory.create({
          ape_id: ape.id,
          utility_id: revealedUtility.id,
          utility_quantity: 1,
          utility_durability: revealedUtility.durability,
        })
        console.log(`Revealed Myesterious key ${inventory.Utility.key} to ${category}`)

        inventory.set({
          utility_quantity: inventory.utility_quantity - 1
        })
        await inventory.save()
      }
      
      return res.json({
        utility: revealedUtility,
        inventory: revealedInventory
      })
    }
  },
}