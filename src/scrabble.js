'use-strict'
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
function firstScore(generatedWord) {
  const lowerCaseString = generatedWord.toLowerCase()
  let eachWordScore = 0
  for (let i = 0; i < lowerCaseString.length; i++) {
    const letterScore = letterValues[lowerCaseString[i]]
    if (letterScore >= 1) {
      eachWordScore += letterScore
    }
  }
  return eachWordScore
}

function doubleWord(generatedWord) {
  if (
    generatedWord[0] === `{` &&
    generatedWord[generatedWord.length - 1] === `}`
  ) {
    return true
  } else {
    return false
  }
}
function tripleWord(generatedWord) {
  if (
    generatedWord[0] === `[` &&
    generatedWord[generatedWord.length - 1] === `]`
  )
    return true
  else return false
}
function isDoubleAndTripleWord(generatedWord) {
  if (
    (generatedWord[0] === `{` &&
      generatedWord[generatedWord.length - 1] === `}` &&
      generatedWord[1] === `[` &&
      generatedWord[generatedWord.length - 2] === `]`) ||
    (generatedWord[1] === `{` &&
      generatedWord[generatedWord.length - 2] === `}` &&
      generatedWord[0] === `[` &&
      generatedWord[generatedWord.length - 1] === `]`)
  ) {
    return true
  } else {
    return false
  }
}
function endLetterMultipliers(generatedWord) {
  if (
    (generatedWord[0] === `{` &&
      generatedWord[2] === `}` &&
      generatedWord[generatedWord.length - 3] === `{` &&
      generatedWord[generatedWord.length - 1] === `}`) ||
    (generatedWord[0] === `[` &&
      generatedWord[2] === `]` &&
      generatedWord[generatedWord.length - 3] === `[` &&
      generatedWord[generatedWord.length - 1] === `]`) ||
    (generatedWord[0] === `[` &&
      generatedWord[2] === `]` &&
      generatedWord[generatedWord.length - 3] === `{` &&
      generatedWord[generatedWord.length - 1] === `}`) ||
    (generatedWord[0] === `{` &&
      generatedWord[2] === `}` &&
      generatedWord[generatedWord.length - 3] === `[` &&
      generatedWord[generatedWord.length - 1] === `]`)
  ) {
    return true
  } else {
    return false
  }
}
function wordMultiplier(generatedWord) {
  let multiplier = 1

  if (doubleWord(generatedWord)) {
    multiplier = 2
  }

  if (tripleWord(generatedWord)) {
    multiplier = 3
  }

  if (isDoubleAndTripleWord(generatedWord)) {
    multiplier = 6
  }

  if (endLetterMultipliers(generatedWord)) {
    multiplier = 1
  }

  return multiplier
}
function letterMultiplier(generatedWord) {
  let additionalLetterScore = 0
  const lowerCaseString = generatedWord.toLowerCase()
  for (let i = 0; i < generatedWord.length; i++) {
    if (generatedWord[i] === `{` && generatedWord[i + 2] === `}`) {
      additionalLetterScore += letterValues[lowerCaseString[i + 1]]
    }
  }
  for (let i = 0; i < generatedWord.length; i++) {
    if (generatedWord[i] === `[` && generatedWord[i + 2] === `]`) {
      additionalLetterScore += letterValues[lowerCaseString[i + 1]] * 2
    }
  }
  return additionalLetterScore
}
function incompleteBrackets(generatedWord) {
  let flowerBracketOpen = 0
  let flowerBracketClosed = 0
  let squareBracketOpen = 0
  let squareBracketClosed = 0
  for (let i = 0; i < generatedWord.length; i++) {
    if (generatedWord[i] === `{`) {
      flowerBracketOpen += 1
    }
    if (generatedWord[i] === `}`) {
      flowerBracketClosed += 1
    }
    if (generatedWord[i] === `[`) {
      squareBracketOpen += 1
    }
    if (generatedWord[i] === `]`) {
      squareBracketClosed += 1
    }
  }
  if (flowerBracketOpen !== flowerBracketClosed) {
    return true
  } else if (squareBracketOpen !== squareBracketClosed) {
    return true
  } else {
    return false
  }
}
function invalidCharacterCheck(generatedWord) {
  const lowerCaseString = generatedWord.toLowerCase()
  const invalidCharStored = /[^[\]{}a-z]/g.test(lowerCaseString)
  return invalidCharStored
}
function wordInvalidCase(generatedWord) {
  if (
    invalidCharacterCheck(generatedWord) ||
    incompleteBrackets(generatedWord)
  ) {
    return true
  } else {
    return false
  }
}
function scrabble(generatedWord) {
  let combineScore = 0
  if (generatedWord === null) {
    return 0
  }
  combineScore = firstScore(generatedWord)

  combineScore += letterMultiplier(generatedWord)

  combineScore *= wordMultiplier(generatedWord)

  if (wordInvalidCase(generatedWord)) {
    return 0
  } else {
    return combineScore
  }
}
module.exports = scrabble
