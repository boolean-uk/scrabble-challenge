class Scrabble {
  constructor (word) {
    this.word = word
  }

  scoreMain () {
    let count = 0

    if (this.word == null) {
      return 0
    }
    const wordTrimmed = this.word.trim()

    for (let i = 0; i < wordTrimmed.length; i++) {
      if (wordTrimmed[i].match(/[^A-Z{}[]]/i)) {
        return 0
      }
      if (wordTrimmed[i].match(/[AEIOULNRST]/i)) {
        count++
      }
      if (wordTrimmed[i].match(/[DG]/i)) {
        count += 2
      }
      if (wordTrimmed[i].match(/[BCMP]/i)) {
        count += 3
      }
      if (wordTrimmed[i].match(/[FHVWY]/i)) {
        count += 4
      }
      if (wordTrimmed[i].match(/[K]/i)) {
        count += 5
      }
      if (wordTrimmed[i].match(/[JX]/i)) {
        count += 8
      }
      if (wordTrimmed[i].match(/[QZ]/i)) {
        count += 10
      }
    }
    return count
  }

  scoreDouble () {
    let countDouble = 0

    if (this.word == null) {
      return 0
    }

    const openCurlyBracket = this.word.indexOf('{')
    const closeCurlyBracket = this.word.indexOf('}')
    const doubleScore = this.word.substring(openCurlyBracket + 1, closeCurlyBracket)

    if (openCurlyBracket === -1 && closeCurlyBracket === -1) {
      return 0
    }

    for (let j = 0; j < doubleScore.length; j++) {
      if (doubleScore[j].match(/[^A-Z{}[]]/i)) {
        return 0
      }
      if (doubleScore[j].match(/[AEIOULNRST]/i)) {
        countDouble++
      }
      if (doubleScore[j].match(/[DG]/i)) {
        countDouble += 2
      }
      if (doubleScore[j].match(/[BCMP]/i)) {
        countDouble += 3
      }
      if (doubleScore[j].match(/[FHVWY]/i)) {
        countDouble += 4
      }
      if (doubleScore[j].match(/[K]/i)) {
        countDouble += 5
      }
      if (doubleScore[j].match(/[JX]/i)) {
        countDouble += 8
      }
      if (doubleScore[j].match(/[QZ]/i)) {
        countDouble += 10
      }
    }

    return countDouble
  }

  scoreTriple () {
    let countTriple = 0

    if (this.word == null) {
      return 0
    }

    const openSquareBracket = this.word.indexOf('[')
    const closeSquareBracket = this.word.indexOf(']')
    const tripleScore = this.word.substring(openSquareBracket + 1, closeSquareBracket)

    if (openSquareBracket === -1 && closeSquareBracket === -1) {
      return 0
    }

    for (let k = 0; k < tripleScore.length; k++) {
      if (tripleScore[k].match(/[^A-Z{}[]]/i)) {
        return 0
      }
      if (tripleScore[k].match(/[AEIOULNRST]/i)) {
        countTriple += 2
      }
      if (tripleScore[k].match(/[DG]/i)) {
        countTriple += 4
      }
      if (tripleScore[k].match(/[BCMP]/i)) {
        countTriple += 6
      }
      if (tripleScore[k].match(/[FHVWY]/i)) {
        countTriple += 8
      }
      if (tripleScore[k].match(/[K]/i)) {
        countTriple += 10
      }
      if (tripleScore[k].match(/[JX]/i)) {
        countTriple += 16
      }
      if (tripleScore[k].match(/[QZ]/i)) {
        countTriple += 20
      }
    }
    return countTriple
  }

  score () {
    return this.scoreMain() + this.scoreDouble() + this.scoreTriple()
  }
}

module.exports = Scrabble
