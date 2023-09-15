// the module.exports seems to be working fine
const { findLettersInCurlyBrackets } = require('./scoreModifiers.js')
const { findLettersInSquareBrackets } = require('./scoreModifiers.js')
const { doubleScore } = require('./scoreModifiers.js')
const { tripleScore } = require('./scoreModifiers.js')
let wordScore = 0

// might want to store those in an object
const letterValues = {
  lettersWorthOne: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  lettersWorthTwo: ['d', 'g'],
  lettersWorthThree: ['b', 'c', 'm', 'p'],
  lettersWorthFour: ['f', 'h', 'v', 'w', 'y'],
  lettersWorthFive: ['k'],
  lettersWorthEight: ['j', 'x'],
  lettersWorthTen: ['q', 'z']
}

// returns the score IF the word is not an empty string
function scrabble(word) {
  if (word === null) {
    wordScore = 0
    return wordScore
  }
  wordScore = calculateWordScore(word)
  return wordScore
}
// re-initialises the wordScore variable after it has calculated the score of one word.
function reinitialiseWordScore() {
  wordScore = 0
}

// TODO: find a way to add the doubled or tripled letter values to the sum of the values of the letters in the rest of the word - using slice?
// TODO: figure out how to apply score modifiers to entire words
// this returns the updated values of any letters found in [] or {}
function multiplyLetterValue(word) {
  if (findLettersInCurlyBrackets(word)) {
    return doubleScore(indentifyLetterValue(findLettersInCurlyBrackets(word)))
  }
  if (findLettersInSquareBrackets(word)) {
    return tripleScore(indentifyLetterValue(findLettersInSquareBrackets(word)))
  }
}

function calculateWordScore(word) {
  reinitialiseWordScore(wordScore)
  for (let i = 0; i < word.length; i++) {
    wordScore += indentifyLetterValue(word[i].toLowerCase())
  }
  return wordScore
}

function calculatedModifiedWordScore(word) {
  if (findLettersInCurlyBrackets(word)) {
    return (
      multiplyLetterValue(word) +
      calculateWordScore(
        word.slice(0, word.indexOf(findLettersInCurlyBrackets(word)))
      ) +
      calculateWordScore(
        word.slice(word.indexOf(findLettersInCurlyBrackets(word)), word.length)
      )
    )
  }
  if (findLettersInSquareBrackets(word)) {
    return (
      multiplyLetterValue(word) +
      calculateWordScore(
        word.slice(0, word.indexOf(findLettersInSquareBrackets(word)))
      ) +
      calculateWordScore(
        word.slice(word.indexOf(findLettersInSquareBrackets(word)), word.length)
      )
    )
  }
}
console.log(calculatedModifiedWordScore('c[o]ffe'))

function indentifyLetterValue(letter) {
  if (letterValues.lettersWorthOne.includes(letter)) {
    return 1
  }
  if (letterValues.lettersWorthTwo.includes(letter)) {
    return 2
  }
  if (letterValues.lettersWorthThree.includes(letter)) {
    return 3
  }
  if (letterValues.lettersWorthFour.includes(letter)) {
    return 4
  }
  if (letterValues.lettersWorthFive.includes(letter)) {
    return 5
  }
  if (letterValues.lettersWorthEight.includes(letter)) {
    return 8
  }
  if (letterValues.lettersWorthTen.includes(letter)) {
    return 10
  }
  return 0
}

module.exports = scrabble
