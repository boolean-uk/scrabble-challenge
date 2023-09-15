let lettersInCurlyBrackets
let lettersInSquareBrackets

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function doubleScore(value) {
  value *= 2
  return value
}

function tripleScore(value) {
  value *= 3
  return value
}

// TODO: 1. use .slice() to remove the {letter}
// TODO: 2. run findLettersInCurlyBrackets again
// TODO: 3. repeat steps 1. and 2. until there are no {} left
// TODO: apply 1-3 to letters in [] as well

function findLettersInCurlyBrackets(word) {
  const a = word.search(escapeRegExp('{'))
  const b = word.search(escapeRegExp('}'))
  if (a < 0 && b < 0) {
    return
  } // this is to prevent .search() from returning -1 when the string it searches for is not found
  if (a < 0 || b < 0) {
    return 0
  }
  lettersInCurlyBrackets = word.slice(a + 1, b)
  return lettersInCurlyBrackets.toLowerCase()
}

function findLettersInSquareBrackets(word) {
  escapeRegExp(word)
  const a = word.search(escapeRegExp('['))
  const b = word.search(escapeRegExp(']'))
  if (a < 0 && b < 0) {
    return
  }
  if (a < 0 || b < 0) {
    return 0
  } // this is to prevent .search() from returning -1 when the string it searches for is not found
  lettersInSquareBrackets = word.slice(a + 1, b)
  return lettersInSquareBrackets.toLowerCase()
}

module.exports = {
  findLettersInCurlyBrackets,
  findLettersInSquareBrackets,
  doubleScore,
  tripleScore
}
