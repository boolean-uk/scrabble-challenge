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

const validChars = [...scoreboard.keys(), '{', '}', '[', ']']

function positionOfBracketsInString(string, opening, closing) {
  const start = string.indexOf(opening)
  const end = string.indexOf(closing)

  return {
    exists: start !== -1 && end !== -1,
    start,
    end
  }
}

function stringWithReplacedSubstringNTimes(
  string,
  targetString,
  sourceString,
  nTimes
) {
  let newString = ''

  for (let i = 0; i < nTimes; i++) {
    newString += sourceString
  }

  return string.replace(targetString, newString)
}

function stringWithReplacedCurlyBrackets(string) {
  const { exists, start, end } = positionOfBracketsInString(string, '{', '}')

  if (exists) {
    const stringInBrackets = string.substring(start + 1, end) // end is exclusive
    const stringWithBrackets = string.substring(start, end + 1)

    return stringWithReplacedSubstringNTimes(
      string,
      stringWithBrackets,
      stringInBrackets,
      2
    )
  }

  return string
}

function stringWithReplacedSqaureBrackets(string) {
  const { exists, start, end } = positionOfBracketsInString(string, '[', ']')

  if (exists) {
    const stringInBrackets = string.substring(start + 1, end) // end is exclusive
    const stringWithBrackets = string.substring(start, end + 1)

    return stringWithReplacedSubstringNTimes(
      string,
      stringWithBrackets,
      stringInBrackets,
      3
    )
  }

  return string
}

function stringContainsWronglyPlacedBrackets(string) {
  const firstCurly = string.indexOf('{')
  const secondCurly = string.indexOf('}')

  const firstSquare = string.indexOf('[')
  const secondSquare = string.indexOf(']')

  // only first curly bracket exists
  if (firstCurly !== -1 && secondCurly === -1) return true

  // only second curly bracket exists
  if (firstCurly === -1 && secondCurly !== -1) return true

  // both curly brackets exist, but in wrong order }{
  if (firstCurly > secondCurly) return true

  // only first square bracket exists
  if (firstSquare !== -1 && secondSquare === -1) return true

  // only second square bracket exists
  if (firstSquare === -1 && secondSquare !== -1) return true

  // both square brackets exist, but in wrong order }{
  if (firstSquare > secondSquare) return true

  return false
}

function stringContainsInvalidCharacter(string) {
  if (stringContainsWronglyPlacedBrackets(string)) return true

  if ([...string].filter((c) => !validChars.includes(c)).length !== 0)
    return true

  return false
}

function convertedString(string) {
  let s = string.toUpperCase()

  if (stringContainsInvalidCharacter(s)) return ''

  let repeat = true

  while (repeat) {
    s = stringWithReplacedCurlyBrackets(stringWithReplacedSqaureBrackets(s))

    repeat =
      (s.includes('{') && s.includes('}')) ||
      (s.includes('[') && s.includes(']'))
  }

  return s
}

function letterScore(letter) {
  return scoreboard.has(letter) ? scoreboard.get(letter) : 0
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
