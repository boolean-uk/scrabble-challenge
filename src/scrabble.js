const {
  charValue,
  isItNumber,
  isItDoubled,
  isItTribled
} = require('./setup.js')

function scrabble(string) {
  let score = 0
  let multiplier = 1

  // To make sure that the input is not a falsy value, a number or including only one brackets.
  if (
    !string ||
    isItNumber(string) ||
    isItDoubled(string) ||
    isItTribled(string)
  ) {
    return 0
  }

  // To convert each letter to upper case to mache the key in charValue object.
  const upperCase = string.toUpperCase()

  for (let i = 0; i < upperCase.length; i++) {
    if (upperCase[i] === '[') {
      multiplier = 3
      continue
    }

    if (upperCase[i] === '{') {
      multiplier = 2
      continue
    }

    if (upperCase[i] === ']' || upperCase[i] === '}') {
      multiplier = 1
      continue
    }
    // To ignore any character that's not included to the charValue keys otherwise the score will be NaN

    if (typeof charValue[upperCase[i]] === 'undefined') {
      return 0
    }

    score += charValue[upperCase[i]] * multiplier
  }
  return score
}

// Works as expected (the basic task and most of extension one)
console.log(scrabble(25)) // 0
console.log(scrabble('hamada')) // 12
console.log(scrabble('ha{m}ada')) // 15
console.log(scrabble('h{a}ma{d}a')) // 15
console.log(scrabble('{hamada}')) // 24

console.log(scrabble('ha[m]ada')) // 18
console.log(scrabble('[hamada]')) // 36

console.log(scrabble('ham{ada')) // 0
console.log(scrabble('ham[ada')) // 0

console.log(scrabble('ham =-34|@%  ada')) // 0

// Does NOT work as expected (the last tow tests of the extension task)
console.log(scrabble('{[d]og}')) //  9  ❌  should be 18  (as d: should be tripled first and then the new value should be doubled, o anf g should be doubled)
console.log(scrabble('[{dog}]')) // 10  ❌  should be 30  (as the values of all letters should be doubled first and then the new values should be tripled)

module.exports = scrabble
