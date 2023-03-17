const scores = {
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

const notValid = 'Input not valid:'
const validWord = 'Great, your point is:'
// const singleValue = scores
let total = 0

function scrabble(letter) {
  if (typeof letter !== 'string') {
    console.log(`${notValid}`)
    return 0
  } else if (letter === '!' || letter === '.') {
    console.log(`${notValid}`)
    return 0
  } else if (letter === '' || letter === ' \t\n') {
    console.log(`${notValid}`)
    return 0
  } else if (letter === ',' || letter === '?') {
    console.log(`${notValid}`)
    return 0
  } else if (letter === ',' || letter === null) {
    console.log(`${notValid}`)
    return 0
  } else {
    loopLetters(letter)
    console.log(`${letter} ${validWord} ${total}`)
    return total
  }
}

function loopLetters(word) {
  if (total !== 0) {
    total = 0
  }
  for (let i = 0; i < word.length; i++) {
    word = word.toLowerCase()
    // console.log('------', scores[word[i]])
    total += scores[word[i]]
  }
  return total
}
console.log(scrabble('OXYPHENBUTAZONE'))
// console.log(scrabble('hello'))
// loopLetters('hello')

module.exports = scrabble
