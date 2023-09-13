const { LETTER_SCORES, INCORRECT_TOKENS } = require('./constants')
let {
  MULTIPLE,
  VALID_SCORE,
  MULTIPLIER_USAGE,
  SCORE_MULTIPLIER
} = require('./constants')

const stringToArray = (word) => {
  if (typeof word === 'string') {
    return word.split('')
  } else {
    return ['']
  }
}

const stringArrayToScore = (stringArray) => {
  // FIXME: resolve eslint error below
  let numArray = stringArray.map((val) => {
    switch (scoreOrMultiply(val)) {
      case 'score':
        return findLetterScore(val)
      case 'multiply':
        MULTIPLE = scoreMultiplicatorizer(val)
    }
  })
  console.log('numArray before :>> ', numArray)
  numArray = numArray.filter((val) => !(val === undefined))
  console.log('numArray after :>> ', numArray)
  return numArray
}

const scoreOrMultiply = (character) => {
  edgeCasesIDisagreeWith(character)
  logMultiplierUsage(character)
  const charUpper = character.toUpperCase() // FIXME: repeating line - refactor?
  if (SCORE_MULTIPLIER[charUpper]) {
    return 'multiply'
  } else {
    return 'score'
  }
}

const findLetterScore = (character) => {
  const charUpper = character.toUpperCase() // FIXME: repeating line - refactor?
  const result = LETTER_SCORES[charUpper] * MULTIPLE
  if (result) {
    return result
  } else {
    return 0
  }
}

const scoreMultiplicatorizer = (character) => {
  const multiplier = SCORE_MULTIPLIER[character]
  if (multiplier) {
    return MULTIPLE * multiplier
  } else {
    return MULTIPLE
  }
}

const logMultiplierUsage = (character) => {
  const usageKeys = Object.keys(MULTIPLIER_USAGE)
  if (usageKeys.includes(character)) {
    MULTIPLIER_USAGE[character]++
  }
}

const edgeCasesIDisagreeWith = (character) => {
  if (INCORRECT_TOKENS.includes(character)) {
    VALID_SCORE = false
  }
}

const tallyScore = (numArray) => {
  if (numArray.length === 0) {
    return 0
  } else {
    return numArray.reduce((acc, val) => acc + val)
  }
}

const resetConstants = () => {
  MULTIPLE = 1

  MULTIPLIER_USAGE = {
    '{': 0,
    '}': 0,
    '[': 0,
    ']': 0
  }

  SCORE_MULTIPLIER = {
    '{': 2,
    '}': 1 / 2,
    '[': 3,
    ']': 1 / 3
  }

  VALID_SCORE = true
}

const scrabble = (word) => {
  const stringArray = stringToArray(word)
  const numArray = stringArrayToScore(stringArray)

  if (
    MULTIPLIER_USAGE['['] !== MULTIPLIER_USAGE[']'] || // FIXME: refactor into function?
    MULTIPLIER_USAGE['{'] !== MULTIPLIER_USAGE['}']
  ) {
    VALID_SCORE = false
  }
  if (VALID_SCORE) {
    resetConstants()
    return tallyScore(numArray)
  } else {
    resetConstants()
    return 0
  }
}

// TODO:
// [ ] Move functions into separate file?
// [ ] Fix test(s) in `function.spec.js` messing up `npm test`

module.exports = {
  scrabble,
  findLetterScore,
  tallyScore,
  stringToArray,
  scoreOrMultiply,
  scoreMultiplicatorizer
}
