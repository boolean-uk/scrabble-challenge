const LETTER_SCORES = {
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

const INCORRECT_TOKENS = ['|', '(', ')'] // I was happy just ignoring them and scoring dog without giving 0 :(

const MULTIPLE = 1

const MULTIPLIER_USAGE = {
  '{': 0,
  '}': 0,
  '[': 0,
  ']': 0
}

const SCORE_MULTIPLIER = {
  '{': 2,
  '}': 1 / 2,
  '[': 3,
  ']': 1 / 3
}

const VALID_SCORE = true

module.exports = {
  LETTER_SCORES,
  MULTIPLE,
  MULTIPLIER_USAGE,
  SCORE_MULTIPLIER,
  INCORRECT_TOKENS,
  VALID_SCORE
}
