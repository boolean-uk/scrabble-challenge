// Object of all the Point Values for scrabble.
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

// Main Scrabble Function

function scrabble(string) {
  let invalidChecker = false
  let result = 0
  let upCasedString = ''

  // Checking for null in string
  if (string === null) {
    return result
  } else {
    upCasedString = string.toUpperCase()
  }

  // Working out the total score for the string. Ignoring all unnecessary characters
  for (let i = 0; i < upCasedString.length; i++) {
    const score = points[upCasedString[i]]
    if (score > 0) {
      result += score
    }
  }
  // Checks how many additional points from double or triple letters,
  // within the multipleLetterChecker function, and adds to the total.
  const letterPoints = multipleLetterChecker(string)
  if (letterPoints === true) {
    invalidChecker = true
  } else if (letterPoints > 0) {
    result += letterPoints
  }

  // Checks how many additional points from double or triple word,
  // using the multipleWordChecker function, and multiples the total.
  const multiWordPoints = multipleWordChecker(string)
  if (multiWordPoints === true) {
    invalidChecker = true
  } else if (multiWordPoints > 0) {
    result *= multiWordPoints
  }

  // Checks if any wrong tokens are used in the string,
  // using the wrongTokenChecker function.
  if (wrongTokenChecker(string) === true) {
    invalidChecker = true
  }

  // Checks if any of the previous functions found anything invalid.
  // If so, returns 0. Otherwise returns the total score.
  if (invalidChecker === true) {
    return 0
  } else {
    return result
  }
}
// ------------------- End of Main scrabble Function -------------------

// Multiple Scoring Letters Checker Function
function multipleLetterChecker(string) {
  let invalidChecker = false
  let additionalLetterPoints = 0
  let upCasedString = ''
  if (string === null) {
    invalidChecker = true
  } else {
    upCasedString = string.toUpperCase()
  }

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

  if (multiplierTokenChecker(string) === true) {
    invalidChecker = true
  }

  if (invalidChecker === true) {
    return invalidChecker
  } else {
    return additionalLetterPoints
  }
}

// ------------------- End of multipleLetterChecker Function -------------------

// Multiple Scoring Word Checker
function multipleWordChecker(string) {
  let invalidChecker = false
  let multiplier = 1

  // Checking for correct word multiplier
  if (string[0] === '{' && string[string.length - 1] === '}') {
    multiplier = 2
  } else if (string[0] === '[' && string[string.length - 1] === ']') {
    multiplier = 3
  }

  // Checking for rare double AND triple multiplier
  if (
    string[0] === '{' &&
    string[string.length - 1] === '}' &&
    string[1] === '[' &&
    string[string.length - 2] === ']'
  ) {
    multiplier = 6
  } else if (
    string[0] === '[' &&
    string[string.length - 1] === ']' &&
    string[1] === '{' &&
    string[string.length - 2] === '}'
  ) {
    multiplier = 6
  }

  // Checking for end letters confusing multiWord

  if (string[0] === '{' && string[2] === '}') {
    multiplier = 1
  }

  // Checking if string is correctly wrapped
  if (string[0] === '{' && string[string.length - 1] !== '}') {
    invalidChecker = true
  } else if (string[0] === '[' && string[string.length - 1] !== ']') {
    invalidChecker = true
  }

  // Checking for incorrect amount of multiplier markers.
  if (multiplierTokenChecker(string) === true) {
    invalidChecker = true
  }

  // Returning False for invalid, or the multiplier for correct usage!
  if (invalidChecker === true) {
    return invalidChecker
  } else {
    return multiplier
  }
}

// ------------------- End of multipleWordChecker Function -------------------

// Token Checker, checking that tokens are valid!

function wrongTokenChecker(string) {
  let invalidChecker = false
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '|') {
      invalidChecker = true
    }
  }
  return invalidChecker
}

// ------------------- End of wrongTokenChecker Function -------------------

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

module.exports = scrabble
