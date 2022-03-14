class Scrabble {
  constructor (word) {
    this.word = word
    this.onePoint = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
    this.twoPoints = ['d', 'g']
    this.threePoints = ['b', 'c', 'm', 'p']
    this.fourPoints = ['f', 'h', 'v', 'w', 'y']
    this.fivePoints = ['k']
    this.eightPoints = ['j', 'x']
    this.tenPoints = ['q', 'z']
  }

  score () {
    let finalScore = 0
    let subScore = 0
    let multiply = 1
    // check if the argument is a string
    if (typeof this.word !== 'string') {
      return finalScore
    } else {
      const wordArr = this.word.toLowerCase().split('')
      for (let i = 0; i < wordArr.length; i++) {
        // check if there is curly bracket or square bracket
        // If so, change the multiply to 2 or 3. If not, multiply remains 1
        if (wordArr[i] === '{') {
          multiply = 2
        } else if (wordArr[i] === '}') {
          multiply = 1
        } else if (wordArr[i] === '[') {
          multiply = 3
        } else if (wordArr[i] === ']') {
          multiply = 1
        } else {
          if (this.onePoint.includes(wordArr[i])) subScore = 1
          if (this.twoPoints.includes(wordArr[i])) subScore = 2
          if (this.threePoints.includes(wordArr[i])) subScore = 3
          if (this.fourPoints.includes(wordArr[i])) subScore = 4
          if (this.fivePoints.includes(wordArr[i])) subScore = 5
          if (this.eightPoints.includes(wordArr[i])) subScore = 8
          if (this.tenPoints.includes(wordArr[i])) subScore = 10
          finalScore += subScore * multiply
        }
      }
    }
    return finalScore
  }
}

module.exports = Scrabble
