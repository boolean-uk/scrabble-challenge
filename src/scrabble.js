const { charValue } = require('./charValue')

function scrabble(string) {
  let score = 0
  let multiplier = 1

  const isItNumber = typeof string === 'number'

  // To make sure that the input is not a falsy value or a number.
  if (!string || isItNumber) {
    return 0
  }

  // To convert each letter to upper case to mache the key in charValue object.
  const UpperCase = string.toUpperCase()

  for (let i = 0; i < UpperCase.length; i++) {
    if (string[i] === '[') {
      multiplier = 3
      continue
    }

    if (string[i] === '{') {
      multiplier = 2
      continue
    }

    if (string[i] === ']' || string[i] === '}') {
      multiplier = 1
      continue
    }
    // To ignore any character that's not included to the charValue keys otherwise the score will be NaN
    if (typeof charValue[UpperCase[i]] === 'undefined') {
      continue
    }

    score += charValue[UpperCase[i]] * multiplier
  }
  return score
}
// console.log(scrabble(25))
// console.log(scrabble('hamada'))
// console.log(scrabble('[hamada]'))
// console.log(scrabble('ham =-  347593847598374918  ada'))

module.exports = scrabble
