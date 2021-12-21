class Scrabble {
  constructor (word) {
    this.word = word
    this.wordMultiply = word
    this.scoreMap = {
      // score = 1
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
      // score = 2
      D: 2,
      G: 2,
      // score = 3
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      // score = 4
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      // score = 5
      K: 5,
      // score = 8
      J: 8,
      X: 8,
      // score = 10
      Q: 10,
      Z: 10,
      // score = 0
      '{': 0,
      '}': 0,
      '[': 0,
      ']': 0,
      ',': 0
    }
  }

  doubleLetter () {
    const wordArray = []
    for (let i = 0; i < this.word.length - 1; i++) {
      if (this.word.charAt(i) === '{' && this.word.charAt(i + 2) === '}') {
        wordArray.push(this.word.charAt(i + 1))
      }
    }
    return wordArray.toString() ?? '' // nullish coallescing - return RHS when LHS is falsy
  }

  tripleLetter () {
    const wordArray = []
    for (let i = 0; i < this.word.length - 1; i++) {
      if (this.word.charAt(i) === '[' && this.word.charAt(i + 2) === ']') {
        wordArray.push(this.word.charAt(i + 1))
      }
    }
    return wordArray.toString() ?? ''
  }

  lettersScore () {
    this.word = this.word // original word
      .concat(this.doubleLetter()) // + one more letter from orignal word (double letter)
      .concat(this.tripleLetter())
      .concat(this.tripleLetter()) // + two more letters from original word (triple letter)
    this.word = this.word.toUpperCase()
    if (this.word.length === 1) return this.scoreMap[this.word]
    if (this.word.length > 1) {
      return [...this.word]
        .map((letter) => this.scoreMap[letter])
        .reduce((acc, letterNum) => (acc = acc + letterNum))
    }
  }

  wordMultiplier () {
    if (
      this.wordMultiply[0] === '[' &&
      this.wordMultiply[this.wordMultiply.length - 1] === ']' &&
      this.wordMultiply.length !== 3 // ignore [a] or {a}
    ) {
      return 3
    }
    if (
      this.wordMultiply[0] === '{' &&
      this.wordMultiply[this.wordMultiply.length - 1] === '}' &&
      this.wordMultiply.length !== 3
    ) {
      return 2
    }
    return 1
  }

  score () {
    if (this.word == null || this.word.length < 1 || this.word.trim() === '') {
      return 0
    }
    return this.lettersScore() * this.wordMultiplier()
  }
}

const scrabble = new Scrabble('')
scrabble.score()

module.exports = Scrabble
