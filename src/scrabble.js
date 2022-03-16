const letterValue = { a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10 }

class Scrabble {
  constructor (word) { this.word = word }

  score () {
    let totalScore = 0
    let multiple = 1
    let sumSquareBracket = 0
    let sumCurlyBracket = 0
    if (typeof this.word !== 'string') { return 0 }
    if (this.word === '\t' || this.word === '\n') { totalScore += 0 }
    for (let i = 0; i < this.word.length; i++) {
      const letter = letterValue[this.word[i].toLowerCase()] || 0
      if (this.word[i] === '[') {
        multiple = 2 * multiple
        sumSquareBracket += 1
      }
      if (this.word[i] === '{') {
        multiple = 3 * multiple
        sumCurlyBracket += 1
      }
      if (this.word[i] === ']' && sumSquareBracket > 0) {
        multiple = multiple / 2
        sumSquareBracket -= 1
      }
      if (this.word[i] === '}' && sumCurlyBracket > 0) {
        multiple = multiple / 3
        sumCurlyBracket -= 1
      }
      totalScore += (letter * multiple)
    }
    return totalScore
  }
}
module.exports = Scrabble
