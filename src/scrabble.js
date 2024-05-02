function scrabble(word) {
  if (!word || typeof word !== 'string' || word.trim() === '') return 0

  const scores = {
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

  let totalScore = 0
  const upperCaseWord = word.toUpperCase()

  for (let i = 0; i < upperCaseWord.length; i++) {
    const letter = upperCaseWord[i]
    if (scores[letter]) {
      totalScore += scores[letter]
    }
  }

  return totalScore
}

console.log(scrabble(''))
console.log(scrabble(' \t\n'))
console.log(scrabble(null))
console.log(scrabble('a'))
console.log(scrabble('f'))
console.log(scrabble('street'))
console.log(scrabble('quirky'))
console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
