let doubleWord = false
let doubleLetterRef = []
let tripleWord = false
let tripleLetterRef = []
let points = 0
const commonLetters = [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], ['D', 'G'], ['B', 'C', 'M', 'P'], ['F', 'H', 'V', 'W', 'Y'], ['K']]
const rareLetters = [['J', 'X'], ['Q', 'Z']]
const double = /\{[A-Z{}[\]]*\}/g
const triple = /\[[A-Z{}[\]]*\]/g

// functions called directly by Scrabble class
function noInput (type) {
  return type === null
}

function parseWord (str) {
  resetWordMultipliers()
  logMultipliers(str)
  return stringToArray(str)
}

function scoreWord (arr) {
  resetPoints()
  for (let i = 0; i < arr.length; i++) {
    scoreLetter(arr[i])
  }
  resetLetterReferences()
  scrabbleWord()
}
// functions called by parseWord
function resetWordMultipliers () {
  doubleWord = false
  tripleWord = false
}

function logMultipliers (str) {
  logDoubles(str) // see below lines 72-84, broke up this function for concision
  logTriples(str)
}

function stringToArray (str) {
  const arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i).toUpperCase())
  }
  return arr
}
// functions called by scoreWord
function resetPoints () {
  points = 0
}

function scoreLetter (element) {
  scoreCommonLetter(element) // below lines 86-100 - broke up for concision
  scoreRareLetter(element)
}

function resetLetterReferences () {
  doubleLetterRef = []
  tripleLetterRef = []
}

function scrabbleWord () {
  if (doubleWord) {
    points *= 2
  }
  if (tripleWord) {
    points *= 3
  }
}
// functions called by logMultipliers
function logDoubles (str) {
  if (double.test(str)) { // updates variables that track double status of words and letters
    doubleLetterRef = str.match(double) // double letter statuses stored by array
    doubleWord = checkDouble(str, str.match(double)) // double word status stored by boolean
  }
}

function logTriples (str) {
  if (triple.test(str)) { // same as with doubles for triples
    tripleLetterRef = str.match(triple)
    tripleWord = checkTriple(str, str.match(triple))
  }
}
// functions called by scoreLetter
function scoreCommonLetter (element) { // "common" letter scores from 1-5
  for (let i = 0; i < 5; i++) {
    if (commonLetters[i].includes(element)) {
      scrabbleLetter(element, i + 1)
    }
  }
}

function scoreRareLetter (element) {
  for (let i = 0; i < 2; i++) { // "rare" letter scores 8 and 10
    if (rareLetters[i].includes(element)) {
      scrabbleLetter(element, (i + 4) * 2)
    }
  }
}
// function called by scoreCommonLetter and scoreRareLetter
function scrabbleLetter (element, pts) {
  points += checkDouble(`{${element}}`, doubleLetterRef) // checks whether double or triple or neither and updates points accordingly
    ? pts * 2
    : checkTriple(`[${element}]`, tripleLetterRef)
      ? pts * 3
      : pts
}
// functions called by logDoubles, logTriples and scrabbleLetter
function checkDouble (str, arr) {
  return arr.includes(str) // created this pair of functions for concision, adds readability
}

function checkTriple (str, arr) {
  return arr.includes(str)
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
