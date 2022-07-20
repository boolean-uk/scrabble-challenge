const wordValues = {
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

let score = 0

function scrabble(word) {
  const wordArray = convertWordToArray(word)
  console.log(wordArray)
  for (let letter of wordArray) {
    const upperCaseCharacter = letter.toUpperCase()
    score += wordValues[upperCaseCharacter]
  }

  return score
}

function convertWordToArray(word) {
  if (word.length === 1) {
    return [word]
  }
  if (word != null) {
    const splitWord = word.split('')
    return splitWord
  }
}

function sanitizeWord(word) {}

console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
