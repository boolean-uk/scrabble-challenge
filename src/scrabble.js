const scoreDict = {
  score0: [' ', '\t', '\n'],
  score1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  score2: ['D', 'G'],
  score3: ['B', 'C', 'M', 'P'],
  score4: ['F', 'H', 'V', 'W', 'Y'],
  score5: ['K'],
  score8: ['J', 'X'],
  score10: ['Q', 'Z']
}

function scrabble(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return 0 // If any condition is true, 0
  }
  str = str.toUpperCase()
  for (const char of str.split('')) {
    score += giveScore(char) // check which score to give
  }
  return score
}

function giveScore(char) {
  let charScore = 0
  for (const key of Object.keys(scoreDict)) {
    if (scoreDict[key].includes(char)) {
      charScore += Number(key.substring('score'.length)) // Gets the Score Number
      break // Don't go any further than that
    }
  }
  return charScore
}

let score = 0
console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
