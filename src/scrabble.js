// the module.exports seems to be working fine
const { findLettersInCurlyBrackets } = require('./scoreModifiers.js')
const { findLettersInSquareBrackets } = require('./scoreModifiers.js')
const { doubleScore } = require('./scoreModifiers.js')
const { tripleScore } = require('./scoreModifiers.js')
let wordScore = 0

// might want to store those in an object
const lettersWorthOne = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
const lettersWorthTwo = ['d', 'g']
const lettersWorthThree = ['b', 'c', 'm', 'p']
const lettersWorthFour = ['f', 'h', 'v', 'w', 'y']
const lettersWorthFive = ['k']
const lettersWorthEight = ['j', 'x']
const lettersWorthTen = ['q', 'z']

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
function checkForScoreModifiers(word) {
  if (findLettersInCurlyBrackets(word)) {
    doubleScore(findLettersInCurlyBrackets(word))
  }
  if (findLettersInSquareBrackets(word)) {
    tripleScore(indentifyLetterValue(findLettersInSquareBrackets(word)))
  }
}

function calculateWordScore(word) {
  checkForScoreModifiers(word)
  reinitialiseWordScore(wordScore)
  for (let i = 0; i < word.length; i++) {
    wordScore += indentifyLetterValue(word[i].toLowerCase())
  }
  return wordScore
}

function indentifyLetterValue(letter) {
  if (lettersWorthOne.includes(letter)) {
    return 1
  }
  if (lettersWorthTwo.includes(letter)) {
    return 2
  }
  if (lettersWorthThree.includes(letter)) {
    return 3
  }
  if (lettersWorthFour.includes(letter)) {
    return 4
  }
  if (lettersWorthFive.includes(letter)) {
    return 5
  }
  if (lettersWorthEight.includes(letter)) {
    return 8
  }
  if (lettersWorthTen.includes(letter)) {
    return 10
  }
  return 0
}

module.exports = scrabble
