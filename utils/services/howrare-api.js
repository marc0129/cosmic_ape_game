const axios = require("axios");

const getRarityData = async () => {

  try {
    let response = await axios
    .get(
        `${process.env.HOW_RARE_HOST}/v0.1/collections/cosmicapecrusaders/only_rarity`);
    let {items} = response.data.result.data
    return items;

  } catch (err) {
    console.log(`Failed to retrieve collection rarity- ${err}`)
    return []//if rarity is unavailable we still want to show the rest.
  }

}
module.exports = getRarityData;
