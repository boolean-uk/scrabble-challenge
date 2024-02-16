function scrabble(word) {
  if (typeof word !== 'string') return 0
  let multiplier = 1
  const array = word.toLowerCase().split('')
  let result = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] in value) {
      result += value[array[i]] * multiplier
      continue
    }
    if (array[i] === '{') multiplier *= 2
    else if (array[i] === '}') multiplier /= 2
    else if (array[i] === '[') multiplier *= 3
    else if (array[i] === ']') multiplier /= 3
    else return 0
  }
  if (multiplier !== 1) return 0
  return result
  // write code here
}

const value = {
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

module.exports = scrabble
