const scrabbleScores = {
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
  if (word === null) return 0
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase()
    if (
      scrabbleScores === '' ||
      scrabbleScores === `\t` ||
      scrabbleScores === `\n`
    )
      return 0
    if (word === null) return 0

    if (scrabbleScores.hasOwnProperty(letter)) {
      score += scrabbleScores[letter]
    }
  }
  return score
}
// console.log(scrabble('f'))
// console.log(scrabble('street'))
// console.log(scrabble('quirky'))
// console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
