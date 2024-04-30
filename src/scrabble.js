const modifiers = ['{', '}', '[', ']']
let totalPoints
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

function scrabble(input) {
  totalPoints = 0

  if (typeof input !== 'string') {
    return totalPoints
  }

  if (modifiers.some((mod) => input.includes(mod))) {
    square(input)
    bracket(input)
  } else if (input.includes('|')) {
    totalPoints = 0
  } else {
    tally(input, 1)
  }
  return totalPoints
}

function tally(string, multiplier) {
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

function square(input) {
  if (input.includes('[')) {
    if (input.includes(']')) {
      const substring = input.slice(input.indexOf('[') + 1, input.indexOf(']'))
      tally(substring, 3)
      if (input.includes('{' && '}')) {
        tally(substring, 1)
        const bracketstring = input
          .slice(input.indexOf('{'), input.indexOf('}'))
          .toLowerCase()
        tally(bracketstring, 2)
      } else {
        const rest = input.replace(substring, '')
        tally(rest, 1)
      }
    }
  }
}

function bracket(input) {
  if (!input.includes('[')) {
    if (input.includes('{')) {
      if (input.includes('}')) {
        const substring = input.slice(
          input.indexOf('{') + 1,
          input.indexOf('}')
        )
        tally(substring, 2)
        const rest = input.replace(substring, '')
        tally(rest, 1)
        if (input.indexOf('}') < input.lastIndexOf('}')) {
          const substring = input.slice(input.indexOf('}') + 3)
          tally(substring, 1)
        }
      } else {
        return totalPoints
      }
    }
  }
}

module.exports = scrabble
