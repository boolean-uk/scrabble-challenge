const letterValues = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

// New guard clause to check if the input is correct
function scrabble(word) {
  if (typeof word === 'string') {
    return scoreCalculator(word)
  } else {
    return 0
  }
}

// restructuring from arrow functions to regular functions to gain clarity on some of the harder arguments

function scoreCalculator(word) {
  let initialScore = 0
  let multiplier = 1
  for (let idx = 0; idx < word.length; idx++) {
    const letter = word.charAt(idx).toUpperCase()

    if (letterValues[letter] !== undefined) {
      initialScore += letterValues[letter] * multiplier
    } else if (letter === '{') {
      if (Checker1(word, idx) === true) {
        multiplier = multiplier * 2
      } else {
        initialScore = 0
        break
      }
    } else if (letter === '[') {
      if (Checker1(word, idx) === true) {
        multiplier = multiplier * 3
      } else {
        initialScore = 0
        break
      }
    } else if (letter === '}') {
      if (Checker2(word, idx) === true) {
        multiplier = multiplier / 2
      } else {
        initialScore = 0
        break
      }
    } else if (letter === ']') {
      if (Checker2(word, idx) === true) {
        multiplier = multiplier / 3
      } else {
        initialScore = 0
        break
      }
    } else {
      initialScore = 0
      break
    }
  }
  return initialScore
}

function Checker1(word, idx) {
  let check = false
  for (let i = idx + 1; i < word.length; i++) {
    if (word[i] === '}' || word[i] === ']') {
      check = true
    }
  }
  return check
}

function Checker2(word, idx) {
  let check = false
  for (let i = idx; i >= 0; i--) {
    if (word[i] === '{' || word[i] === '[') {
      check = true
    }
  }
  return check
}

module.exports = scrabble
