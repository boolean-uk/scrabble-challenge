let lettersInCurlyBrackets
let lettersInSquareBrackets

function doubleScore(value) {
  value *= 2
  return value
}

// // takes in the letters extracted by detectCurlyBrackets, and returns letterValue * 3
function tripleScore(value) {
  value *= 3
  return value
}

// iterates through a string, and, if it detects brackets, returns the letters contained within
function findLettersInCurlyBrackets(word) {
  const a = word.search('{')
  const b = word.search('}')
  lettersInCurlyBrackets = word.slice(a + 1, b)
  return lettersInCurlyBrackets
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // not mine - borrowed from https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
}

// iterates through a string, and, if it detects brackets, returns the letters contained within
function findLettersInSquareBrackets(word) {
  escapeRegExp(word)
  const a = word.search(escapeRegExp('['))
  const b = word.search(escapeRegExp(']'))
  const lettersInSquareBrackets = word.slice(a + 1, b)
  return lettersInSquareBrackets
}
console.log(lettersInSquareBrackets)
console.log(findLettersInSquareBrackets('r[o]ck'))
console.log(findLettersInCurlyBrackets('guit{a}r'))

module.exports = {
  findLettersInCurlyBrackets,
  findLettersInSquareBrackets,
  doubleScore,
  tripleScore
}
