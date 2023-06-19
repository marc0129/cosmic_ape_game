
const { Resource } = require('../../models/index');
const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async resources(req, res) {
        let searchTerm= "resources";
        let resources

        try {
            console.log('Getting resources from cache')
            resources = await redis.get(searchTerm)

            if (!!resources) {

                return res.json(JSON.parse(resources));
            }
        } catch (err) {
            console.log(`Failed to get resources from cache - ${err}`)
        }

        try {
            console.log('Getting resources from DB')

            resources = await Resource.findAll({
                where: {
                    is_active: true,
                }
            });

            console.log(`Got resources from DB && set to Cache `)
            redis.set(searchTerm, JSON.stringify(resources));

            return res.json(resources)
        } catch (err) {
            console.log(`Failed to get resources ${err}`)
            
            return res.status(500).json({
                msg: "Something went wrong."
            })
        }

    },
}