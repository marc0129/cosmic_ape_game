const axios = require('axios');
const minted = require('../..//static/cosmic_mint_data.json')
const moment = require('moment');
const csvtojson = require('csvtojson')
const rewardsCsv = require('../../assets/info/staking-rewards-values.csv')
const {Apes} = require('../../models/index');
const { Op } = require("sequelize");

module.exports = {
  async reward(req, res) {
    let {stakeDays,tier,accumulated} = req.query;

    const rewardsJson = await csvtojson().fromString(rewardsCsv)
    let firstResponse = await axios.get(
        `https://api.cac.d1v.io/extra/staking`);

    let  {total} = firstResponse.data;

    let mecca_call = async function (offset, limit, result) {
      if(total === 0 ){
        return result;
      }
      let meccaResponse = await axios.get(
          `https://api.cac.d1v.io/extra/staking?skip=${offset}&limit=${limit}`);
      let {data}  = meccaResponse.data
      result = result.concat(data)
      if (result.length === total) {
        return result
      }
      return mecca_call(result.length,limit,result)
    }

    let result = await mecca_call(0,total,[])


    let minted_addresses = minted.map((minted_Ape) => {
      return minted_Ape.address
    });
    let characters = await Apes.findAll({
      where: {
        address: {
          [Op.in]: minted_addresses
        }
      }, attributes: ['id','address', 'tier']
    });

    let filteredResult  = result.filter( ( item ) => minted_addresses.includes( item.mint ) )
    .filter((item) => characters.some(c=> c.address ===item.mint))
    .map(token => {
      let stateDate = moment.unix(token.stake).utc();
      let now = new moment().utc();
      let daysStaked = parseInt(stakeDays);// now.diff(stateDate, 'days')+1
      let character_tier = parseInt(tier);//characters.find(c => c.address === token.mint)?.tier;
      let tier_rewards = rewardsJson.filter(r => (parseInt(r.tier)===character_tier));


      let dailyRewards  = function(token,tier_rewards,daysStaked){
        let experience = 0;
        let gold = 0;

        // Experience rewards
        if (daysStaked > 30) {
          experience = tier_rewards.find(
              r => (parseInt(r.days_from) === 31)).experience
        } else {
          experience = tier_rewards.find(
              r => (daysStaked >= parseInt(r.days_from) && daysStaked <= parseInt(r.days_upto)))?.experience
        }

        let goldDays=daysStaked
        if(daysStaked>30){
          goldDays =(daysStaked%30==0)? 30 : (goldDays -= 30 * (~~(daysStaked / 30)));
        }
        if(goldDays===7 || goldDays===14 || goldDays===30) {
          gold = tier_rewards.find(
              r => (parseInt(r.days_upto) == goldDays))?.gold
        }

        return {
          mint:token.mint,
          owner:token.owner,
          stake:daysStaked,
          experience:experience||0,
          gold:gold||0

        }
      }

      let accumulatedRewards = function(token,tier_rewards,daysStaked) {
        let allocated_reward;
        let experience = 0;
        let gold =0;
        let goldDays = 0;
        for (let i = 1; i <= daysStaked; i++) {
          goldDays += 1;
          if (i > 30) {
            allocated_reward = tier_rewards.find(
                r => (parseInt(r.days_from) === 31))
          } else {
            allocated_reward = tier_rewards.find(
                r => (i >= parseInt(r.days_from) && i <= parseInt(r.days_upto)))
          }

          experience += parseInt(allocated_reward?.experience);
          if (goldDays === 7 || goldDays === 14 || goldDays === 30) {
            let gold_reward = tier_rewards.find(
                r => (goldDays >= parseInt(r.days_from) && goldDays <= parseInt(
                    r.days_upto)))
            gold += parseInt(gold_reward?.gold)
          }

          if (goldDays === 30) {
            goldDays = 0;
          }
        }
        return {
          mint:token.mint,
          owner:token.owner,
          stake:daysStaked,
          experience:experience||0,
          gold:gold||0

        }
      }

      let first = (accumulated=='true') ||false;

      if(first){
        return accumulatedRewards(token,tier_rewards,daysStaked)
      } else {
        return dailyRewards(token,tier_rewards,daysStaked)
      }
    });

    res.status(200).send({
      staked: filteredResult

    });
  }
}