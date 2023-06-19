const getValueBetweenLowestAndHighest = (lowest, highest) => {
  if (!highest) return lowest
  if (!lowest) return highest

  return lowest + (highest - lowest) * Math.random()
}

module.exports = getValueBetweenLowestAndHighest