const { letters } = require('./letter.js')

const scrabble = (word) => {
  let output = 0
  const scrabbleArr = []

  function checkString(string) {
    return /^[0-9]*$/.test(string)
  }

  const stringContainsNum = checkString(word)

  if (typeof word === 'string' && stringContainsNum === false) {
    for (let i = 0; i < word.length; i++) {
      scrabbleArr.push(word[i].toLowerCase())
    }

    for (const letter of scrabbleArr) {
      if (letter in letters) {
        output += letters[letter]
      }
    }
  } else if (stringContainsNum === true) {
    console.log(
      "Error: Please input a valid WORD! Example: 'Animal', 'Rhinoceros', 'Drink' etc.."
    )
  }
  return output
}

console.log(scrabble('d{o}g'))
module.exports = scrabble
