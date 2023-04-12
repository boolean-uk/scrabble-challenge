const scoreboard = new Map()
scoreboard.set('A', 1)
scoreboard.set('B', 3)
scoreboard.set('C', 3)
scoreboard.set('D', 2)
scoreboard.set('E', 1)
scoreboard.set('F', 4)
scoreboard.set('G', 2)
scoreboard.set('H', 4)
scoreboard.set('I', 1)
scoreboard.set('J', 8)
scoreboard.set('K', 5)
scoreboard.set('L', 1)
scoreboard.set('M', 3)
scoreboard.set('N', 1)
scoreboard.set('O', 1)
scoreboard.set('P', 3)
scoreboard.set('Q', 10)
scoreboard.set('R', 1)
scoreboard.set('S', 1)
scoreboard.set('T', 1)
scoreboard.set('U', 1)
scoreboard.set('V', 4)
scoreboard.set('W', 4)
scoreboard.set('X', 8)
scoreboard.set('Y', 4)
scoreboard.set('Z', 10)

const specialChars = ['{', '}', '[', ']', '*', '*']
const validChars = [...scoreboard.keys(), ...specialChars]

function stringToBeReplaced(string, opening, closing) {
  const start = string.indexOf(opening)
  const end = string.indexOf(closing, start + 1)

  const stringWithoutSpecialChar = string.substring(start + 1, end) // end is exclusive
  const stringWithSpecialChar = string.substring(start, end + 1)

  return {
    exists: start !== -1 && end !== -1,
    withSpecialChar: stringWithSpecialChar,
    withoutSpecialChar: stringWithoutSpecialChar
  }
}

function stringWithReplacedSubstringNTimes(
  string,
  targetString,
  sourceString,
  nTimes
) {
  return string.replace(targetString, sourceString.repeat(nTimes))
}

function stringWithReplacedAsterisk(string) {
  const targetString = stringToBeReplaced(string, '*', '*')

  if (targetString.exists) {
    return stringWithReplacedAsterisk(
      stringWithReplacedSubstringNTimes(
        string,
        targetString.withSpecialChar,
        targetString.withoutSpecialChar,
        5
      )
    )
  }

  return string
}

function stringWithReplacedCurlyBrackets(string) {
  const targetString = stringToBeReplaced(string, '{', '}')

  if (targetString.exists) {
    return stringWithReplacedCurlyBrackets(
      stringWithReplacedSubstringNTimes(
        string,
        targetString.withSpecialChar,
        targetString.withoutSpecialChar,
        2
      )
    )
  }

  return string
}

function stringWithReplacedSqaureBrackets(string) {
  const targetString = stringToBeReplaced(string, '[', ']')

  if (targetString.exists) {
    return stringWithReplacedSqaureBrackets(
      stringWithReplacedSubstringNTimes(
        string,
        targetString.withSpecialChar,
        targetString.withoutSpecialChar,
        3
      )
    )
  }

  return string
}

function stringContainsWronglyPlacedSpeciaChars(string, specialChar) {
  const firstAppearance = string.indexOf(specialChar.openingChar)
  const secondAppearance = string.indexOf(
    specialChar.closingChar,
    firstAppearance + 1
  )

  if (firstAppearance === -1 && secondAppearance === -1) return false

  // only first curly bracket exists
  if (firstAppearance !== -1 && secondAppearance === -1) return true

  // only second curly bracket exists
  if (firstAppearance === -1 && secondAppearance !== -1) return true

  // both curly brackets exist, but in wrong order }{
  if (firstAppearance > secondAppearance) return true

  const StringWithRemovedSpecChar = string
    .replace(specialChar.openingChar, '')
    .replace(specialChar.closingChar, '')

  return stringContainsWronglyPlacedSpeciaChars(
    StringWithRemovedSpecChar,
    specialChar
  )
}

function stringContainsInvalidCharacter(string) {
  for (let i = 0; i < specialChars.length; i += 2) {
    if (
      stringContainsWronglyPlacedSpeciaChars(string, {
        openingChar: specialChars[i],
        closingChar: specialChars[i + 1]
      })
    ) {
      return true
    }
  }

  if ([...string].filter((c) => !validChars.includes(c)).length !== 0)
    return true

  return false
}

function convertedString(string) {
  const s = string.toUpperCase()

  if (stringContainsInvalidCharacter(s)) return ''

  return stringWithReplacedAsterisk(
    stringWithReplacedCurlyBrackets(stringWithReplacedSqaureBrackets(s))
  )
}

function letterScore(letter) {
  return scoreboard.get(letter) || 0
}

function scrabble(string) {
  if (!string) return 0

  let score = 0

  const cString = convertedString(string)

  for (const c of cString) {
    score += letterScore(c)
  }

  return score
}

module.exports = scrabble
