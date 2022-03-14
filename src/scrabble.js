class Scrabble {
  // Write your implementation here

  constructor (wordValue) {
    this.wordValue = wordValue
    this.isDouble = false
    this.isTriple = false
    this.obj = {
      value1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      value2: ['D', 'G'],
      value3: ['B', 'C', 'M', 'P'],
      value4: ['F', 'H', 'V', 'W', 'Y'],
      value5: ['K'],
      value8: ['J', 'X'],
      value10: ['Q', 'Z']
    }
  }

  _validateString (word) {
    if (typeof word !== 'string' || word.length === 0) {
      return false
    } else return true
  }

  score () {
    if (!this._validateString(this.wordValue)) return 0
    let score = 0
    this.wordValue = this.wordValue
      .toUpperCase()
      .split('')
      .forEach((letter) => {
        for (const key of Object.keys(this.obj)) {
          // Check for the brackets to decide if we need to double or triple up the scores
          this._checkForDoubleOrTriple(letter)
          if (this.obj[key].includes(letter)) {
            let num = +key.match(/\d+/)[0]
            num = this.isDouble ? num * 2 : num
            num = this.isTriple ? num * 3 : num
            score += num
          }
        }
      })
    return score
  }

  _checkForDoubleOrTriple (letter) {
    if (letter === '{') {
      this.isDouble = true
    } else if (letter === '}') {
      this.isDouble = false
    } else if (letter === '[') {
      this.isTriple = true
    } else if (letter === ']') {
      this.isTriple = false
    }
  }
}

const scrabble = new Scrabble('TIbor')

console.log(scrabble.score())

module.exports = Scrabble
