const SCRABBLE_LETTER_POINTS = require('./scrabblePoints')

function isValid(word) {
  if (word.includes('{') && !word.includes('}')) {
    return false
  }
  if (word.includes('[') && !word.includes(']')) {
    return false
  }
  if (word.includes('}') && !word.includes('{')) {
    return false
  }
  if (word.includes(']') && !word.includes('[')) {
    return false
  }
  return true
}

function calculateWordScore(word) {
  let score = 0
  let multiplier = 1
  if (!isValid(word)) {
    return 0
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{') {
      multiplier *= 2
      continue
    } else if (word[i] === '[') {
      multiplier *= 3
      continue
    } else if (word[i] === '}') {
      multiplier /= 2
      continue
    } else if (word[i] === ']') {
      multiplier /= 3
      continue
    } else if (SCRABBLE_LETTER_POINTS[word[i]] === undefined) {
      return 0
    }
    score += SCRABBLE_LETTER_POINTS[word[i]] * multiplier
  }
  return Math.round(score)
}

function scrabble(word) {
  // write code here
  if (typeof word !== typeof '') {
    return 0
  }
  const upperCaseWord = word.toUpperCase().replace(/\s/g, '')
  return calculateWordScore(upperCaseWord)
}

module.exports = scrabble
