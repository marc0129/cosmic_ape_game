
const { Currency } = require('../../models/index');
const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async currencies(req, res) {
        let searchTerm= "currencies";
        let currencies

        try {
            console.log('Getting currencies from cache')
            currencies = await redis.get(searchTerm)

            if (!!currencies) {
                console.log(`Currencies retrieved from cache`)
                return res.json(JSON.parse(currencies));
            }
        } catch (err) {
            console.log(`Failed to get currencies from cache - ${err}`)
        }

        try {
            console.log('Getting currencies from DB')

            currencies = await Currency.findAll();

            console.log(`Got currencies from DB && set to Cache`)
            redis.set(searchTerm, JSON.stringify(currencies));

            return res.json(currencies)
        } catch (err) {
            console.log(`Failed to get currencies ${err}`)
            
            return res.status(500).json({
                msg: "Something went wrong."
            })
        }

    },
}