const wordValues = {
  _: 0,
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
}

let score = 0

function scrabble(word) {
  const wordArray = sanitizeAndConvert(word)
  for (const letter of wordArray) {
    score += wordValues[letter]
  }

  return outputFinalResultAndReset(score)
}

function outputFinalResultAndReset(finalScore) {
  score = 0
  return finalScore
}

function sanitizeAndConvert(word) {
  if (word === null) {
    return ['_']
  }

  const wordCheckedForMultples = checkForMultiples(word)
  const sanitizedWord = wordCheckedForMultples
    .toUpperCase()
    .replace(' ', '_')
    .replace('\t', '_')
    .replace('\n', '_')

  if (sanitizedWord.length === 1) {
    return [`${sanitizedWord}`]
  }

  return sanitizedWord.split('')
}

function checkForMultiples(word) {
  if (word[0] === '{' && word[word.length - 1] === '}') {
    const doubleWordRemovedControlCharacters = removeControlCharacters(word)

    return doubleWordRemovedControlCharacters.repeat(2)
  }

  if (word[0] === '[' && word[word.length - 1] === ']') {
    const tripleWordRemovedControlCharacters = removeControlCharacters(word)

    return tripleWordRemovedControlCharacters.repeat(3)
  }

  if (word.indexOf('{') !== -1) {
    const position = word.indexOf('{') + 1
    const letterToMultiply = word.slice(position, position + 1)
    const expandedWord = multiplyLettersInWord(
      letterToMultiply,
      word,
      position,
      2
    )

    return removeControlCharacters(expandedWord)
  }

  if (word.indexOf('[') !== -1) {
    const position = word.indexOf('[') + 1
    const letterToMultiply = word.slice(position, position + 1)
    const expandedWord = multiplyLettersInWord(
      letterToMultiply,
      word,
      position,
      3
    )

    return removeControlCharacters(expandedWord)
  }

  return word
}

function removeControlCharacters(word) {
  return word
    .toUpperCase()
    .replace('{', '')
    .replace('}', '')
    .replace('[', '')
    .replace(']', '')
}

function multiplyLettersInWord(letter, word, position, factor) {
  const repeatedLetters = letter.repeat(factor)
  const patchedWord = [
    word.slice(0, position),
    repeatedLetters,
    word.slice(position)
  ].join('')

  return patchedWord
}

module.exports = scrabble
