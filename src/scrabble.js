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

function somethingElse() {
  console.log('This is the console log from somethingElse')
}

function scrabble(word) {
  console.log('What is the word?', word)

  // Calculate the score for each letter in the word to get each value so therefore we use the for loop
  let totalScoreValue = 0
  // check the input word is null or empty
  if (word === null || word.trim().length === 0) {
    return totalScoreValue
  }
  // Convert the word to uppercase to handle both uppercase and lowercase letters
  word = word.toUpperCase()
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    // Use the eachLetterValues object to get the value for the letter
    const letterValue = eachLetterValues[letter] || 0
    // Add the letter score to the total score
    totalScoreValue += letterValue
  }

  somethingElse() // Call the somethingElse function

  return totalScoreValue
}

console.log(scrabble('')) // should return 0
console.log(scrabble(' \t\n')) // should return 0
console.log(scrabble(null)) // should return 0
console.log(scrabble('a')) // should return 1
console.log(scrabble('f')) // should return 4
console.log(scrabble('street')) // should return 6
console.log(scrabble('quirky')) // should return 22
console.log(scrabble('OXYPHENBUTAZONE')) // should return 41
console.log(scrabble('cabbage'))

module.exports = scrabble
