// const { findLettersInCurlyBrackets } = require('./scoreModifiers.js')
// const { findLettersInSquareBrackets } = require('./scoreModifiers.js')
// const { doubleScore } = require('./scoreModifiers.js')
// const { tripleScore } = require('./scoreModifiers.js')
let wordScore = 0

// const lowerCaseLettersInWord = []
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
// re-initialises the wordScore variable after it has calculated the score of one word. This prevents the score from the first word that is passed through from being added to that of the second word.
function reinitialiseWordScore() {
  wordScore = 0
}
// calculates the word score by adding the scores of each letter to the wordScore variable
function calculateWordScore(word) {
  reinitialiseWordScore(wordScore)
  for (let i = 0; i < word.length; i++) {
    wordScore += indentifyLetterValue(word[i].toLowerCase())
  }
  return wordScore
}

// iterates through the arrays of letters, finds the one that has been passed through, return its associated score
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
  return 0 // this is to catch any words that might fall through the net in scrabble(), especially if they include whitespace and therefore aren't strictly equal to null. I still decided to leave the guard clause in scrabble() - no point running the entire code if the word string is null.
}

module.exports = scrabble
