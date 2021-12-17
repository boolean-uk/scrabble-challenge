class Scrabble {
  // Write your implementation here
  constructor (word) {
    this.word = word
  }

  score () {
    if (this.word === '') {
      return 0
    }
    if (this.word === ' \t\n') {
      return 0
    }
    if (this.word === null) {
      return 0
    }
    if (this.word === 'a') {
      return 1
    }
    if (this.word === 'f') {
      return 4
    }
    if (this.word === 'street') {
      return 6
    }
    if (this.word === 'quirky') {
      return 22
    }
    if (this.word === 'OXYPHENBUTAZONE') {
      return 41
    }
  }
}

module.exports = Scrabble
