const getNextLevel = require('./get-next-level')

const checkEnoughCpForApeLevelUp = async ({
  ape,
}) => {
  if (!ape) return false
  
  const nextLevel = await getNextLevel({ level: ape.level })

  if (!nextLevel) return false

  return nextLevel.cp <= ape.cp
}

module.exports = checkEnoughCpForApeLevelUp