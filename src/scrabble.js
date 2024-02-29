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
  w: 4,
  v: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10
}

const brackets = {
  '{': 2,
  '}': 2,
  '[': 3,
  ']': 3
}

const increase = (multiplier, value) => {
  return (multiplier *= value)
}

const decrease = (multiplier, value) => {
  return (multiplier /= value)
}

const checkBrackets = (bracket, multiplier) => {
  if (bracket === '{') {
    return increase(multiplier, 2)
  } else if (bracket === '[') {
    return increase(multiplier, 3)
  } else if (bracket === '}') {
    return decrease(multiplier, 2)
  } else if (bracket === ']') {
    return decrease(multiplier, 3)
  }
}

const scrabble = (str) => {
  let score = 0
  let multiplier = 1
  const word = (str || '').trim().toLowerCase().split('')

  for (let i = 0; i < word.length; i++) {
    if (word[i] in brackets) {
      multiplier = checkBrackets(word[i], multiplier)
      continue
    }

    if (!(word[i] in points)) {
      return 0
    }
    score += points[word[i]] * multiplier
  }

  if (multiplier !== 1) {
    return 0
  }

  return score
}

module.exports = scrabble
