let boolean = true
let points = 0
const commonLetters = [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], ['D', 'G'], ['B', 'C', 'M', 'P'], ['F', 'H', 'V', 'W', 'Y'], ['K']]
const rareLetters = [['J', 'X'], ['Q', 'Z']]

function noInput (type) {
  type === null
    ? boolean = true
    : boolean = false
  return boolean
}

function parseWord (str) {
  const arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i).toUpperCase())
  } return arr
}

function resetPoints () {
  points = 0
}

function scoreWord (arr) {
  resetPoints()
  for (let i = 0; i < arr.length; i++) {
    scoreLetter(arr[i])
  }
  return points
}

function scoreLetter (element) {
  for (let i = 0; i < 5; i++) {
    if (commonLetters[i].includes(element)) {
      points += i + 1
    }
  }
  for (let i = 0; i < 2; i++) {
    if (rareLetters[i].includes(element)) {
      points += (i + 4) * 2
    }
  }
}

class Scrabble {
  constructor (str) {
    this.str = str
  }

  // Write your implementation here
  score () {
    if (noInput(this.str)) {
      points = 0
    } else scoreWord(parseWord(this.str))
    return points
  }
}
module.exports = Scrabble
