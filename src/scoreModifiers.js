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

function findLettersInCurlyBrackets(word) {
  const a = word.search(escapeRegExp('{'))
  const b = word.search(escapeRegExp('}'))
  if (a < 0 || b < 0) {
    return // this is to prevent .search() from returning -1 when the string it searches for is not found
  }
  lettersInCurlyBrackets = word.slice(a + 1, b)
  return lettersInCurlyBrackets.toLowerCase()
}

function findLettersInSquareBrackets(word) {
  escapeRegExp(word)
  const a = word.search(escapeRegExp('['))
  const b = word.search(escapeRegExp(']'))
  if (a < 0 || b < 0) {
    return
  }
  lettersInSquareBrackets = word.slice(a + 1, b)
  return lettersInSquareBrackets.toLowerCase()
}

module.exports = {
  findLettersInCurlyBrackets,
  findLettersInSquareBrackets,
  doubleScore,
  tripleScore
}
