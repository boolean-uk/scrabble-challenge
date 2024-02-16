const letterMap = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}
const multiplierList = ['{', '}', '[', ']']

/**
 * Calculate the scrabble score for the given input string.
 * @param {string} input the input string to calculate the scrabble score for.
 * @returns {number} the scrabble score for the input string.
 */
function scrabble(input) {
  if (!input || input === '') {
    return 0
  }
  const letters = convertInputToLetters(input)
  const score = calculateScore(letters)
  return score
}

/**
 * Convert the input string to a list of uppercase letters.
 * @param {string} input the input string to convert to list of letters.
 * @returns {char[]} the list of letters in the input string as UPPERCASE.
 */
function convertInputToLetters(input) {
  return input.trim().toUpperCase().split('')
}

/**
 * Calculates the score of a word in scrabble, taking into account multipliers, returning 0 if the input is invalid.
 * @param {char[]} letters array of letters to calculate the score for
 * @returns {number} the score for the given letters, with multipliers applied and accounting for invalid input.
 */
function calculateScore(letters) {
  let score = 0
  let scoreMultiplier = 1
  const multiplierStack = []
  for (let i = 0; i < letters.length; i++) {
    if (!isValidLetter(letters[i])) return 0
    if (letters[i] === '{') {
      scoreMultiplier = scoreMultiplier * 2
      multiplierStack.push('{')
      continue
    }
    if (letters[i] === '[') {
      scoreMultiplier = scoreMultiplier * 3
      multiplierStack.push('[')
      continue
    }
    if (letters[i] === '}') {
      if (multiplierStack.pop() !== '{') return 0 // invalid multiplier
      scoreMultiplier = scoreMultiplier / 2
      continue
    }
    if (letters[i] === ']') {
      if (multiplierStack.pop() !== '[') return 0 // invalid multiplier
      scoreMultiplier = scoreMultiplier / 3
      continue
    }
    score += letterMap[letters[i]] * scoreMultiplier
  }
  if (multiplierStack.length > 0) return 0 // if you have any leftover multipliers, it's invalid
  return score
}

/**
 * Checks if the given letter is allowed
 * @param {char} letter the character to check if valid
 * @returns {boolean} true if the letter is a valid letter or a valid multiplier, false otherwise.
 */
function isValidLetter(letter) {
  return letter in letterMap || multiplierList.includes(letter)
}
module.exports = scrabble
