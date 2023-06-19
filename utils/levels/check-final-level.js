const getNextLevel = require("./get-next-level")

const checkFinalLevel = async ({
  level,
}) => {
  const nextLevel = await getNextLevel({ level })

  return !nextLevel
}

module.exports = checkFinalLevel