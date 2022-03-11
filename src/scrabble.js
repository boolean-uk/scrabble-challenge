class Scrabble {
  constructor (word) {
    this.word = word
    this.points = 0
  }

  score (word) {
    if (this.word === '' || this.word === ' ') {
      this.points += 0
      return 0
    }

    if (this.word === ' \t\n') {
      this.points += 0
      return 0
    }

    if (this.word === null) {
      this.points += 0
      return 0
    }

    for (let i = 0; i < this.word.length; i++) {
      const pointOne = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
      const pointTwo = ['d', 'g']
      const pointThree = ['b', 'c', 'm', 'p']
      const pointFour = ['f', 'h', 'v', 'w', 'y']
      const pointFive = ['k']
      const pointEight = ['j', 'x']
      const pointTen = ['q', 'z']

      if (
        pointOne.includes(this.word[i]) ||
        pointOne.includes(this.word[i].toLowerCase())
      ) {
        this.points += 1
      } else if (
        pointTwo.includes(this.word[i]) ||
        pointTwo.includes(this.word[i].toLowerCase())
      ) {
        this.points += 2
      } else if (
        pointThree.includes(this.word[i]) ||
        pointThree.includes(this.word[i].toLowerCase())
      ) {
        this.points += 3
      } else if (
        pointFour.includes(this.word[i]) ||
        pointFour.includes(this.word[i].toLowerCase())
      ) {
        this.points += 4
      } else if (
        pointFive.includes(this.word[i]) ||
        pointFive.includes(this.word[i].toLowerCase())
      ) {
        this.points += 5
      } else if (
        pointEight.includes(this.word[i]) ||
        pointEight.includes(this.word[i].toLowerCase())
      ) {
        this.points += 8
      } else if (
        pointTen.includes(this.word[i]) ||
        pointTen.includes(this.word[i].toLowerCase())
      ) {
        this.points += 10
      }
    }
    return this.points
  }
}

module.exports = Scrabble
