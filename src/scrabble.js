const {
  basicScore,
  multipleLetterChecker,
  multipleWordChecker,
  invalidCheckerMaster
} = require(`./functions.js`)

// Main Scrabble Function

function scrabble(string) {
  let result = 0
  // Checking for null in string
  if (string === null) {
    return result
  }
  // Adds the basic score to result.
  result = basicScore(string)
  // Adds the double and tripe letter scores to the result.
  result += multipleLetterChecker(string)
  // multiplies the result by 1, 2, or 3 for multiple word score.
  result *= multipleWordChecker(string)
  // Checks if any of the invalid checks are true... if so returns 0.
  if (invalidCheckerMaster(string)) {
    return 0
  } else {
    return result
  }
}

module.exports = scrabble
