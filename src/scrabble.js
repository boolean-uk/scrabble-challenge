const scoreBoard = {
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

class Scrabble {
  constructor (word) {
    this.word = word
  }

  // Scores for each letter
  // static scoreBoard = { A: 1, B: 3, C: 3,
  //                       D: 2, E: 1, F: 4,
  //                       G: 2, H: 4, I: 1,
  //                       J: 8, K: 5, L: 1,
  //                       M: 3, N: 1, O: 1,
  //                       P: 3, Q: 10, R: 1,
  //                       S: 1, T: 1, U: 1,
  //                       V: 4, W: 4, X: 8,
  //                       Y: 4, Z: 10 }

  /**
   * Iterates over every character in a given word and sums the total score.
   * @returns A score for the given word.
   */
  score () {
    let score = 0
    if (this.word === null) return 0
    else if (this.word.length === 0) return 0
    // Tests if there is any whitespace
    else if (/\s/g.test(this.word)) return 0

    for (let i = 0; i < this.word.length; i++) {
      score += scoreBoard[this.word[i].toUpperCase()]
    }
    return score
  }

  /**
   * Setter method to idenfity a double points letter.
   * @param {string} ch - A character to identify the double letter.
   */
  setDoubleLetter (ch) {
    let newWord = ''
    for (let i = 0; i < this.word.length; i++) {
      this.word[i].toLowerCase() === ch.toLowerCase() ? newWord += `{${ch}}` : newWord += this.word[i]
    }
    this.word = newWord
  }

  /**
   * Setter method to idenfity a triple points letter.
   * @param {string} ch - A character to identify the triple letter.
   */
  setTripleLetter (ch) {
    let newWord = ''
    for (let i = 0; i < this.word.length; i++) {
      this.word[i].toLowerCase() === ch.toLowerCase() ? newWord += `[${ch}]` : newWord += this.word[i]
    }
    this.word = newWord
  }

  /**
   * Sets the word to a double points word.
   */
  setDoubleWord () {
    this.word = `{${this.word}}`
  }

  /**
   * Sets the word to a triple points word.
   */
  setTripleWord () {
    this.word = `[${this.word}]`
  }
}

module.exports = Scrabble
