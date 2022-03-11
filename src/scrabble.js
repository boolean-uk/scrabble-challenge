const ScoreUtil = require('./utils/Scores')

class Scrabble {
  constructor (word) {
    this.word = word
  }

  isValid () {
    return (
      this.word != null && typeof this.word === 'string' && this.word.length > 0
    )
  }

  getCharScore (char) {
    if (ScoreUtil.scores[char]) return ScoreUtil.scores[char]
    else return 0
  }

  score () {
    let s = 0
    if (!this.isValid()) return s
    this.word
      .replace(' ', '')
      .toLowerCase()
      .split('')
      .forEach((ch) => (s += this.getCharScore(ch)))

    return s
  }
}

const t = new Scrabble('    \n')
console.log(t.score())

module.exports = Scrabble
