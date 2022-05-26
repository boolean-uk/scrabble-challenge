const letterScores = {
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

class Scrabble {
  // Start off with the constructor
  constructor(word = "", scoreMap = letterScores) {
    this.word = word
    this.scoreMap = scoreMap
  }

  // a score method that returns 0 if 
  score(){
    if (this.word === " " || 
      this.word === null ||
      this.word === " \t\n") {
      return 0
    } else {
      return this.getScore()
    }
  }

  getScore() {
    let score = 0
    for(let i= 0; i < this.word.length; i++) {
      const letter = this.word.charAt(i).toUpperCase() // note to self: this line of code gets the current letter and makes it an uppercase
      score += this.scoreMap[letter];
    }
    return score
  }  
}

module.exports = Scrabble
