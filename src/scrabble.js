const commonLetters = [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], ['D', 'G'], ['B', 'C', 'M', 'P'], ['F', 'H', 'V', 'W', 'Y'], ['K']]
const rareLetters = [['J', 'X'], ['Q', 'Z']]
const double = /\{[A-Z{}[\]]*\}/g
const triple = /\[[A-Z{}[\]]*\]/g

class Scrabble {
  constructor (str) {
    this.type = str
    this.str = String(str).toUpperCase()
    this.doubleWord = false
    this.tripleWord = false
    this.doubleLetters = []
    this.tripleLetters = []
    this.points = 0
  }

  noInput () {
    return this.type === null
  }

  parseWord () {
    this.logDoubles()
    this.logTriples()
    return this.stringToArray()
  }

  stringToArray () {
    const arr = []
    for (let i = 0; i < this.str.length; i++) {
      arr.push(this.str.charAt(i))
    }
    return arr
  }

  scoreWord () {
    const arr = this.parseWord()
    for (let i = 0; i < arr.length; i++) {
      this.scoreLetter(arr[i])
    }
  }

  scoreLetter (letter) {
    this.scoreCommonLetter(letter)
    this.scoreRareLetter(letter)
  }

  scoreCommonLetter (letter) {
    for (let i = 0; i < commonLetters.length; i++) {
      if (commonLetters[i].includes(letter)) {
        this.scrabbleLetter(letter, i + 1)
      }
    }
  }

  scoreRareLetter (letter) {
    for (let i = 0; i < rareLetters.length; i++) {
      if (rareLetters[i].includes(letter)) {
        this.scrabbleLetter(letter, (i + 4) * 2)
      }
    }
  }

  logDoubles () {
    if (double.test(this.str)) { // updates variables that track double status of words and letters
      this.doubleLetters = this.str.match(double) // double letter statuses stored by array
      this.doubleWord = this.str.match(double).includes(this.str) // double word status stored by boolean
    }
  }

  logTriples () {
    if (triple.test(this.str)) { // same as with doubles for triples
      this.tripleLetters = this.str.match(triple)
      this.tripleWord = this.str.match(triple).includes(this.str)
    }
  }

  scrabbleWord () {
    if (this.doubleWord) {
      this.points *= 2
    }
    if (this.tripleWord) {
      this.points *= 3
    }
  }

  scrabbleLetter (element, pts) {
    if (this.doubleLetters.includes(`{${element}}`)) {
      this.points += pts * 2
    } else if (this.tripleLetters.includes(`[${element}]`)) {
      this.points += pts * 3
    } else this.points += pts
  }

  score () {
    if (this.noInput()) {
      this.points = 0
    } else {
      this.scoreWord()
      this.scrabbleWord()
    }
    return this.points
  }
}
module.exports = Scrabble
