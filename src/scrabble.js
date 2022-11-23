function scrabble(string) {
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
  let invalidChecker = false
  let result = 0
  let upCasedString = ''
  if (string === null) {
    return result
  } else {
    upCasedString = string.toUpperCase()
  }

  for (let i = 0; i < upCasedString.length; i++) {
    const score = points[upCasedString[i]]
    if (score > 0) {
      result = result + score
    }
  }

  const letterPoints = multipleLetterChecker(string)
  if (letterPoints === true) {
    invalidChecker = true
  } else if (letterPoints > 0) {
    result = result + letterPoints
  }

  const multiWordPoints = multipleWordChecker(string)
  if (multiWordPoints === true) {
    invalidChecker = true
  } else if (multiWordPoints > 0) {
    result = result * multiWordPoints
  }

  if (tokenChecker(string) === true) {
    invalidChecker = true
  }

  if (invalidChecker === true) {
    return 0
  } else {
    return result
  }
}

// Multiple Scoring Letters Checker
function multipleLetterChecker(string) {
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

  let invalidChecker = false
  let additionalLetterPoints = 0
  let upCasedString = ''
  if (string === null) {
    return additionalLetterPoints
  } else {
    upCasedString = string.toUpperCase()
  }

  // Invalid Checker (checking that amount of brackets is an even number)
  for (let i = 0; i < upCasedString.length; i++) {
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

    // Successful double letter
    if (upCasedString[i] === '{' && upCasedString[i + 2] === '}') {
      const score = points[upCasedString[i + 1]]
      if (score > 0) {
        additionalLetterPoints = additionalLetterPoints + score
      }
    }
    // Successful triple letter:
    if (upCasedString[i] === '[' && upCasedString[i + 2] === ']') {
      const score = points[upCasedString[i + 1]]
      if (score > 0) {
        additionalLetterPoints = additionalLetterPoints + score * 2
      }
    }
  }

  // Invalid Checker!

  if (invalidChecker === true) {
    return invalidChecker
  } else {
    return additionalLetterPoints
  }
}

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

  // Returning False for invalid, or the multiplier for correct usage!
  if (invalidChecker === true) {
    return invalidChecker
  } else {
    return multiplier
  }
}

function tokenChecker(string) {
  let invalidChecker = false
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '|') {
      invalidChecker = true
    }
  }
  return invalidChecker
}
console.log(tokenChecker(`|d|og`))

module.exports = scrabble
