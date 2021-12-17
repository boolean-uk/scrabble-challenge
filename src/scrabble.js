class Scrabble {
  constructor (word) {
    this.word = word
  }

  scoreLoop (string, num) {
    num = 0
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[^A-Z{}[]]/i)) {
        return 0
      }
      if (string[i].match(/[AEIOULNRST]/i)) {
        num++
      }
      if (string[i].match(/[DG]/i)) {
        num += 2
      }
      if (string[i].match(/[BCMP]/i)) {
        num += 3
      }
      if (string[i].match(/[FHVWY]/i)) {
        num += 4
      }
      if (string[i].match(/[K]/i)) {
        num += 5
      }
      if (string[i].match(/[JX]/i)) {
        num += 8
      }
      if (string[i].match(/[QZ]/i)) {
        num += 10
      }
    }
    return num
  }

  scoreMain () {
    if (this.word == null) {
      return 0
    }

    let count
    const wordTrimmed = this.word.trim()

    return this.scoreLoop(wordTrimmed, count)
  }

  scoreDouble () {
    if (this.word == null) {
      return 0
    }

    let countDouble
    const openCurlyBracket = this.word.indexOf('{')
    const closeCurlyBracket = this.word.indexOf('}')
    const doubleScore = this.word.substring(openCurlyBracket + 1, closeCurlyBracket)

    if (openCurlyBracket === -1 && closeCurlyBracket === -1) {
      return 0
    }

    return this.scoreLoop(doubleScore, countDouble)
  }

  scoreTriple () {
    if (this.word == null) {
      return 0
    }

    let countTriple
    const openSquareBracket = this.word.indexOf('[')
    const closeSquareBracket = this.word.indexOf(']')
    const tripleScore = this.word.substring(openSquareBracket + 1, closeSquareBracket)

    if (openSquareBracket === -1 && closeSquareBracket === -1) {
      return 0
    }

    return this.scoreLoop(tripleScore, countTriple) * 2
  }

  score () {
    return this.scoreMain() + this.scoreDouble() + this.scoreTriple()
  }
}

module.exports = Scrabble
