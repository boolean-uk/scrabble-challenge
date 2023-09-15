function scrabble(word) {
  // write code here

  if (!word) {
    return 0
  }

  // Define the letter values in an object
  const letterValues = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10
  }

  // Convert the word to uppercase for case-insensitivity
  word = word.toUpperCase()

  // Initialize the total score
  let score = 0

  // Loop through each letter in the word and calculate the score
  for (let i = 0; i < word.length; i++) {
    for (const key in letterValues) {
      if (key.includes(word[i])) {
        score += letterValues[key]
        break
      }
    }
  }

  return score
}

// Test cases
console.log("scrabble(''):", scrabble('')) // should return 0 (Empty string)
console.log("scrabble(' \t\n'):", scrabble(' \t\n')) // should return 0 (Whitespace)
console.log('scrabble(null):', scrabble(null)) // should return 0 (Null input)
console.log("scrabble('a'):", scrabble('a')) // should return 1 (Single letter 'a')
console.log("scrabble('f'):", scrabble('f')) // should return 4 (Single letter 'f')
console.log("scrabble('street'):", scrabble('street')) // should return 6 (Sum of letter values in 'street': 1+3+1+1+1=6)
console.log("scrabble('quirky'):", scrabble('quirky')) // should return 22 (Sum of letter values in 'quirky': 10+1+1+1+2+8=22)
console.log("scrabble('OXYPHENBUTAZONE'):", scrabble('OXYPHENBUTAZONE')) // should return 41 (Sum of letter values in 'OXYPHENBUTAZONE': 10+1+4+4+2+1+1+3+1+1+1+1=41)

module.exports = scrabble
