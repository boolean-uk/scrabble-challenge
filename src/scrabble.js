const SCRABBLE_LETTER_POINTS = require('./scrabblePoints')

function scrabble(word) {
  // write code here
  if (typeof word !== typeof '') {
    return 0
  }
  let score = 0
  const upperCaseWord = word.toUpperCase().replace(/\s/g, '')
  console.log(upperCaseWord)
  for (let i = 0; i < upperCaseWord.length; i++) {
    score += SCRABBLE_LETTER_POINTS[upperCaseWord[i]]
  }
  return score
}

module.exports = scrabble
