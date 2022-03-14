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
    return ScoreUtil.scores[char] || 0
  }

  score () {
    let s = 0
    let doubleNext = false
    let tripleNext = false
    if (!this.isValid()) return s
    this.word
      .replace(' ', '')
      .toLowerCase()
      .split('')
      .forEach((ch, index) => {
        if (ch === '[') {
          const i = this.word.indexOf(']')
          if (i === index + 2) tripleNext = true
        } else if (ch === '{') {
          const i = this.word.indexOf('}')
          if (i === index + 2) doubleNext = true
        } else if (doubleNext) {
          s += this.getCharScore(ch) * 2
          doubleNext = false
        } else if (tripleNext) {
          s += this.getCharScore(ch) * 3
          tripleNext = false
        } else s += this.getCharScore(ch)
      })

    if (
      this.word.indexOf('[') === 0 &&
      this.word.indexOf(']') === this.word.length - 1
    ) { return s * 3 }
    if (
      this.word.indexOf('{') === 0 &&
      this.word.indexOf('}') === this.word.length - 1
    ) { return s * 2 }
    return s
  }
}

module.exports = Scrabble
