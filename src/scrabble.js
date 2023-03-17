const {
  stringIsValid,
  findDoubleChars,
  findTripleChars,
  getScoreOfPlainString,
  outermostBracketsAreDouble,
  outermostBracketsAreTriple
} = require('./scripts.js')

function scrabble(string) {
  if (!stringIsValid(string)) {
    return 0
  }
  let multiplier = 1
  while (
    outermostBracketsAreTriple(string) ||
    outermostBracketsAreDouble(string)
  ) {
    if (outermostBracketsAreTriple(string)) {
      string = string.slice(1, string.length - 1)
      multiplier *= 3
    }
    if (outermostBracketsAreDouble(string)) {
      string = string.slice(1, string.length - 1)
      multiplier *= 2
    }
  }
  let totalScore = 0
  while (findDoubleChars(string) !== null) {
    totalScore += getScoreOfPlainString(findDoubleChars(string)[1], 2)
    string = string.replace(findDoubleChars(string)[0], '')
  }

  while (findTripleChars(string) !== null) {
    totalScore += getScoreOfPlainString(findTripleChars(string)[1], 3)
    string = string.replace(findTripleChars(string)[0], '')
  }
  totalScore += getScoreOfPlainString(string, 1)
  return totalScore * multiplier
}

console.log(scrabble('{[d]og}'))

module.exports = scrabble
