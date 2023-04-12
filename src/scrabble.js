let currentMulti
let isValid
let curlyBracketCounter
let squareBracketCounter
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
  Z: 10
}

const brackets = ['{', '}', '[', ']']
function scrabble(givenString) {
  if (!givenString) return 0
  currentMulti = 1
  isValid = true
  curlyBracketCounter = 0
  squareBracketCounter = 0
  let score = 0

  for (let i = 0; i < givenString.length; i++) {
    const letter = givenString[i].toUpperCase()

    if (brackets.includes(letter)) {
      calculateMultiplier(letter)
    }
    checkValidity(letter)

    if (!isValid) return 0

    if (letterValues[letter]) {
      score = score + letterValues[letter] * currentMulti
    }
  }
  if (curlyBracketCounter > 0 || squareBracketCounter > 0) return 0

  return score
}
function calculateMultiplier(letter) {
  if (letter === '{') {
    currentMulti *= 2
    curlyBracketCounter++
  } else if (letter === '[') {
    currentMulti *= 3
    squareBracketCounter++
  } else if (letter === '}') {
    if (curlyBracketCounter === 0) {
      isValid = false
    } else {
      currentMulti = currentMulti / 2
      curlyBracketCounter--
    }
  } else if (letter === ']') {
    if (squareBracketCounter === 0) {
      isValid = false
    } else {
      currentMulti = currentMulti / 3
      squareBracketCounter--
    }
  }
}
function checkValidity(letter) {
  if ((letterValues[letter] || brackets.includes(letter)) && isValid) {
    isValid = true
  } else {
    isValid = false
  }
}

module.exports = scrabble
