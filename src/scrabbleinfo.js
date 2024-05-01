const scrabbleScores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
  '{': 0,
  '}': 0,
  '[': 0,
  ']': 0
}

const letters = Object.keys(scrabbleScores)
const scores = Object.values(scrabbleScores)
const doubleWord = /^{.+}$(?<!{.})/g
const tripleWord = /^\[.+\]$(?<!\[.\])/g

function errorDetective(word) {
  let count = 0
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === '{' ||
      word[i] === '}' ||
      word[i] === '[' ||
      word[i] === ']'
    ) {
      count += 1
    }
  }
  if (count % 2 === 1) {
    return true
  }
}

module.exports = {
  letters,
  scores,
  doubleWord,
  tripleWord,
  error: errorDetective
}
