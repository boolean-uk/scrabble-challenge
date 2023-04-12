const letterValues = {
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
  Z: 10,
  '{': 2,
  '}': 2,
  '[': 3,
  ']': 3
}
function isValidLetter(letter) {
  return !Object.keys(letterValues).includes(letter)
}
function isValidWord(word) {
  if (word === undefined || word === null) {
    return false
  }
  return true
}
function isOpenBraket(braket, multiplier) {
  if (braket === '{' || braket === '[') {
    multiplier[0] *= letterValues[braket]
    multiplier[1] = true
    return true
  }
  return false
}
function isClosedBraket(braket, multiplier) {
  if (braket === '}' || braket === ']') {
    multiplier[0] /= letterValues[braket]
    if (multiplier[0] === 1) {
      multiplier[1] = false
    }
    return true
  }
  return false
}
function isMultiplyerOpen(multiplier) {
  return multiplier[1]
}
function getScore(word) {
  let wordValue = 0
  const multiplier = [1, false]
  for (let i = 0; i < word.length; i++) {
    // console.log(word[i])
    if (isValidLetter(word[i])) {
      // console.log('Invalid Exit')
      return 0
    }
    if (isOpenBraket(word[i], multiplier)) {
      continue
    }
    if (isMultiplyerOpen(multiplier)) {
      if (isClosedBraket(word[i], multiplier)) {
        continue
      }
    } else {
      if (isClosedBraket(word[i], multiplier)) {
        return 0
      }
    }
    wordValue += letterValues[word[i]] * multiplier[0]
  }
  // console.log('Exit: ' + wordValue)
  if (isMultiplyerOpen(multiplier)) {
    return 0
  }
  return wordValue
}

function scrabble(word) {
  if (isValidWord(word)) {
    return getScore(word.toUpperCase())
  }
  return 0
}
scrabble('{dog}')

module.exports = scrabble
