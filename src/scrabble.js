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
//  If checked character does not have a number value of 1 or greater, it doesn't exist in the letterValues array and is skipped

function baseScore(givenWord) {
  const lowerCaseString = givenWord.toLowerCase()
  let wordScore = 0
  for (let i = 0; i < lowerCaseString.length; i++) {
    const letterScore = letterValues[lowerCaseString[i]]
    if (letterScore >= 1) {
      wordScore += letterScore
    }
  }
  return wordScore
}

//  Check if double or triple word
//  Compares first and last characters to look for a set of brackets

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

//  Checks for two sets of brackets

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

//  Solves the edge case {d}o{g}
//  Checks if the 1st & 3rd characters are a bracket and if the last and last - 2 characters are a bracket
//  Horribliy clunky but it works!

function endLetterMultipliers(givenWord) {
  if (
    (givenWord[0] === `{` &&
      givenWord[2] === `}` &&
      givenWord[givenWord.length - 3] === `{` &&
      givenWord[givenWord.length - 1] === `}`) ||
    (givenWord[0] === `[` &&
      givenWord[2] === `]` &&
      givenWord[givenWord.length - 3] === `[` &&
      givenWord[givenWord.length - 1] === `]`) ||
    (givenWord[0] === `[` &&
      givenWord[2] === `]` &&
      givenWord[givenWord.length - 3] === `{` &&
      givenWord[givenWord.length - 1] === `}`) ||
    (givenWord[0] === `{` &&
      givenWord[2] === `}` &&
      givenWord[givenWord.length - 3] === `[` &&
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

  if (endLetterMultipliers(givenWord)) {
    multiplier = 1
  }

  return multiplier
}

//  Check for double & triple letters
//  Compares the i and i+2 characters to look for brackets with one character in between
//  Adds 1 or 2 times the letter value if brackets are found

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

//  Check for incomplete sets of brackets
//  Counts number of open and close brackets
//  If open does not equal close there must be an incomplete set of brackets

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

//  Adds together the base word score, any additional points from double/triple letters
//  and multiplies everything by the word multiplier
//  If any of the invalid input checks fail it exits at that point

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
