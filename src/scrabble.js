const letterValue = { a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10 }

class Scrabble {
  constructor (word) { this.word = word }

  score () {
    let totalScore = 0
    let multiple = 1
    let sumOfOpenSquareBracket = 0
    let sumOfOpenCurlyBracket = 0
    let sumOfCloseSquareBracket = 0
    let sumOfCloseCurlyBracket = 0
    if (typeof this.word !== 'string') { return 0 }
    if (this.word === '\t' || this.word === '\n') { totalScore += 0 }
    for (let i = 0; i < this.word.length; i++) {
      const letter = letterValue[this.word[i].toLowerCase()] || 0
      if (this.word[i] === '[') {
        multiple = 2 * multiple
        sumOfOpenSquareBracket += 1
      }
      if (this.word[i] === '{') {
        multiple = 3 * multiple
        sumOfOpenCurlyBracket += 1
      }
      if (this.word[i] === ']' && sumOfOpenSquareBracket > sumOfCloseSquareBracket) {
        multiple = multiple / 2
        sumOfCloseSquareBracket += 1
      }
      if (this.word[i] === '}' && sumOfOpenCurlyBracket > sumOfCloseCurlyBracket) {
        multiple = multiple / 3
        sumOfCloseCurlyBracket += 1
      }
      totalScore += (letter * multiple)
    }
    return totalScore
  }
}
module.exports = Scrabble
