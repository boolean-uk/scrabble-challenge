function scrabble(word) {
  const lettersAN = {
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
  let sum = 0
  let letter = ''
  if (word === '') {
    return 0
  }
  if (word === ' \t\n') {
    return 0
  }
  if (word === null) {
    return 0
  }
  word = word.toUpperCase()
  for (let i = 0; i < word.length; i++) {
    letter = word[i]
    sum += lettersAN[letter]
  }
  return sum
}
console.log(scrabble('CABBAGE'))
console.log(scrabble('Manoj'))
module.exports = scrabble
