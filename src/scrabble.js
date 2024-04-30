const points = {
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

let totalPoints = 0

function scrabble(input) {
  console.log(input)
  totalPoints = 0

  if () {
      if (input.includes('{')) {
        if (input.includes('}')) {
          const startIndex = input.indexOf('{')
          const endIndex = input.indexOf('}')
          const substring = input.slice(startIndex + 1, endIndex)
          tally(substring, 2)
          console.log('{}: ', totalPoints)
        } else {
          return totalPoints
        }
      }
      if (input.includes('[')) {
        if (input.includes(']')) {
          const startIndex = input.indexOf('[')
          const endIndex = input.indexOf(']')
          const substring = input.slice(startIndex + 1, endIndex)
          tally(substring, 3)
          console.log('[]: ', totalPoints)
        } else {
          return totalPoints
        }
      }
  }

  tally(input, 1)
  console.log('Final: ', totalPoints)

  return totalPoints
}

function tally(string, multiplier) {
  if (typeof string !== 'string') {
    return totalPoints
  }
  const input = string.toLowerCase()
  for (let i = 0; i <= input.length; i++) {
    const key = points[input[i]]
    if (key > 1) {
      totalPoints += key * multiplier
    } else if (key === 1) {
      totalPoints += multiplier
    }
  }
}

// console.log(scrabble(' \t\n'))
// console.log(scrabble(null))
// console.log(scrabble('a'))
// console.log(scrabble('f'))
// console.log(scrabble('street'))
// console.log(scrabble('quirky'))
// console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
