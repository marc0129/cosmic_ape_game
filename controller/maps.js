
const { Maps } = require('../models/index');
const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async maps(req, res) {
        let searchTerm= "Maps";
        redis.get(searchTerm,  async (err, result) => {
            if(err)
                console.log(`Failed to get value from redis ${err}`)

            if(result)
                res.json(JSON.parse(result));
            else{
                try {
                    let maps = await Maps.findAll();
                    redis.set(searchTerm, JSON.stringify(maps), "EX", 600);
                    res.json(maps)
                } catch (e) {
                    res.status(500).json({
                        msg: "Something went wrong."
                    })
                }
            }
        });

    },

    async getMap(req, res) {
        var {
            id,
        } = req.query

        let searchTerm = `Maps${id}`;
        redis.get(searchTerm, async (err,result) => {
            if(err)
                console.log(`Failed to get value from redis ${err}`);
            if(result)
                res.json(JSON.parse(result))
            else{
                let map = await Maps.findOne({
                    where: {
                        id: id
                    }
                });
                redis.set(searchTerm, JSON.stringify(map), "EX", 600);
                res.json(map)
            }
        } )



    },
}