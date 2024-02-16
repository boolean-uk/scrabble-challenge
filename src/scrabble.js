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

function scrabble(input) {
  if (!input || input === '') {
    return 0
  }
  input = input.trim()
  const letters = input.toUpperCase().split('')
  const score = calculateScore(letters)
  return score
}

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
  if (multiplierStack.length > 0) return 0
  return score
}

function isValidLetter(letter) {
  return letter in letterMap || multiplierList.includes(letter)
}

// function getLetterMultiplier(letters, index) {
//   if (letters[index] === '}') return 1 / 2
//   if (letters[index] === ']') return 1 / 3
//   if (letters[index] === '{' && letters[index + 2] === '}') return 2
//   if (letters[index] === '[' && letters[index + 2] === ']') return 3
//   return 1
// }

module.exports = scrabble
