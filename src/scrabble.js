const wordScore = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}

/**
 * Find the character score of the provided character
 * @param {string} character The charactor to find the scrabble value of
 * @returns Integer, value of the character or 0 if no matches found
 */
const letterScore = (character) =>
  parseInt(
    Object.keys(wordScore).find((key) =>
      wordScore[key].includes(character.toUpperCase())
    ) || 0
  )

function validMultiplerMultiplicity(word) {
  const openingCMultiplierCount = (word.match(/{/g) || []).length
  const closingCMultiplierCount = (word.match(/}/g) || []).length
  const openingSMultiplierCount = (word.match(/\[/g) || []).length
  const closingSMultiplierCount = (word.match(/]/g) || []).length

  return (
    openingCMultiplierCount === closingCMultiplierCount &&
    openingSMultiplierCount === closingSMultiplierCount
  )
}

/**
 * Check if the character is a "{", "[", "]", or "}"
 * @param {string} character Character to examine
 * @returns true if the character is a bracket, false otherwise
 */
// eslint-disable-next-line no-useless-escape
const isMultiplier = (character) => /[\{\[\]\}]/.test(character)

// eslint-disable-next-line prettier/prettier, no-useless-escape
const hasOnlyValidCharacters = (character) => /^[a-zA-Z{}\[\]]+$/.test(character)

function modifyMultiplier(character, multiplier) {
  switch (character) {
    case '{':
      return multiplier * 2
    case '}':
      return multiplier / 2
    case '[':
      return multiplier * 3
    case ']':
      return multiplier / 3
  }
}

function validateWord(word) {
  if (!word?.trim()) {
    // Check empty/null word
    return 0
  } else if (!hasOnlyValidCharacters(word)) {
    // Check only contains valid character
    return 0
  } else if (!validMultiplerMultiplicity(word)) {
    // Check all brackets opened and closed correctly
    return 0
  } else {
    return 1
  }
}

function scrabble(word) {
  // write code here
  if (!validateWord(word)) {
    return 0
  }

  let score = 0
  let multiplier = 1
  word.split('').forEach((char) => {
    if (isMultiplier(char)) {
      multiplier = modifyMultiplier(char, multiplier)
    } else {
      score = score + multiplier * letterScore(char)
    }
  })
  return score
}

console.log(scrabble('{dog}'))

module.exports = scrabble
