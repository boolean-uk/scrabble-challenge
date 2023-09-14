// Welcome to my scrabble function - It'll calculate those words for you in scrabble points; how exciting.
const scores = {
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

// console.log(scrabble("[hi]"))

// Main function - checks the input is a string then sends the parameter value to the calculator function.
function scrabble(word) {
  if (typeof word === 'string') {
    return calculator(word)
  } else {
    return 0
  }
}

// Responsable for working out the total score
function calculator(word) {
  let score = 0
  let multiplier = 1
  // Indexs through each letter
  for (let x = 0; x < word.length; x++) {
    const letter = word.charAt(x).toUpperCase()

    if (scores[letter] !== undefined) {
      score += scores[letter] * multiplier
    } else if (letter === '[') {
      if (squareBracketChecker(word, x) === true) {
        multiplier = multiplier * 3
      } else {
        score = 0
        break
      }
    } else if (letter === '{') {
      if (bracketChecker(word, x) === true) {
        multiplier = multiplier * 2
      } else {
        score = 0
        break
      }
    } else if (letter === '}') {
      if (bChecker(word, x) === true) {
        multiplier = multiplier / 2
      } else {
        score = 0
        break
      }
    } else if (letter === ']') {
      if (sbChecker(word, x) === true) {
        multiplier = multiplier / 3
      } else {
        score = 0
        break
      }
    } else {
      score = 0
      break
    }
  }
  return score
}

// The functions below are only called when checking an inputted word has valid bracket use
function squareBracketChecker(word, x) {
  let check = false
  for (let i = x + 1; i < word.length; i++) {
    if (word[i] === ']') {
      check = true
    }
  }
  return check
}

function bracketChecker(word, x) {
  let check = false
  for (let i = x + 1; i < word.length; i++) {
    if (word[i] === '}') {
      check = true
    }
  }
  return check
}

function sbChecker(word, x) {
  let check = false
  for (let i = x; i >= 0; i--) {
    if (word[i] === '[') {
      check = true
    }
  }
  return check
}

function bChecker(word, x) {
  let check = false
  for (let i = x; i >= 0; i--) {
    if (word[i] === '{') {
      check = true
    }
  }
  return check
}

module.exports = scrabble
