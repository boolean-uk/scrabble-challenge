const letterScores = {
  onepoint: ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'l', 'L', 'n', 'N', 'r', 'R', 's', 'S', 't','T'],
  twoPoints: ['d', 'D', 'g', 'G'],
  threePoints: ['b', 'B', 'c', 'C', 'm', 'M', 'p', 'P'],
  fourPoints: ['f', 'F', 'h', 'H', 'v', 'V', 'w', 'W', 'y', 'Y'],
  fivePoints: ['k', 'K'],
  eightPoints: ['j', 'J', 'x', 'X'],
  tenPoints: ['q', 'Q', 'z', 'Z']
}
class Scrabble {
  constructor(word){
    this.word = word;
  }
  score() {
    let count = 0;
    if (this.word === null || this.word.length === 0 || this.word.trim === '') { return count }
    for (let i = 0; i < this.word.length; i++) {
      if (letterScores.onepoint.includes(this.word[i])) count += 1
      if (letterScores.twoPoints.includes(this.word[i])) count += 2
      if (letterScores.threePoints.includes(this.word[i])) count += 3
      if (letterScores.fourPoints.includes(this.word[i])) count += 4
      if (letterScores.fivePoints.includes(this.word[i])) count += 5
      if (letterScores.eightPoints.includes(this.word[i])) count += 8
      if (letterScores.tenPoints.includes(this.word[i])) count += 10
    }
    for (let j = 0; j < this.word.length; j++) {
      if (this.word[j] === '{' && this.word[j + 2] === '}') {
        if (letterScores.onepoint.includes(this.word[j + 1])) count += 1
        if (letterScores.twoPoints.includes(this.word[j + 1])) count += 2
        if (letterScores.threePoints.includes(this.word[j + 1])) count += 3
        if (letterScores.fourPoints.includes(this.word[j + 1])) count += 4
        if (letterScores.fivePoints.includes(this.word[j + 1])) count += 5
        if (letterScores.eightPoints.includes(this.word[j + 1])) count += 8
        if (letterScores.tenPoints.includes(this.word[j + 1])) count += 10
      }
      if (this.word[j] === '[' && this.word[j + 2] === ']') {
        if (letterScores.onepoint.includes(this.word[j + 1])) count += 2
        if (letterScores.twoPoints.includes(this.word[j + 1])) count += 4
        if (letterScores.threePoints.includes(this.word[j + 1])) count += 6
        if (letterScores.fourPoints.includes(this.word[j + 1])) count += 8
        if (letterScores.fivePoints.includes(this.word[j + 1])) count += 10
        if (letterScores.eightPoints.includes(this.word[j + 1])) count += 16
        if (letterScores.tenPoints.includes(this.word[j + 1])) count += 20
      }
    }
    if (this.word.charAt(0) === '{' && this.word.charAt(this.word.length - 1) === '}') count *= 2
    if (this.word.charAt(0) === '[' && this.word.charAt(this.word.length - 1) === ']') count *= 3
    return count
  }
}

module.exports = Scrabble
