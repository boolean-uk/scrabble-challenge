/*function scrabble(word) {
  if (!word || typeof word !== 'string') {
    return 0; // Return 0 for invalid input
  }
  const letterValues = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  }
  word = word.toUpperCase()
  let score = 0
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (letterValues.hasOwnProperty(letter)) {
      score += letterValues[letter]
    }
  }
  return score
}
// Test cases
console.log(scrabble('')) // should return 0
console.log(scrabble(" \t\n")) // should return 0
console.log(scrabble(null)) // should return 0
console.log(scrabble('a')) // should return 1
console.log(scrabble('f')) // should return 4
console.log(scrabble('street')) // should return 6
console.log(scrabble('quirky')) // should return 22
console.log(scrabble('OXYPHENBUTAZONE')) // should return 41 */

//Concise Code
//Split up your scrabble function in to multiple smaller functions that do one thing only.
function getLetterValues() {
  return {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  }
}

function isValidWord(word) {
  return word && typeof word === 'string'
}

function calculateWordScore(word) {
  const letterValues = getLetterValues()
  let score = 0
  const uppercasedWord = word.toUpperCase()

  for (let i = 0; i < uppercasedWord.length; i++) {
    const letter = uppercasedWord[i];
    if (letterValues.hasOwnProperty(letter)) {
      score += letterValues[letter];
    }
  }

  return score
}

function scrabble(word) {
  if (!isValidWord(word)) {
    return 0
  }

  return calculateWordScore(word)
}

// Test cases
console.log(scrabble('')) // should return 0
console.log(scrabble(" \t\n")) // should return 0
console.log(scrabble(null)) // should return 0
console.log(scrabble('a')) // should return 1
console.log(scrabble('f')) // should return 4
console.log(scrabble('street')) // should return 6
console.log(scrabble('quirky')) // should return 22
console.log(scrabble('OXYPHENBUTAZONE')) // should return 41
module.exports = scrabble