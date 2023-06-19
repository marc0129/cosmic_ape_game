
var moment = require('moment');
const { Apes, Missions, Mission_Histories, Items, Inventory } = require('../models/index');
const { Op } = require("sequelize");
const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async getInventories(req, res) {
        const {
            ape_id,
            inventory_id,
            item_id,
        } = req.body;
        
        if (!ape_id) {
            return res.status(404).json({
                msg: "Invalid Ape"
            })
        } else if (!inventory_id && !item_id) {
            //get all inventories for specific ape
            const inventories = await Inventory.findAll({
                where: {
                    ape_id,
                    item_durability: {
                        [Op.gt]: 0
                    }
                }
            });
            
            return res.json(inventories)
        } else if (!inventory_id) {
            //get inventories for specific ape and item
            const inventories = await Inventory.findAll({
                where: {
                    ape_id,
                    item_id,
                    item_durability: {
                        [Op.gt]: 0
                    }
                }
            });
            
            return res.json(inventories)
        } else if (!item_id) {
            const inventory = await Inventory.findOne({
                where: {
                    id: inventory_id
                }
            });
            if (!inventory) {
                return res.status(404).json({
                    msg: "No Inventory"
                })
            } else {
                return res.json(inventory)
            }
        } else {
            const inventory = await Inventory.findOne({
                where: {
                    ape_id,
                    item_id,
                    id: inventory_id
                }
            });
            if (!inventory) {
                return res.status(404).json({
                    msg: "No Inventory"
                })
            } else {
                return res.json(inventory)
            }
        }
        
    },
    
    async createInventory(req, res) {
        const {
            ape_id,
            item_id,
        } = req.body;


        if (!ape_id || !item_id) {
            return res.status(404).json({
                msg: "Invalid parameters"
            })
        }

        const ape = await Apes.findOne({
            where: {
                id: ape_id,
            }
        });
        let searchTerm = `Ape_${ape.address}`;
        redis.del(searchTerm)
        const item = await Items.findOne({
            where: {
                id: item_id,
            }
        });

        if (!ape || !item) {
            return res.status(404).json({
                msg: "Invalid ape or item"
            })
        }

        const inventory = Inventory.create({
            ape_id,
            item_id,
            item_durability: item.durability,
        });

        return res.json(inventory)
    },

}