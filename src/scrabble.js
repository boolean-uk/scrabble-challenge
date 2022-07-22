// assign digits to letters here. define a const
// define a varibale to save sum of values for each group?
// create objects?

const lettersObj = {
  1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  2: ['d', 'g'],
  3: ['b', 'c', 'm', 'p'],
  4: ['f', 'h', 'v', 'w', 'y'],
  5: ['k'],
  8: ['j', 'x'],
  10: ['q', 'z']
}

let sumOfLetters = 0

function scrabble(word) {
  if (word === null) {
    return 0
  }
  word = word.toLowerCase()
  word.split('')
  for (let i = 0; i < word.length; i++) {
    const keys = Object.keys(lettersObj)
    for (let j = 0; j < keys.length; j++) {
      const currentKey = keys[j]
      const theArrayForThatKey = lettersObj[currentKey]
      if (theArrayForThatKey.indexOf(word[i]) !== -1) {
        sumOfLetters += Number(currentKey)
      }
    }
  }
  const currentScore = sumOfLetters
  sumOfLetters = 0
  return currentScore
}
module.exports = scrabble
