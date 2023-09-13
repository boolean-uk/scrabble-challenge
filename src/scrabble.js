const { LETTERSCORES, SCOREMULTIPLIER } = require('./constants')
let { MULTIPLE } = require('./constants')

const stringToArray = (word) => {
  if (typeof word === 'string') {
    return word.split('')
  } else {
    return ['']
  }
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
  if (SCOREMULTIPLIER[charUpper]) {
    return 'multiply'
  } else {
    return 'score'
  }
}

const findLetterScore = (character) => {
  const charUpper = character.toUpperCase() // repeating line - refactor?
  const result = LETTERSCORES[charUpper] * MULTIPLE
  console.log('result :>> ', result);
  if (result) {
    return result
  } else {
    return 0
  }
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
  if (numArray.length === 0) {
    return 0
  } else {
    return numArray.reduce((acc, val) => acc + val)
  }
}

const scrabble = (word) => {
  switch (typeof word === 'string') {
    case false:
    // throw TypeError(`${word} must be a string`)
  }
  const stringArray = stringToArray(word)
  console.log('stringArray :>> ', stringArray)
  const numArray = stringArrayToScore(stringArray)

  return tallyScore(numArray)
}

console.log(scrabble(null))

module.exports = {
  scrabble,
  findLetterScore,
  tallyScore,
  stringToArray,
  scoreOrMultiply,
  scoreMultiplicatorizer
}
