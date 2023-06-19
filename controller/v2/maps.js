
const { Maps } = require('../../models/index');
const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async maps(req, res) {
        let searchTerm= "Maps";
        let maps

        try {
            console.log('Getting maps from cache')
            maps = await redis.get(searchTerm)

            if (!!maps) {
                console.log(`Maps retrieved from cache - `)
                return res.json(JSON.parse(maps));
            }
        } catch (err) {
            console.log(`Failed to get maps from cache - ${err}`)
        }

        try {
            console.log('Getting maps from DB')

            maps = await Maps.findAll();

            console.log(`Got maps from DB && set to Cache `)
            redis.set(searchTerm, JSON.stringify(maps), "EX", 600);

            return res.json(maps)
        } catch (err) {
            console.log(`Failed to get maps ${err}`)
            
            return res.status(500).json({
                msg: "Something went wrong."
            })
        }

    },
}