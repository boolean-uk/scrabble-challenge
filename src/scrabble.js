const aplthebetValue = {
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
  let wordValue = 0

  if (word === null) {
    return wordValue
  }

  const wordArray = word.toUpperCase().split('')

  for (let i = 0; i < word.length; i++) {
    if (
      wordArray[i] === ' ' ||
      wordArray[i] === '\t' ||
      wordArray[i] === '\n'
    ) {
      return wordValue
    }
    wordValue += aplthebetValue[wordArray[i]]
  }
  return wordValue
}
// if (word < 1 ) {
//   return wordValue
// }

console.log(scrabble(' '))

module.exports = scrabble
