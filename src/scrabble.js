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
    let score = 0
    if (typeof this.word !== 'string') {
      return score
    } else {
      const wordArr = this.word.toLowerCase().split('')
      for (let i = 0; i < wordArr.length; i++) {
        if (this.onePoint.includes(wordArr[i])) score += 1
        if (this.twoPoints.includes(wordArr[i])) score += 2
        if (this.threePoints.includes(wordArr[i])) score += 3
        if (this.fourPoints.includes(wordArr[i])) score += 4
        if (this.fivePoints.includes(wordArr[i])) score += 5
        if (this.eightPoints.includes(wordArr[i])) score += 8
        if (this.tenPoints.includes(wordArr[i])) score += 10
      }

      if (wordArr[0] === '{' && wordArr[wordArr.length - 1] === '}') {
        return score * 2
      } else if (wordArr[0] === '[' && wordArr[wordArr.length - 1] === ']') {
        return score * 3
      }
      return score
    }
  }
}

module.exports = Scrabble
