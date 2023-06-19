const getNextLevel = require("../levels/get-next-level");

const levelUpApe = async ({
  ape,
  transaction
}) => {
  if (!ape) return false;

  const apeCp = ape.cp || 0;
  const level = ape.level || 0;

  //get next level
  
  const nextLevel = await getNextLevel({ level })

  if (!nextLevel) return false;
  if (nextLevel.cp > apeCp) return false;
  
  //level up
  return await ape.update({
    cp: apeCp - (nextLevel.cp || 0),
    level: nextLevel.level
  }, { transaction })
}

module.exports = levelUpApe;