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

  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i).toLowerCase()

    if (scores[letter] !== undefined) {
      sum += scores[letter] * multiplier
    } else if (letter === '[') {
      if (letter[i] + 1 === ']') {
        multiplier = multiplier * 3
      } else sum = 0
    } else if (letter === '{') {
      if (letter[i] + 1 === '}') {
        multiplier = multiplier * 2
      } else sum = 0
    }
  }
  return sum
}

console.log(scrabble('OXYPHENBUTAZONE'))
console.log(scrabble('{b}'))

module.exports = scrabble
