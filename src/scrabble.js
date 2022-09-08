const scoreDict = {
  score0: [' ', '\t', '\n'],
  score1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  score2: ['D', 'G'],
  score3: ['B', 'C', 'M', 'P'],
  score4: ['F', 'H', 'V', 'W', 'Y'],
  score5: ['K'],
  score8: ['J', 'X'],
  score10: ['Q', 'Z']
}

function scrabble(string) {
  // Verify if the string is: not empty; not a string
  if (!stringValid(string)) {
    return 0
  }

  string = string.toUpperCase()
  let score = 0

  for (const char of string.split('')) {
    // DEBUG CODE
    // eslint-disable-next-line prettier/prettier
    if (showDebug) {console.log(`Checking char ${char} now...`)}

    score += giveScore(char)
  }

  return score
}

function stringValid(string) {
  // Check if the parsed string has the desirable atribbutes
  if (typeof string !== 'string' || string.length === 0) {
    return false
  } else return true
}

function giveScore(char) {
  let charScore = 0

  // For every Key inside the ScoreDict, check the Key's value
  for (const key of Object.keys(scoreDict)) {
    // DEBUG CODE
    // eslint-disable-next-line prettier/prettier
    if (showDebug) {console.log(`- Checking key ${key}..`)}

    // If the Key's Array includes the Character parsed, give score
    if (scoreDict[key].includes(char)) {
      const givenScore = Number(key.substring('score'.length))
      charScore += givenScore // Gets the Score Number

      // DEBUG CODE
      // eslint-disable-next-line prettier/prettier
      if (showDebug) { console.log(`- - ${char} included in ${key}, given score is ${givenScore}\n`)}

      break // Don't go any further than that
    } else {
      // DEBUG CODE
      if (showDebug) {
        console.log(`- - ${key} does not include ${char} as it's value.`)
      }
    }
  }

  return charScore
}

const showDebug = false
console.log(scrabble('Luciano Simoni'))

module.exports = scrabble
