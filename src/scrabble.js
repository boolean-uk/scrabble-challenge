const { scores } = require('./scores.js')
const { validate } = require('./validation.js')

let doubleLetter = false
let tripleLetter = false
let doubleWord = false
let tripleWord = false

function scrabble(word) {
  if (typeof word !== 'string') {
    return 0
  }
  const wordToValidate = word
    .replaceAll('{', '')
    .replaceAll('}', '')
    .replaceAll('[', '')
    .replaceAll(']', '')
    .toLowerCase()

  const validationCheck = validate(wordToValidate)
  if (validationCheck === false) {
    return 0
  }
  return scoreCheck(word)
}

function scoreCheck(word) {
  doubleLetter = false
  tripleLetter = false
  doubleWord = false
  tripleWord = false
  const wordArr = word.toUpperCase().split('')

  if (wordArr.length === 0 || wordArr.includes(' ')) {
    return 0
  }

  multiWord(wordArr) // Checks if the word should score Double and/or Triple Points

  const outputWord = []

  for (let i = 0; i < wordArr.length; i++) {
    // Checks the formatting for the D/T letters, if formated wrong the word is invalid and 0 is returned
    if (isMultiLetter(wordArr[i], wordArr[i + 2]) === false) {
      return 0
    }

    if (doubleLetter === true) {
      outputWord.push(multiLetter(wordArr[i]))
      continue
    }

    if (tripleLetter === true) {
      outputWord.push(multiLetter(wordArr[i]))
      continue
    }
    if (typeof scores[wordArr[i]] !== 'number') {
      return 0
    }
    outputWord.push(scores[wordArr[i]])
  }

  let score = outputWord.reduce((a, b) => a + b)

  if (tripleWord === true) {
    score *= 3
  }

  if (doubleWord === true) {
    score *= 2
  }

  return score
}

function multiLetter(letter) {
  // Handles score calculation if the current letter is doubled or tripled.
  if (doubleLetter === true) {
    return scores[[letter]] * 2
  }

  if (tripleLetter === true) {
    return scores[[letter]] * 3
  }
}

function isMultiLetter(letter, closing) {
  if (letter === '{' && closing === '}') {
    doubleLetter = true
    return true
  }

  if (letter === '}' && doubleLetter === true) {
    doubleLetter = false
    return true
  }

  if (letter === '[' && closing === ']') {
    tripleLetter = true
    return true
  }

  if (letter === ']' && tripleLetter === true) {
    tripleLetter = false
    return true
  }

  if (
    (letter === '}' || letter === ']') &&
    closing === undefined &&
    (doubleLetter === true || tripleLetter === true)
  ) {
    doubleLetter = false
    tripleLetter = false
    return true
  }

  if (
    (letter === '{' && closing !== '}') ||
    (letter === '}' && doubleLetter === false) ||
    (letter === '[' && closing !== ']') ||
    (letter === ']' && tripleLetter === false)
  ) {
    return false
  }
  return true
}

function multiWord(wordArr) {
  let doubleCheck =
    wordArr[0] === '{' &&
    wordArr[wordArr.length - 1] === '}' &&
    wordArr[2] !== '}'

  let tripleCheck =
    wordArr[0] === '[' &&
    wordArr[wordArr.length - 1] === ']' &&
    wordArr[2] !== ']'

  let completeCheck = doubleWord === true && tripleWord === true

  while (
    (doubleCheck === true || tripleCheck === true) &&
    completeCheck === false
  ) {
    if (doubleCheck) {
      if (wordArr[2] !== '}') {
        doubleWord = true
        wordArr.shift()
        wordArr.pop()
        doubleCheck = wordArr[0] === '{' && wordArr[wordArr.length - 1] === '}'
        tripleCheck = wordArr[0] === '[' && wordArr[wordArr.length - 1] === ']'
      } else {
        doubleCheck = false
      }
    }

    if (tripleCheck) {
      if (wordArr[2] !== ']') {
        tripleWord = true
        wordArr.shift()
        wordArr.pop()
        doubleCheck = wordArr[0] === '{' && wordArr[wordArr.length - 1] === '}'
        tripleCheck = wordArr[0] === '[' && wordArr[wordArr.length - 1] === ']'
      } else {
        tripleCheck = false
      }
    }
    completeCheck = doubleCheck === true && tripleCheck === true
  }
}
console.log(scrabble('cat'))
module.exports = scrabble
