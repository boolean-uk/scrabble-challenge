class Scrabble {
  constructor (word) {
    this.word = word
  }

  score () {
    let count = 0

    if (this.word == null) {
      return 0
    }

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i].match(/[^A-Z]/i)) {
        return 0
      }
      if (this.word[i].match(/[AEIOULNRST]/i)) {
        count++
      }
      if (this.word[i].match(/[DG]/i)) {
        count += 2
      }
      if (this.word[i].match(/[BCMP]/i)) {
        count += 3
      }
      if (this.word[i].match(/[FHVWY]/i)) {
        count += 4
      }
      if (this.word[i].match(/[K]/i)) {
        count += 5
      }
      if (this.word[i].match(/[JX]/i)) {
        count += 8
      }
      if (this.word[i].match(/[QZ]/i)) {
        count += 10
      }
    }
    return count
  }
}

module.exports = Scrabble
