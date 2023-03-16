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
const singleValue = scores

function scrabble(letter) {
  if (typeof letter !== 'string') {
    return `${notValid} 0`
  } else if (letter === '!' || letter === '.') {
    return `${notValid} 0`
  } else if (letter === ' ' || letter === '\t\n') {
    return `${notValid} 0`
  } else if (letter === ',' || letter === '?') {
    return `${notValid} 0`
  } else if (letter === ',' || letter === null) {
    return `${notValid} 0`
  } else {
    return `${validWord} ${singleValue}`
  }
}

function loopLetters(word) {
  for (let i = 0; i <= word.length; i++) {
    word.toLoweCase()
    // let score = 0 // console.log(word[i])
    //  score += .charAt(i).toLowerCase()
    // score += scores[word[i]]
    console.log(scores[word[i]])
  }
}

console.log('--', loopLetters('Daniele'))

console.log(scrabble())

module.exports = scrabble
