// Functions File for Scrabble.js

// Object of alphabetical values for Scrabble.

const points = {
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

// Basic Score

function basicScore(string) {
  const upCasedString = string.toUpperCase()
  let total = 0
  for (let i = 0; i < upCasedString.length; i++) {
    const score = points[upCasedString[i]]
    if (score > 0) {
      total += score
    }
  }
  return total
}
// ------------------- End of basicScore Function -------------------

// Multiple Scoring Letters Checker Function

function multipleLetterChecker(string) {
  let additionalLetterPoints = 0
  const upCasedString = string.toUpperCase()

  // Checks for double or tripple letters, and updates the points.
  for (let i = 0; i < upCasedString.length; i++) {
    // Successful double letter
    if (upCasedString[i] === '{' && upCasedString[i + 2] === '}') {
      const score = points[upCasedString[i + 1]]
      if (score > 0) {
        additionalLetterPoints += score
      }
    }
    // Successful triple letter:
    if (upCasedString[i] === '[' && upCasedString[i + 2] === ']') {
      const score = points[upCasedString[i + 1]]
      if (score > 0) {
        additionalLetterPoints += score * 2
      }
    }
  }
  return additionalLetterPoints
}

// ------------------- End of multipleLetterChecker Function -------------------

// Multiple Scoring Word Checker

function multipleWordChecker(string) {
  let multiplier = 1

  // Checking for double word modifier
  if (doubleWord(string)) {
    multiplier = 2
  }

  // Checking for triple word modifier
  if (tripleWord(string)) {
    multiplier = 3
  }

  // Checking for rare double AND triple multiplier
  if (doubleAndTripleWord(string)) {
    multiplier = 6
  }
  // Checking for end letters confusing multiWord
  if (string[0] === '{' && string[2] === '}') {
    multiplier = 1
  }

  return multiplier
}

// ------------------- End of multipleWordChecker Function -------------------

// Double Word Modifier Function

function doubleWord(string) {
  if (string[0] === '{' && string[string.length - 1] === '}') {
    return true
  } else {
    return false
  }
}
// ------------------- End of doubleWord Function -------------------

// Triple Word Modifier Function

function tripleWord(string) {
  if (string[0] === '[' && string[string.length - 1] === ']') {
    return true
  } else {
    return false
  }
}

// ------------------- End of tripleWord Function -------------------

// Rare Double AND Triple Word Modifier

function doubleAndTripleWord(string) {
  if (
    string[0] === '{' &&
    string[string.length - 1] === '}' &&
    string[1] === '[' &&
    string[string.length - 2] === ']'
  ) {
    return true
  } else if (
    string[0] === '[' &&
    string[string.length - 1] === ']' &&
    string[1] === '{' &&
    string[string.length - 2] === '}'
  ) {
    return true
  }
}

// ------------------- End of doubleAndTripleWord Function -------------------v

// Token Checker, returns true if invalid are found, false if none are found!
// the RegEx is a Negated Set. So anything that isnt alphanumeric, underscore
// curly or square bracket inside the string will return true - causing the
// entire scrabble result to return 0.
function wrongTokenChecker(string) {
  return /[^\w[\]{}]/g.test(string)
}

// ------------------- End of wrongTokenChecker Function -------------------

// Multiplier Token Checker

function multiplierTokenChecker(string) {
  let invalidChecker = false
  let curlyOpenCounter = 0
  let curlyClosedCounter = 0
  let squareOpenCounter = 0
  let squareClosedCounter = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{') {
      curlyOpenCounter += 1
    } else if (string[i] === '}') {
      curlyClosedCounter += 1
    } else if (string[i] === '[') {
      squareOpenCounter += 1
    } else if (string[i] === ']') {
      squareClosedCounter += 1
    }
  }

  if ((curlyOpenCounter + curlyClosedCounter) % 2 !== 0) {
    invalidChecker = true
  }
  if ((squareOpenCounter + squareClosedCounter) % 2 !== 0) {
    invalidChecker = true
  }
  return invalidChecker
}

// ------------------- End of multiplierTokenChecker Function -------------------

// Correctly Wrapped Multiplier Checker

function correctlyWrapped(string) {
  let invalidChecker = false
  if (string[0] === '{' && string[string.length - 1] !== '}') {
    invalidChecker = true
  } else if (string[0] === '[' && string[string.length - 1] !== ']') {
    invalidChecker = true
  }
  return invalidChecker
}

// ------------------- End of correctlyWrapped Function -------------------

// Invalid Checker - Master Function! If any are true, it will return true.

function invalidCheckerMaster(string) {
  let invalidChecker = false
  if (correctlyWrapped(string)) {
    invalidChecker = true
  } else if (multiplierTokenChecker(string)) {
    invalidChecker = true
  } else if (wrongTokenChecker(string)) {
    invalidChecker = true
  }

  return invalidChecker
}

// ------------------- End of invalidCheckerMaster Function -------------------

module.exports = {
  basicScore: basicScore,
  multipleLetterChecker: multipleLetterChecker,
  multipleWordChecker: multipleWordChecker,
  invalidCheckerMaster: invalidCheckerMaster
}
