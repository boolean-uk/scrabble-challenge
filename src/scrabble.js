/* [^\{\}] */
/* [^\[\]] */
let doubleWord = false
let doubleLetterRef = []
let tripleWord = false
let tripleLetterRef = []
let points = 0
const commonLetters = [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], ['D', 'G'], ['B', 'C', 'M', 'P'], ['F', 'H', 'V', 'W', 'Y'], ['K']]
const rareLetters = [['J', 'X'], ['Q', 'Z']]
const double = /\{[A-Z{}[\]]*\}/g
const triple = /\[[A-Z{}[\]]*\]/g

function noInput (type) {
  return type === null
}

function checkDouble (str, arr) {
  return arr.includes(str)
}

function checkTriple (str, arr) {
  return arr.includes(str)
}

function resetWordMultipliers () {
  doubleWord = false
  tripleWord = false
}

function resetLetterReferences () {
  doubleLetterRef = []
  tripleLetterRef = []
}

function logMultipliers (str) {
  logDoubles(str)
  logTriples(str)
}

function logDoubles (str) {
  if (double.test(str)) {
    doubleLetterRef = str.match(double)
    doubleWord = checkDouble(str, str.match(double))
  }
}

function logTriples (str) {
  if (triple.test(str)) {
    tripleLetterRef = str.match(triple)
    tripleWord = checkTriple(str, str.match(triple))
  }
}

function parseWord (str) {
  resetWordMultipliers()
  logMultipliers(str)
  return stringToArray(str)
}

function stringToArray (str) {
  const arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i).toUpperCase())
  }
  return arr
}

function resetPoints () {
  points = 0
}

function scoreWord (arr) {
  resetPoints()
  for (let i = 0; i < arr.length; i++) {
    scoreLetter(arr[i])
  }
  resetLetterReferences()
  scrabbleWord()
}

function scrabbleWord () {
  if (doubleWord) {
    points *= 2
  }
  if (tripleWord) {
    points *= 3
  }
}

function scoreCommonLetter (element) {
  for (let i = 0; i < 5; i++) {
    if (commonLetters[i].includes(element)) {
      scrabbleLetter(element, i + 1)
    }
  }
}

function scoreRareLetter (element) {
  for (let i = 0; i < 2; i++) {
    if (rareLetters[i].includes(element)) {
      scrabbleLetter(element, (i + 4) * 2)
    }
  }
}

function scrabbleLetter (element, pts) {
  points += checkDouble(`{${element}}`, doubleLetterRef)
    ? pts * 2
    : checkTriple(`[${element}]`, tripleLetterRef)
      ? pts * 3
      : pts
}

function scoreLetter (element) {
  scoreCommonLetter(element)
  scoreRareLetter(element)
}

class Scrabble {
  constructor (str) {
    this.str = str
  }

  score () {
    if (noInput(this.str)) {
      points = 0
    } else {
      const str = this.str.toUpperCase()
      scoreWord(parseWord(str))
    }
    return points
  }
}
module.exports = Scrabble
