const points = require('./points')
const { letterBonusChecker, wordBonusChecker } = require('./bonusCheckers')

function scrabble(word) {
  // guard clause to root out the null and empty string values
  if (!word || word.trim() === '') return 0

  // force the word to lower case and then split into an array for easier looping
  const wordArray = word.toLowerCase().split('')
  let score = 0

  // forEach version, nicer looking and easier to understand
  wordArray.forEach((letter) => {
    score += points[letter] || 0
  })

  // Moved code to a separate function, checks for bonus letters
  score = letterBonusChecker(wordArray, score)
  // Checks for whole word bonus
  score = wordBonusChecker(wordArray, score)

  return score
}

// various test conditions
console.log('do[g]', scrabble('do[g]')) // 2 + 1 + 6 = should be 9
console.log('{dog}', scrabble('{dog}')) // (2 + 1 + 2) * 2 = should be 10
console.log('[dog]', scrabble('[dog]')) // should be 15
console.log('cabbage', scrabble('cabbage')) // should be 22
console.log('{O}XYPHENBUTAZONE', scrabble('{O}XYPHENBUTAZONE')) // should be 42
console.log('OXYPHENBUTAZ{O}NE', scrabble('OXYPHENBUTAZ{O}NE')) // should also be 42
console.log('hel!o', scrabble('hel!o'))

module.exports = scrabble
