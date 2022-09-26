const letterValue = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
}

function scrabble(word) {
  let total = 0
  let double = false
  let triple = false

  if (word === null) {
    return 0
  } else if (word === '') {
    return 0
  } else if (word === ' \t\n') {
    return 0
  }
  const upperCaseword = word.toUpperCase().split('')
  for (let i = 0; i < upperCaseword.length; i++) {
    if (word[i] === '{') {
      double = true
      continue
    } else if (word[i] === '[') {
      triple = true
      continue
    } else if (word[i] === '}') {
      double = false
      continue
    } else if (word[i] === ']') {
      triple = false
      continue
    }

    let multiply = 1

    if (double) {
      multiply = 2
    } else if (triple) {
      multiply = 3
    }
    total += letterValue[upperCaseword[i]] * multiply
  }

  return total
}

console.log(scrabble('[cabbage]'))
module.exports = scrabble
