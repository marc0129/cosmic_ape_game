const Redis = require("ioredis");

const fetchRepairCosts = require("../../utils/info/fetch-repair-costs");
const tierRecipes = require('../../assets/info/tier-recipes.json')

const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async repairCosts(req, res) {
        const repairCosts = await fetchRepairCosts({ redis })

        return res.json(repairCosts)
    },

    async evolutionCosts(req, res) {
        return res.json(tierRecipes)
    },
}