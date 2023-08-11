const letterValues = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}
function scrabble(word) {
  let score = 0
  let letterMultiplier = 1
  let wordMultiplier = 1
  if (word) {
    word = word.trim().toUpperCase()

    wordMultiplier = calculateWordMultiplier(word)
    if (wordMultiplier > 1) {
      word = wordWithoutWordMultipliers(word)
    }
    for (let index = 0; index < word.length; index++) {
      const letter = word.charAt(index)
      if (letter === '{') {
        if (word.charAt(index + 2) !== '}') {
          return 0
        }
        letterMultiplier = 2
      } else if (letter === '}') {
        if (word.charAt(index - 2) !== '{') {
          return 0
        }
        letterMultiplier = 1
      } else if (letter === '[') {
        if (word.charAt(index + 2) !== ']') {
          return 0
        }
        letterMultiplier = 3
      } else if (letter === ']') {
        if (word.charAt(index - 2) !== '[') {
          return 0
        }
        letterMultiplier = 1
      } else if (isAlphabetic(letter)) {
        score += letterValues[letter] * letterMultiplier
      } else {
        return 0
      }
    }
    score *= wordMultiplier
  }
  return score
}

function wordWithoutWordMultipliers(word) {
  let indexValueBeginning = -1
  let indexValueEnd = -1
  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (
      word.charAt(i) === '{' &&
      word.charAt(word.length - i - 1) === '}' &&
      word.charAt(i + 2) !== '}' &&
      word.charAt(word.length - i - 3) !== '{'
    ) {
      indexValueBeginning = i
      indexValueEnd = word.length - i - 1
    } else if (
      word.charAt(i) === '[' &&
      word.charAt(word.length - i - 1) === ']' &&
      word.charAt(i + 2) !== ']' &&
      word.charAt(word.length - i - 3) !== '['
    ) {
      indexValueBeginning = i
      indexValueEnd = word.length - i - 1
    } else if (isAlphabetic(char)) {
      break
    }
  }
  const res = word.substring(indexValueBeginning + 1, indexValueEnd)
  return res
}

function calculateWordMultiplier(word) {
  let wordMultiplier = 1

  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (
      word.charAt(i) === '{' &&
      word.charAt(word.length - i - 1) === '}' &&
      word.charAt(i + 2) !== '}' &&
      word.charAt(word.length - i - 3) !== '{'
    ) {
      wordMultiplier *= 2
    } else if (
      word.charAt(i) === '[' &&
      word.charAt(word.length - i - 1) === ']' &&
      word.charAt(i + 2) !== ']' &&
      word.charAt(word.length - i - 3) !== '['
    ) {
      wordMultiplier *= 3
    } else if (isAlphabetic(char)) {
      break
    }
  }
  return wordMultiplier
}

function isAlphabetic(character) {
  const code = character.charCodeAt(0)
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

module.exports = scrabble
