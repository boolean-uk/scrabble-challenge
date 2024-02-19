const scores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
}

const brackets = { '{': 2, '[': 3, ']': 3, '}': 2 }

function increaseMultipler(multiplier, value) {
  return (multiplier *= value)
}

function decreaseMultiplier(multiplier, value) {
  return (multiplier /= value)
}

function parseBracket(bracket, multiplier) {
  switch (bracket) {
    case '{':
      return increaseMultipler(multiplier, 2)
    case '[':
      return increaseMultipler(multiplier, 3)
    case '}':
      return decreaseMultiplier(multiplier, 2)
    case ']':
      return decreaseMultiplier(multiplier, 3)
  }
}

function scrabble(word) {
  if (word === null || word === '') {
    return 0
  }

  word = word.trim().toUpperCase()
  let sum = 0
  let multiplier = 1

  for (let i = 0; i < word.length; i++) {
    if (word[i] in brackets) {
      multiplier = parseBracket(word[i], multiplier)
      continue
    }

    if (!(word[i] in scores)) {
      return 0
    }
    sum += scores[word[i]] * multiplier
  }

  if (multiplier !== 1) {
    return 0
  }

  return sum
}

module.exports = scrabble
