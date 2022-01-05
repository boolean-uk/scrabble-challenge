const points = {
  // 1 POINT CHARACTERS
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
  // 2 POINT CHARACTERS
  D: 2,
  G: 2,
  // 3 POINT CHARACTERS
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  // 4 POINT CHARACTERS
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  // 5 POINT CHARACTERS
  K: 5,
  // 8 POINT CHARACTERS
  J: 8,
  X: 8,
  // 10 POINT CHARACTERS
  Q: 10,
  Z: 10
}

class Scrabble {
  // Write your implementation here

  constructor (word, score) {
    this.word = word
  }

  score () {
    let score = 0
    if (this.word === null || this.word === '\t\n') {
      return score
    }
    const word = this.word.trim().toUpperCase()
    for (let i = 0; i < this.word.length; i++) {
      score += points[word[i]]
    }
    return score
  }
}

module.exports = Scrabble
