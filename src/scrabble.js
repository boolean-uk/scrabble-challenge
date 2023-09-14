const { LETTER_SCORES, INCORRECT_TOKENS } = require('./constants')
let {
  MULTIPLE,
  VALID_SCORE,
  MULTIPLIER_USAGE,
  SCORE_MULTIPLIER
} = require('./constants')

const stringToArray = (word) => {
  if (typeof word === 'string') {
    return word.toUpperCase().split('')
  } else {
    return ['']
  }
}

const stringArrayToScore = (stringArray) => {
  let numArray = stringArray.map((val) => {
    if (multiplyCheck(val)) {
      MULTIPLE = scoreMultiplicatorizer(val)
      return undefined
    } else {
      return findLetterScore(val)
    }
  })
  numArray = numArray.filter((val) => !(val === undefined))
  return numArray
}

const multiplyCheck = (character) => {
  edgeCasesIDisagreeWith(character)
  logMultiplierUsage(character)
  if (SCORE_MULTIPLIER[character]) {
    return true
  } else {
    return false
  }
}

const findLetterScore = (character) => {
  const result = LETTER_SCORES[character] * MULTIPLE
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

const validScoreChecker3000tron = () => {
  const matchingBrackets =
    MULTIPLIER_USAGE['['] === MULTIPLIER_USAGE[']'] &&
    MULTIPLIER_USAGE['{'] === MULTIPLIER_USAGE['}']

  const approvalFromTheAlmightyValidScoreChecker3000tron =
    matchingBrackets && VALID_SCORE

  resetConstants()
  return approvalFromTheAlmightyValidScoreChecker3000tron
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

  if (validScoreChecker3000tron()) {
    return tallyScore(numArray)
  } else {
    return 0
  }
}

// console.log(scrabble('{dog}'))

// TODO:
// [ ] Move functions into separate file?

module.exports = {
  scrabble,
  findLetterScore,
  tallyScore,
  stringToArray,
  multiplyCheck,
  scoreMultiplicatorizer,
  resetConstants
}
