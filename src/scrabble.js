const { LETTERSCORES, SCOREMULTIPLIER } = require('./constants')
let { MULTIPLE } = require('./constants')

const stringToArray = (wordString) => {
  return wordString.split('')
}

const stringArrayToScore = (stringArray) => {
  let numArray = stringArray.map((val) => {
    switch (scoreOrMultiply(val)) {
      case 'score':
        return findLetterScore(val)
      case 'multiply':
        MULTIPLE = scoreMultiplicatorizer(val)
    }
  })

  numArray = numArray.filter((val) => !(val === undefined))
  return numArray
}

const scoreOrMultiply = (character) => {
  const charUpper = character.toUpperCase() // repeating line - refactor?
  if (LETTERSCORES[charUpper]) {
    return 'score'
  } else if (SCOREMULTIPLIER[charUpper]) {
    return 'multiply'
  } else {
    throw TypeError(`${character} is not a valid scoring character`)
  }
}

const findLetterScore = (character) => {
  const charUpper = character.toUpperCase() // repeating line - refactor?
  return LETTERSCORES[charUpper] * MULTIPLE
}

const scoreMultiplicatorizer = (character) => {
  const multiplier = SCOREMULTIPLIER[character]
  if (multiplier) {
    return multiplier
  } else {
    return MULTIPLE
  }
}

const tallyScore = (numArray) => {
  return numArray.reduce((acc, val) => acc + val)
}

const scrabble = (wordString) => {
  switch (typeof wordString === 'string') {
    case false:
      throw TypeError(`${wordString} must be a string`)
  }
  const stringArray = stringToArray(wordString)

  const numArray = stringArrayToScore(stringArray)

  return tallyScore(numArray)
}

// console.log(scrabble(''));

module.exports = {
  scrabble,
  findLetterScore,
  tallyScore,
  stringToArray,
  scoreOrMultiply,
  scoreMultiplicatorizer
}
