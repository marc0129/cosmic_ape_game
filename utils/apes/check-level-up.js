const checkEnoughCpForApeLevelUp = require('../levels/check-enough-cp-for-ape-level-up');
const checkFinalLevel = require('../levels/check-final-level');

const checkLevelUp = async ({
  ape,
  transaction,
}) => {
  if (!ape) return 'No Ape'

  return (await checkEnoughCpForApeLevelUp({ ape, transaction })) && !(await checkFinalLevel({ level: ape.level, transaction }))
}

module.exports = checkLevelUp;