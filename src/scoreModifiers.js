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
  const a = word.search('{')
  const b = word.search('}')
  lettersInCurlyBrackets = word.slice(a + 1, b)
  return lettersInCurlyBrackets
}

function findLettersInSquareBrackets(word) {
  escapeRegExp(word)
  const a = word.search(escapeRegExp('['))
  const b = word.search(escapeRegExp(']'))
  const lettersInSquareBrackets = word.slice(a + 1, b)
  return lettersInSquareBrackets
}
console.log(lettersInSquareBrackets)
console.log(lettersInCurlyBrackets)

module.exports = {
  findLettersInCurlyBrackets,
  findLettersInSquareBrackets,
  doubleScore,
  tripleScore
}
