const { LETTERSCORES, SCOREMULTIPLIER } = require('./constants')
const { MULTIPLE } = require('./constants')

const stringToArray = (wordString) => {
  return wordString.split('')
}

const findLetterScore = (character) => {
  return LETTERSCORES[character] * MULTIPLE
}

const scoreOrMultiply = (character) => {
  const charUpper = character.toUpperCase()
  if (LETTERSCORES[charUpper]) {
    return 'score'
  } else if (SCOREMULTIPLIER[charUpper]) {
    return 'multiply'
  } else {
    throw TypeError(`${character} is not a valid scoring character`)
  }
}

const tallyScore = (numArray) => {
  return numArray.reduce((acc, val) => acc + val)
}

const scoreMultiplicatorizer = (character) => {
  const multiplier = SCOREMULTIPLIER[character]
  if (multiplier) {
    return multiplier
  } else {
    return MULTIPLE
  }
}

const scrabble = () => {
  // write code here
}

module.exports = {
  scrabble,
  findLetterScore,
  tallyScore,
  stringToArray,
  scoreOrMultiply,
  scoreMultiplicatorizer
}
