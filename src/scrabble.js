let boolean = true
let points = 0
const one = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const two = ['D', 'G']
const three = ['B', 'C', 'M', 'P']
const four = ['F', 'H', 'V', 'W', 'Y']
const five = ['K']
const eight = ['J', 'X']
const ten = ['Q', 'Z']

function noInput (type) {
  type === null || type === ''
    ? boolean = true
    : boolean = false
  return boolean
}

function nonsenseCheck (str) {
  str.includes(' ')
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
  for (let i = 0; i <= arr.length; i++) {
    scoreLetter(arr[i])
  }
  return points
}

function scoreLetter (element) {
  if (one.includes(element)) {
    points += 1
  }
  if (two.includes(element)) {
    points += 2
  }
  if (three.includes(element)) {
    points += 3
  }
  if (four.includes(element)) {
    points += 4
  }
  if (five.includes(element)) {
    points += 5
  }
  if (eight.includes(element)) {
    points += 8
  }
  if (ten.includes(element)) {
    points += 10
  }
}
class Scrabble {
  constructor (str) {
    this.str = str
  }

  // Write your implementation here
  score () {
    if (noInput(this.str) || nonsenseCheck(this.str)) {
      points = 0
    } else scoreWord(parseWord(this.str))
    return points
  }
}
module.exports = Scrabble
