
const scoreNum = {

  pointOne: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  pointTwo: ['D', 'G'],
  pointThree: ['B', 'C', 'M', 'P'],
  pointFour: ['F', 'H', 'V', 'W', 'Y'],
  pointFive: ['K'],
  pointEight: ['J', 'X'],
  pointTen: ['Q', 'Z']
}

class Scrabble {

  constructor(word) {
    this.word = word
  }
  
  score() {
    let sum = 0
    if (this.word === null || this.word.length === 0 || this.word === ' \t\n') {
      return sum
    }
    this.word = this.word.toUpperCase()
    for (let i = 0; i < this.word.length; i++) {
      if (scoreNum.pointOne.includes(this.word[i])) {
        sum += 1
      }
      if (scoreNum.pointTwo.includes(this.word[i])) {
        sum += 2
      }
      if (scoreNum.pointThree.includes(this.word[i])) {
        sum += 3
      }
      if (scoreNum.pointFour.includes(this.word[i])) {
        sum += 4
      }
      if (scoreNum.pointFive.includes(this.word[i])) {
        sum += 5
      }
      if (scoreNum.pointEight.includes(this.word[i])) {
        sum += 8
      }
      if (scoreNum.pointTen.includes(this.word[i])) {
        sum += 10
      }
    }
    return sum
  }
}

module.exports = Scrabble

