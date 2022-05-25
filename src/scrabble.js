class Scrabble {
  // Write your implementation here

  constructor(word) {
    this.word = word
  }

  score() {
    let totalScore = 0

    if (this.word === null || this.word === undefined) {
      this.word = 0
    }

    // for (let i = 0; i < this.word ? this.word.length : 0; i++) {

    for (let i = 0; i < this.word.length; i++) {
      if (
        this.word[i] === 'a' ||
        this.word[i] === 'e' ||
        this.word[i] === 'i' ||
        this.word[i] === 'o' ||
        this.word[i] === 'u' ||
        this.word[i] === 'l' ||
        this.word[i] === 'n' ||
        this.word[i] === 'r' ||
        this.word[i] === 's' ||
        this.word[i] === 't' ||
        this.word[i] === 'A' ||
        this.word[i] === 'E' ||
        this.word[i] === 'I' ||
        this.word[i] === 'O' ||
        this.word[i] === 'U' ||
        this.word[i] === 'L' ||
        this.word[i] === 'N' ||
        this.word[i] === 'R' ||
        this.word[i] === 'S' ||
        this.word[i] === 'T'
      ) {
        totalScore += 1
      }

      if (
        this.word[i] === 'd' ||
        this.word[i] === 'g' ||
        this.word[i] === 'D' ||
        this.word[i] === 'G'
      ) {
        totalScore += 2
      }

      if (
        this.word[i] === 'b' ||
        this.word[i] === 'c' ||
        this.word[i] === 'm' ||
        this.word[i] === 'p' ||
        this.word[i] === 'B' ||
        this.word[i] === 'C' ||
        this.word[i] === 'M' ||
        this.word[i] === 'P'
      ) {
        totalScore += 3
      }

      if (
        this.word[i] === 'f' ||
        this.word[i] === 'h' ||
        this.word[i] === 'v' ||
        this.word[i] === 'w' ||
        this.word[i] === 'y' ||
        this.word[i] === 'F' ||
        this.word[i] === 'H' ||
        this.word[i] === 'V' ||
        this.word[i] === 'W' ||
        this.word[i] === 'Y'
      ) {
        totalScore += 4
      }

      if (this.word[i] === 'k' || this.word[i] === 'K') {
        totalScore += 5
      }

      if (
        this.word[i] === 'j' ||
        this.word[i] === 'x' ||
        this.word[i] === 'J' ||
        this.word[i] === 'X'
      ) {
        totalScore += 8
      }

      if (
        this.word[i] === 'q' ||
        this.word[i] === 'z' ||
        this.word[i] === 'Q' ||
        this.word[i] === 'Z'
      ) {
        totalScore += 10
      }
    }

    return totalScore
  }
}

const scrabble = new Scrabble(null)
console.log('the scrabble word is: ', scrabble.word)
console.log('the scrabble score is: ', scrabble.score())

module.exports = Scrabble
