function scrabble(word) {
  if (typeof word === 'string') {
    const wordUpper = word.toUpperCase()
    const validWord = validCheck(wordUpper)

    if (validWord === true) {
      const score = scoreCalculator(wordUpper)

      return score
    }
  }

  return 0
}

// Checks the word is valid
function validCheck(word) {
  const validSymbols = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '{',
    '}',
    '[',
    ']'
  ]
  let validWord = true
  let validDoubleMultiplier = true
  let validTripleMultiplier = true

  for (let i = 0; i < word.length; i++) {
    const valid = validSymbols.includes(word[i])
    if (valid === false) {
      validWord = false
    }
    // add checks for bracket positions
    if (word[i] === '[' && validTripleMultiplier === false) {
      return false
    } else if (word[i] === '[' && validTripleMultiplier === true) {
      validTripleMultiplier = false
    }

    if (word[i] === '{' && validDoubleMultiplier === false) {
      return false
    } else if (word[i] === '{' && validDoubleMultiplier === true) {
      validDoubleMultiplier = false
    }

    if (word[i] === ']' && validTripleMultiplier === true) {
      return false
    } else if (word[i] === ']' && validTripleMultiplier === false) {
      validTripleMultiplier = true
    }

    if (word[i] === '}' && validDoubleMultiplier === true) {
      return false
    } else if (word[i] === '}' && validDoubleMultiplier === false) {
      validDoubleMultiplier = true
    }
  }

  if (
    validWord === true &&
    validDoubleMultiplier === true &&
    validTripleMultiplier === true
  ) {
    return true
  } else {
    return false
  }
}

// Calulates the score of the word and returns the total
function scoreCalculator(word) {
  const scoreObject = {
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
  let score = 0
  let multiplier = 1

  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{') {
      multiplier = multiplier * 2
    } else if (word[i] === '}') {
      multiplier = multiplier / 2
    } else if (word[i] === '[') {
      multiplier = multiplier * 3
    } else if (word[i] === ']') {
      multiplier = multiplier / 3
    } else {
      score += scoreObject[word[i]] * multiplier
    }
  }

  return score
}

// console.log(scrabble("[hi]"))

// test for word check - should return false at first
// console.log(validCheck("A{B}"), "true")
// console.log(validCheck("A{B"), "false")
// console.log(validCheck("A{{B}"), "false")
// console.log(validCheck("A[B]"), "true")
// console.log(validCheck("A[B}"), "false")
// console.log(validCheck("A{B]"), "false")
// console.log(validCheck("[A{B}]"), "true")

module.exports = scrabble
