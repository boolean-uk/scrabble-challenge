const values = require('./letter-values.js') // fetch the values table

function scrabble(word) {
  let points = 0
  if (word != null) {
    // if (word.includes('{', '}')) {
    //   word[0] *2
    // }
    const character = word.split('') // split the given word into individual characters in an array
    character.forEach((letter) => {
      points += values[letter.toLowerCase()] || 0 // change every letter to lowercase, match the letter with the letter and value in the values array and add to the points variable, or if it's not in the array, return 0 points
    })
  }
  return points
}

console.log(scrabble('c{a}bbage'))

module.exports = scrabble
