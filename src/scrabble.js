
class Scrabble {
  constructor (word) {
    this.word = word
    this.doubleArrayScore = []
    this.tripleArrayScore = []
    this.curly = '{'
    this.square = '['
    this.wordScore = 0
    this.scoresObject = {
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
  }

  doubleScore () {
    if (this.word[0] === this.curly) {
      this.doubleArrayScore = [...this.word.toUpperCase()]
      return this.doubleArrayScore
    } else if (this.word.includes(this.curly)) {
      this.doubleArrayScore = this.word.toUpperCase()
        .match(/(\{[a-z]+)(?=\})/g)
        .join('')
        .split(/\{/)
        .filter(Boolean)
      console.log(this.doubleArrayScore)
      return this.doubleArrayScore
    }
  }

  tripleScore () {
    if (this.word[0] === this.square) {
      this.tripleArrayScore = [...this.word.toUpperCase()]
      return this.tripleArrayScore
    } else if (this.word.includes(this.square)) {
      this.tripleArrayScore = this.word.toUpperCase()
        .match(/(\[[a-z]+)(?=\])/g)
        .join('')
        .split(/\[/)
        .filter(Boolean)
      console.log(this.tripleArrayScore)
      return this.tripleArrayScore
    }
  }

  score () {
    if (this.word === '') {
      return 0
    } else if (this.word === '\t') {
      return 0
    } else if (this.word === null) {
      return 0
    } else if (this.word === '\n') {
      return 0
    } else if (this.word.includes(' ')) {
      return 0
    } else {
      this.wordScore += [...this.word.toUpperCase()].reduce(
        (acc, letter) => (acc += this.scoresObject[letter]),
        0
      )
      return this.wordScore
    }
  }
}

const test = new Scrabble('[ppppppp}').doubleScore()
console.log('test', test)

module.exports = Scrabble
