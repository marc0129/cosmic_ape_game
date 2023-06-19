const Redis = require("ioredis");
const fetchLevels = require("../../utils/info/fetch-levels");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async levels(req, res) {
        const levels = await fetchLevels({ redis })

        return res.json(levels)
    },
}