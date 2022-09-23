const values = require('./letter-values.js') // fetch the values table

function scrabble(word) {
  let points = 0
  if (word != null) {
    // safeguarding against no value
    const character = word.split('')
    // split the given word into individual characters in an array
    if (word.includes('{', '}')) {
      // if word contains brackets
      const firstBracket = word.indexOf('{') // creates variable that's the index of the first bracket location
      const secondBracket = word.indexOf('}') // same as above but for the second bracket
      if (firstBracket !== word[0] && secondBracket !== word[word.length - 1]) {
        // checking if the brackets include the whole word, if so ignore this and continue
        const toBeDoubled = character.splice(firstBracket, secondBracket) // create a variable that is the letters within the bracket
        toBeDoubled.forEach((doubledLetter) => {
          points += values[doubledLetter.toLowerCase()] * 2 || 0
          // change every letter to lowercase, match the letter with the letter and value in the values array and add to the points variable after multiplying by 2, or if it's not in the array, return 0 points
        })
      }
    }
    if (word.includes('[', ']')) {
      // if word contains brackets
      const firstSqBracket = word.indexOf('[') // creates variable that's the index of the first bracket location
      const secondSqBracket = word.indexOf(']') // same as above but for the second bracket
      if (
        firstSqBracket !== word[0] &&
        secondSqBracket !== word[word.length - 1]
      ) {
        // checking if the brackets include the whole word, if so ignore this and continue
        const toBeTripled = character.splice(firstSqBracket, secondSqBracket) // create a variable that is the letters within the bracket
        toBeTripled.forEach((tripledLetter) => {
          points += values[tripledLetter.toLowerCase()] * 3 || 0
          // change every letter to lowercase, match the letter with the letter and value in the values array and add to the points variable after multiplying by 3, or if it's not in the array, return 0 points
        })
      }
    }
    character.forEach((letter) => {
      points += values[letter.toLowerCase()] || 0
      // change every letter to lowercase, match the letter with the letter and value in the values array and add to the points variable, or if it's not in the array, return 0 points
    })
    if (word[0].includes('{') && word[word.length - 1].includes('}')) {
      points *= 2
      console.log('Extension 2')
    }
    if (word[0].includes('[') && word[word.length - 1].includes(']')) {
      points *= 3
      console.log('Extension 2')
    }
  }
  return points
}

console.log(scrabble('Anyth[i]ng'))

module.exports = scrabble
