const WORD_VALUES = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
}

let score = 0
let multiplier = 1

function scrabble(word) {
  score = 0

  if (word === null) {
    return 0
  }

  let ucTrimmedWord = word.toUpperCase().trim()

  const DOUBLE_WORD =
    ucTrimmedWord[0] === '{' &&
    ucTrimmedWord[ucTrimmedWord.length - 1] === '}' &&
    ucTrimmedWord[2] !== '{'

  const TRIPPLE_WORD =
    ucTrimmedWord[0] === '[' &&
    ucTrimmedWord[ucTrimmedWord.length - 1] === ']' &&
    ucTrimmedWord[2] !== ']'

  if (DOUBLE_WORD || TRIPPLE_WORD) {
    ucTrimmedWord = ucTrimmedWord.slice(1, ucTrimmedWord.length - 1)
  }

  for (let letterIndex = 0; letterIndex < ucTrimmedWord.length; letterIndex++) {
    const CURRENT_LETTER = ucTrimmedWord[letterIndex]

    if (CURRENT_LETTER === '{') {
      multiplier = 2
    }

    if (CURRENT_LETTER === '[') {
      multiplier = 3
    }

    if (CURRENT_LETTER in WORD_VALUES) {
      score += WORD_VALUES[CURRENT_LETTER] * multiplier
      multiplier = 1
    }
  }

  if (DOUBLE_WORD) {
    return score * 2
  }

  if (TRIPPLE_WORD) {
    return score * 3
  }

  return score
}

console.log(scrabble('{dog}'))

module.exports = scrabble
