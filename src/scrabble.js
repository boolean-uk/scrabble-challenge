class Scrabble {
  constructor (word) {
    this.word = word
  }

  score () {
    let count = 0

    if (this.word == null) {
      return 0
    }

    const wordTrimmed = this.word.trim()

    for (let i = 0; i < wordTrimmed.length; i++) {
      if (wordTrimmed[i].match(/[^A-Z]/i)) {
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
}

module.exports = Scrabble
