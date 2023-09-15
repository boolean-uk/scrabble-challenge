const scores = {
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
  z: 10
}

function scrabble(word) {
  if (typeof word !== 'string') {
    return 0
  }

  let sum = 0
  let multiplier = 1

  for (let x = 0; x < word.length; x++) {
    const letter = word.charAt(x).toLowerCase()

    if (scores[letter] !== undefined) {
      sum += scores[letter] * multiplier
    } else if (letter === '[') {
      if (squareBracketChecker(word, x) === true) {
        multiplier = multiplier * 3
      } else sum = 0
    } else if (letter === '{') {
      if (bracketChecker(word, x) === true) {
        multiplier = multiplier * 2
      } else sum = 0
    }
  }
  return sum
}

function squareBracketChecker(word, x) {
  let check = false
  for (let i = x + 1; i < word.length; i++) {
    if (word[i] === ']') {
      check = true
    }
  }
  return check
}

function bracketChecker(word, x) {
  let check = false
  for (let i = x + 1; i < word.length; i++) {
    if (word[i] === '}') {
      check = true
    }
  }
  return check
}

console.log(scrabble('{OXYPHENBUTAZONE}'))
console.log(scrabble('{b}'))

module.exports = scrabble
