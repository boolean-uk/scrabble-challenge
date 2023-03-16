/**
 * Functions Needed
 *  Convert string to lower case to remove case variants
 *  Check if entered word is a string
 *  --> check in base scrabble function, exit if not a string
 *  Calculate base score for string
 *  --> for loop, count up through word and total values as you go
 *  --> use a variable > 0 to just count letters that exist in our declared list
 *  Check if double word, triple word or both
 *  --> double or triple
 *      --> check first and last characters for {} or []
 *  --> double and triple
 *      --> check first/last and first+1/last-1 for {} and []
 *  --> save to multiplier variable if found
 *  Check for double & triple letters
 *  --> Search string for {} or []
 *  --> Write additional points to a variable
 *  Check for incompleted sets of brackets within string
 *  --> for loop to check for odd number of brackets
 *  Check if any non-letter or bracket characters are within string
 *  --> regex
 *
 *  BREAK EACH LITTLE STEP DOWN IN TO ITS OWN FUNCTION FOR CLARITY OF CODE
 */

const letterValues = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10
}

//  Calculates the base score of a string with no conditions applied

function baseScore(givenWord) {
  const lowerCaseString = givenWord.toLowerCase()
  let wordScore = 0
  for (let i = 0; i < lowerCaseString.length; i++) {
    const letterScore = letterValues[lowerCaseString[i]]
    if (letterScore > 0) {
      wordScore += letterScore
    }
  }
  return wordScore
}

//  Check if double or triple word

function isDoubleWord(givenWord) {
  if (givenWord[0] === `{` && givenWord[givenWord.length - 1] === `}`) {
    return true
  } else {
    return false
  }
}

function isTripleWord(givenWord) {
  if (givenWord[0] === `[` && givenWord[givenWord.length - 1] === `]`) {
    return true
  } else {
    return false
  }
}

function isDoubleAndTripleWord(givenWord) {
  if (
    (givenWord[0] === `{` &&
      givenWord[givenWord.length - 1] === `}` &&
      givenWord[1] === `[` &&
      givenWord[givenWord.length - 2] === `]`) ||
    (givenWord[1] === `{` &&
      givenWord[givenWord.length - 2] === `}` &&
      givenWord[0] === `[` &&
      givenWord[givenWord.length - 1] === `]`)
  ) {
    return true
  } else {
    return false
  }
}

//  Assign multipler variable based on true conditions of above functions

function wordMultiplier(givenWord) {
  let multiplier = 1

  if (isDoubleWord(givenWord)) {
    multiplier = 2
  }

  if (isTripleWord(givenWord)) {
    multiplier = 3
  }

  if (isDoubleAndTripleWord(givenWord)) {
    multiplier = 6
  }

  return multiplier
}

//  Check for double & triple letters

function letterMultiplier(givenWord) {
  let additionalLetterScore = 0
  const lowerCaseString = givenWord.toLowerCase()
  for (let i = 0; i < givenWord.length; i++) {
    if (givenWord[i] === `{` && givenWord[i + 2] === `}`) {
      additionalLetterScore += letterValues[lowerCaseString[i + 1]]
    }
  }
  for (let i = 0; i < givenWord.length; i++) {
    if (givenWord[i] === `[` && givenWord[i + 2] === `]`) {
      additionalLetterScore += letterValues[lowerCaseString[i + 1]] * 2
    }
  }
  return additionalLetterScore
}

// Check for incomplete sets of brackets

function incompleteBrackets(givenWord) {
  let curlyOpenCount = 0
  let curlyClosedCount = 0
  let squareOpenCount = 0
  let squareClosedCount = 0
  for (let i = 0; i < givenWord.length; i++) {
    if (givenWord[i] === `{`) {
      curlyOpenCount += 1
    }
    if (givenWord[i] === `}`) {
      curlyClosedCount += 1
    }
    if (givenWord[i] === `[`) {
      squareOpenCount += 1
    }
    if (givenWord[i] === `]`) {
      squareClosedCount += 1
    }
  }
  if (curlyOpenCount !== curlyClosedCount) {
    return true
  } else if (squareOpenCount !== squareClosedCount) {
    return true
  } else {
    return false
  }
}

//  check for any invalid characters
//  [\] checks for square brackets
//  {} checks for curly brackets
//  \a-z checks for any alphanumeric characters in the a-z range
//  ^ negates the set, returns true if any specified characters are found

function invalidCharacterCheck(givenWord) {
  const lowerCaseString = givenWord.toLowerCase()
  return /[^[\]{}a-z]/g.test(lowerCaseString)
}

//  check if input fails for invalid characters or incorrect brackets

function invalidGivenWord(givenWord) {
  if (invalidCharacterCheck(givenWord) || incompleteBrackets(givenWord)) {
    return true
  } else {
    return false
  }
}

function scrabble(givenWord) {
  let totalScore = 0
  if (givenWord === null) {
    return 0
  }
  totalScore = baseScore(givenWord)

  totalScore += letterMultiplier(givenWord)

  totalScore *= wordMultiplier(givenWord)

  if (invalidGivenWord(givenWord)) {
    return 0
  } else {
    return totalScore
  }
}

module.exports = scrabble
