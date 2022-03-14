
class Scrabble {
  constructor (word) {
    this.doubleLetterArray = []
    this.tripleLetterArray = []
    this.doubleLetterArrayReduced = []
    this.tripleLetterArrayReduced = []

    this.bracketsToRemove = ['[', ']', '{', '}']
    this.doubleScoreLettersToRemove = []
    this.arrayMinusDoubleScoredLetters = []

    this.totalScore = 0

    // this.cleanArrayForScoring

    this.word = word
    this.curly = '{'
    this.square = '['
    this.wordScore = 0
    this.scoresObject = {
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
  }

  wordArray () {
    return [...this.word]
  }

  score () {
    if (this.word === '') {
      return 0
    } else if (this.word === '\t') {
      return 0
    } else if (this.word === null) {
      return 0
    } else if (this.word === '\n') {
      return 0
    } else if (this.word.includes(' ') || this.word.includes('\t') || this.word.includes('\n')) {
      return 0
    } else {
      this.wordScore += [...this.word.toUpperCase()].reduce(
        (acc, letter) => (acc += this.scoresObject[letter]),
        0
      )
      return this.wordScore
    }
  }

  doubleScoreCurlyBrackets () {
    if (
      // MORE THAN ONE DOUBLE SCORING LETTER
      this.word.split(this.curly).length - 1 >
      1
    ) {
      this.doubleLetterArray = [...this.word]
      for (let j = 0; j < this.doubleLetterArray.length; j++) {
        if (this.doubleLetterArray[j] === this.curly) {
          this.doubleLetterArrayReduced.push(this.doubleLetterArray[j + 1])
        }
      }
      return this.doubleLetterArrayReduced
    } else if (
      // ONE LETTER, BUT NOT FIRST, POSSIBLY LAST, ANYTHING IN BETWEEN
      this.word.includes(this.curly) &&
      this.word[0] !== this.curly
    ) {
      this.doubleLetterArrayReduced.push(
        this.word[this.word.indexOf(this.curly) + 1]
      )
      return this.doubleLetterArrayReduced
    } else if (
      // ONE LETTER, BUT NOT LAST, POSSIBLY FIRST, ANYTHING IN BETWEEN
      this.word.includes(this.curly) &&
      this.word[this.word.length - 1] !== this.curly
    ) {
      this.doubleLetterArrayReduced.push(
        this.word[this.word.indexOf(this.curly) + 1]
      )
      return this.doubleLetterArrayReduced
    } else if (
      // WHOLE WORD BETWEEN [ ]
      this.word[0] === this.curly &&
      this.word[this.word.length - 1] === this.curly
    ) {
      this.doubleLetterArrayReduced = [...this.word]
      return this.doubleLetterArrayReduced
    } else {
      return ''
    }
  }

  tripleScoreSquareBrackets () {
    if (
      // MORE THAN ONE DOUBLE SCORING LETTER
      this.word.split(this.square).length - 1 >
      1
    ) {
      this.tripleLetterArray = [...this.word]
      for (let j = 0; j < this.tripleLetterArray.length; j++) {
        if (this.tripleLetterArray[j] === this.square) {
          this.tripleLetterArrayReduced.push(this.tripleLetterArray[j + 1])
        }
      }
      return this.tripleLetterArrayReduced
    } else if (
      // ONE LETTER, BUT NOT FIRST, POSSIBLY LAST, ANYTHING IN BETWEEN
      this.word.includes(this.square) &&
      this.word[0] !== this.square
    ) {
      this.tripleLetterArrayReduced.push(
        this.word[this.word.indexOf(this.square) + 1]
      )
      return this.tripleLetterArrayReduced
    } else if (
      // ONE LETTER, BUT NOT LAST, POSSIBLY FIRST, ANYTHING IN BETWEEN
      this.word.includes(this.square) &&
      this.word[this.word.length - 1] !== this.square
    ) {
      this.tripleLetterArrayReduced.push(
        this.word[this.word.indexOf('[') + 1]
      )
      return this.tripleLetterArrayReduced
    } else if (
      // WHOLE WORD BETWEEN [ ]
      this.word[0] === this.square &&
      this.word[this.word.length - 1] === this.square
    ) {
      this.tripleLetterArrayReduced = [...this.word]
      return this.tripleLetterArrayReduced
    } else {
      return ''
    }
  }

  // REMOVE DOUBLE SCORE LETTERS FROM ARRAY
  removeDoubleScoredLetters () {
    const doubleScoreLettersToRemove = this.doubleScoreCurlyBrackets()
    const arrayMinusDoubleScoredLetters = [...this.word].filter(item => {
      return doubleScoreLettersToRemove.indexOf(item) === -1
    })
    return arrayMinusDoubleScoredLetters
  }

  // REMOVE TRIPLE SCORE LETTERS FROM ARRAY ABOVE

  removeTripleScoredLetters () {
    const tripleScoreLettersToRemove = this.tripleScoreSquareBrackets()
    const arrayMinusDoubleTripleScoredLetters = [...this.arrayMinusDoubleScoredLetters].filter(item => {
      return tripleScoreLettersToRemove.indexOf(item) === -1
    })
    return arrayMinusDoubleTripleScoredLetters
  }

  // // REMOVE BRACKETS FROM ARRAY
  // cleanArrayOfBrackets () {
  //   const cleanArrayForScoring = [...this.arrayMinusDoubleTripleScoredLetters].filter(item => {
  //     return this.bracketsToRemove.indexOf(item) === -1
  //   })

  //   return cleanArrayForScoring
  // }

  // single score
  singleScore () {
    const singleScore = this.arrayMinusDoubleTripleScoredLetters.map(letter => scoreObject[letter.toUpperCase()]).reduce((x, y) => x + y, 0)
    console.log(singleScore)
    return singleScore
  }

  // double score
  doubleScore () {
    const doubleScore = this.doubleScoreCurlyBrackets().map(letter => scoreObject[letter.toUpperCase()]).reduce((x, y) => x + y, 0)
    console.log(doubleScore)
    return doubleScore
  }

  // triple score
  tripleScore () {
    const tripleScore = this.tripleScoreSquareBrackets().map(letter => scoreObject[letter.toUpperCase()]).reduce((x, y) => x + y, 0)
    console.log(tripleScore)
    return tripleScore
  }

  scoresTotaled () {
    this.totalScore = singleScore + doubleScore + tripleScore
    console.log('.............', this.totalScore)
    return this.totalScore
  }
}
const doubleScoreWord = new Scrabble('[X][X]{Y}{Y}HENBUTAZON[X]')
const final = new Scrabble('[X][X]{Y}{Y}HENBUTAZON[X]')
console.log('removeDoubleScoredLetters', final.removeDoubleScoredLetters())
console.log('removeTripleScoredLetters', final.removeTripleScoredLetters())
const wordArray = doubleScoreWord.wordArray()
console.log('wordArray', wordArray)
const scoredLettersDouble = doubleScoreWord.doubleScoreCurlyBrackets()
const scoredLettersTriple = doubleScoreWord.tripleScoreSquareBrackets()
console.log('scoredLettersDouble', scoredLettersDouble)
console.log('scoredLettersTriple', scoredLettersTriple)

// remove brackets from array

const bracketsToRemove = ['[', ']', '{', '}']
const arrayCleanOfBrackets = wordArray.filter(item => {
  return bracketsToRemove.indexOf(item) === -1
})
console.log('arrayCleanOfBrackets.', arrayCleanOfBrackets)

// remove double score letters from original array

const arrayCleanOfDouble = arrayCleanOfBrackets.filter(item => {
  return scoredLettersDouble.indexOf(item) === -1
})
console.log('arrayCleanOfDouble....', arrayCleanOfDouble)

// remove triple score letters

const arrayCleanDoubleTriple = arrayCleanOfDouble.filter(item => {
  return scoredLettersTriple.indexOf(item) === -1
})
console.log('arrayCleanDoubleTriple', arrayCleanDoubleTriple)

const scoreObject = {
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
// single score

const singleScore = arrayCleanDoubleTriple
  .map(letter => scoreObject[letter.toUpperCase()])
  .reduce((x, y) => x + y, 0)
console.log(singleScore)

// double score

const doubleScore = scoredLettersDouble
  .map(letter => scoreObject[letter.toUpperCase()])
  .reduce((x, y) => x + y, 0)

console.log(doubleScore)

// triple score

const tripleScore = scoredLettersTriple
  .map(letter => scoreObject[letter.toUpperCase()])
  .reduce((x, y) => x + y, 0)

console.log(tripleScore)

module.exports = Scrabble
