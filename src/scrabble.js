const eachLetterValues = {
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

// Function to calculate the score for a letter with double or triple modifiers
function calculateLetterScore(letter, modifier) {
  const letterValue = eachLetterValues[letter] || 0
  if (modifier === '{}') {
    return letterValue * 2
  } else if (modifier === '[]') {
    return letterValue * 3
  } else {
    return letterValue
  }
}

// Function to calculate the score for a word with double or triple word modifiers
function calculateWordScore(word, modifier) {
  let wordScore = 0
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    const letterModifier =
      word[i - 1] === '{' ? '{}' : word[i - 1] === '[' ? '[]' : ''
    wordScore += calculateLetterScore(letter, letterModifier)
  }
  if (modifier === '{}') {
    return wordScore * 2
  } else if (modifier === '[]') {
    return wordScore * 3
  } else {
    return wordScore
  }
}

function scrabble(word) {
  if (!word) return 0

  // Convert the word to uppercase to handle both uppercase and lowercase letters
  word = word.toUpperCase()

  let totalScoreValue = 0
  let wordModifier = ''

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (char === '{' || char === '[') {
      // Detect word modifiers
      wordModifier = char + char
    } else if (char === '}' || char === ']') {
      // Calculate word score and reset modifier
      totalScoreValue += calculateWordScore(word.substring(0, i), wordModifier)
      wordModifier = ''
    }
  }

  // Calculate the score for the remaining part of the word
  totalScoreValue += calculateWordScore(word, wordModifier)

  return totalScoreValue
}

console.log(scrabble('')) // should return 0
console.log(scrabble(' \t\n')) // should return 0
console.log(scrabble(null)) // should return 0
console.log(scrabble('a')) // should return 1
console.log(scrabble('f')) // should return 4
console.log(scrabble('street')) // should return 6
console.log(scrabble('quirky')) // should return 22
console.log(scrabble('{OXYPHENBUTAZONE}')) // should return 135
console.log(scrabble('cabbage')) // should return 14

module.exports = scrabble
