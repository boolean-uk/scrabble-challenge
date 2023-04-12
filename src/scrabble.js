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
function scrabble(word) {
  let invalid = 0
  let mupliplyer = 1
  let wordValue = 0
  if (word === undefined || word === null) {
    // console.log('exit here, code: null||undefined')
    return wordValue
  }
  const letters = word.trim().toUpperCase().split('')
  letters.forEach((letter) => {
    if (!Object.keys(letterValues).includes(letter)) {
      invalid = 1
      return
    }
    if (letter === '{' || letter === '[') {
      mupliplyer *= letterValues[letter]
      return
    }
    if (letter === '}' || letter === ']') {
      if (mupliplyer > 1) {
        mupliplyer /= letterValues[letter]
        return
      } else {
        invalid = 1
        return
      }
    }
    wordValue += letterValues[letter] * mupliplyer
  })
  if (mupliplyer !== 1 || invalid === 1) {
    // console.log('exit here, code:' + invalid)
    return 0
  }
  // console.log('Exit: ' + wordValue)
  return wordValue
}

module.exports = scrabble
