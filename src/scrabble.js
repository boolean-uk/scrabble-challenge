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
  if (calculateModifiedWordScore(word)) {
    wordScore = calculateModifiedWordScore(word)
    return wordScore
  }
  wordScore = calculateWordScore(word)
  return wordScore
}

// re-initialises the wordScore variable after it has calculated the score of one word.
function reinitialiseWordScore() {
  wordScore = 0
}
console.log(scrabble('po[t]ato'))
// TODO: figure out how to apply score modifiers to entire words
// this returns the updated values of any letters found in [] or {}
function multiplyScore(word) {
  if (findLettersInCurlyBrackets(word)) {
    return doubleScore(calculateWordScore(findLettersInCurlyBrackets(word)))
  }
  if (findLettersInSquareBrackets(word)) {
    return tripleScore(calculateWordScore(findLettersInSquareBrackets(word)))
  }
}

function calculateWordScore(word) {
  reinitialiseWordScore(wordScore)
  for (let i = 0; i < word.length; i++) {
    wordScore += indentifyLetterValue(word[i].toLowerCase())
  }
  return wordScore
}

function calculateModifiedWordScore(word) {
  // if there are no letters found within {} and there are no letters found within [], do not run this function
  if (!findLettersInCurlyBrackets(word) && !findLettersInSquareBrackets(word)) {
    return
  }
  // if there are letters within {} AND the length of that sub-string is one, then run ...
  if (
    findLettersInCurlyBrackets(word) &&
    findLettersInCurlyBrackets(word).length === 1
  ) {
    return (
      multiplyScore(word) +
      calculateWordScore(
        word.slice(0, word.indexOf(findLettersInCurlyBrackets(word)))
      ) +
      calculateWordScore(
        word.slice(
          word.indexOf(findLettersInCurlyBrackets(word)) + 1,
          word.length
        )
      )
    )
  }
  // if there are letters within [] AND the length of that sub-string is one, then run ...
  if (
    findLettersInSquareBrackets(word) &&
    findLettersInSquareBrackets(word).length === 1
  ) {
    return (
      multiplyScore(word) +
      calculateWordScore(
        word.slice(0, word.indexOf(findLettersInSquareBrackets(word)))
      ) +
      calculateWordScore(
        word.slice(
          word.indexOf(findLettersInSquareBrackets(word)) + 1,
          word.length
        )
      )
    )
  }
  // If there are more than one letter within [], then run...
  if (
    findLettersInSquareBrackets(word) &&
    findLettersInSquareBrackets(word).length > 1
  ) {
    return multiplyScore(word)
  }
  // If there are more than one letter within {}, then run...
  if (findLettersInCurlyBrackets(word).length > 1) {
    return multiplyScore(word)
  }
}

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
