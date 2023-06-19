const axios = require("axios");

module.exports = {
   async  get_magic_eden_stats() {
    try {
      let result = await axios.get(
          `${process.env.MAGIC_EDEN_HOST}/v2/collections/cosmic_ape_crusaders/stats`);

      return result.data
    }catch(err){
      console.log(err);
    }
  },

  async magic_eden_listings(offset,limit, listedCount)  {
    let result = []
    let prevOffset = offset
    const fatListings  = async (offset, limit) =>{
      console.log(`Running with Offset:${offset}  - Limit: ${limit}`)
      let response = await axios
      .get(
          `${process.env.MAGIC_EDEN_HOST}/v2/collections/cosmic_ape_crusaders/listings`,
          {params: {offset: offset, limit: limit}});

      result = result.concat(response.data);
      console.log(`Result length is ${result.length} Listed count is ${listedCount}`)
      if (result.length >= listedCount)

        return;
      else {
        if(result.length == prevOffset){
          console.log(`Preventing cyclical loop, it seems magic eden listings is out of sync with current in memory stats listed count is -  ${listedCount} `)
          //this will prevent a cyclic loop just incase the stats and the data on magic eden changes in between
          return;
        }
        prevOffset = result.length
        return await fatListings(result.length, limit)
      }
    }
    await fatListings(offset, limit);
    return result;
  }
}




