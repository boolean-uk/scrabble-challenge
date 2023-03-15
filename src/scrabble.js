const charScores = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10
}

const findDoubleChars = (string) => {
  const matched = string.match(/\{(.*?)\}/)
  return matched
}

console.log(findDoubleChars('aaa[bb]'))

const findTripleChars = (string) => {
  const matched = string.match(/\[(.*?)\]/)
  return matched
}

const getScoreOfPlainString = (string, multiplier) => {
  let totalScore = 0
  string = string.toLowerCase()
  for (const i in string) {
    if (string[i] === ' ' || string[i] === '\t' || string[i] === '\n') {
      // console.log('oops')
    } else {
      // console.log(string[i])
      // console.log(charScores)
      // console.log(charScores[string[i]])
      totalScore += charScores[string[i]]
    }
  }
  return totalScore * multiplier
}

const stringIsValid = (string) => {
  if (typeof string !== 'string' || string === '') {
    // console.log('Please enter a valid word')
    return false
  } else if (
    (findTripleChars(string) === null && string.search(/\[|\]/) !== -1) ||
    (findDoubleChars(string) === null && string.search(/\{|\}/) !== -1)
  ) {
    return false
  } else if (string.search(/\|/) !== -1) {
    return false
  }
  return true
}

function scrabble(string) {
  if (!stringIsValid(string)) {
    return 0
  }

  let totalScore = 0
  while (findDoubleChars(string) !== null) {
    console.log(string)
    console.log(findDoubleChars(string)[0])
    totalScore += getScoreOfPlainString(findDoubleChars(string)[1], 2)
    // remove matched string from input string
    string = string.replace(findDoubleChars(string)[0], '')
  }

  while (findTripleChars(string) !== null) {
    totalScore += getScoreOfPlainString(findTripleChars(string)[1], 3)
    // remove matched string from input string
    string = string.replace(findTripleChars(string)[0], '')
  }
  totalScore += getScoreOfPlainString(string, 1)
  return totalScore
}

console.log(scrabble('[dog]'))

module.exports = scrabble
