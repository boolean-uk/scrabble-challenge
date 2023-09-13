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
function scrabble(word) {
  let score = 0
  if (word === null || word.length === 0 || word === '\n\t') {
    console.log('checking invalid input')
    return 0
  }
  // loop through the object
  for (const key in letterValues) {
    // loop through the word and comparing
    for (let i = 0; i < word.length; i++) {
      if (key.toLowerCase() === word[i].toLowerCase()) {
        score += letterValues[key]
      }
    }
  }
  return score
}

module.exports = scrabble
