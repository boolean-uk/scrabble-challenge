/* eslint-disable no-undef */
/*
Standard criteria:

1. Create a function (splitWord) that splits up a word string into an array of letters. 
   This function should also return 0 if the string is empty, null or has whitespace in it.
2. Create another function (scrabble) to look at each word in the array and compare with the letter values. 
   If a match is found return the point value to a variable keeping track of the score.
3. Return the value sum.

Input:
Word as a String
Output:
Score as a number

Functions:
splitWord - Need to use .split() string method
scrabble - need to use for loop with if-else blocks or switch case

Extended criteria:
Double and Triple Letter

1. Edit the splitWord function so that it recognises [] and {} and treats it differently than just a letter.
2. Edit the scrabble function to increase the score by the multiplier for [] and {} words.

Double or Triple word

It may be possible to write the function in the 'Double or Triple Letter' extension so that it also recognises words aswell as letters. 

*/
const pointValue = {
  1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  2: ['d', 'g'],
  3: ['b', 'c', 'm', 'p'],
  4: ['f', 'h', 'v', 'w', 'y'],
  5: ['k'],
  8: ['j', 'x'],
  10: ['q', 'z']
}
const doubledWords = []

function splitWord(word) {
  if (typeof word !== 'string' || /\s/g.test(word)) {
    console.log('not valid')
    return 0
  }
  word = word.toLowerCase()
  const index = word.indexOf('{')
  let doubleWordCounter = 0
  for (letter in word) {
    if (word[letter] === '{') {
      doubledWords.push(word.slice(index + 1, index + 2))
      doubleWordCounter++
      console.log('includes [')
      console.log(word)
    }
  }
  console.log(
    (word =
      word.substring(0, index) + word.substring(index + 3 * doubleWordCounter))
  )
  console.log('valid word')
  console.log(doubledWords)
  console.log(word)
  return word.split('')
}

function assignPointsToWord(letter) {
  return Number(
    Object.keys(pointValue).find((k) => pointValue[k].includes(letter))
  )
}

function scrabble(word) {
  word = splitWord(word)
  console.log(word[0])
  if (word === 0) {
    return 0
  }
  let valueSum = 0
  for (letter in word) {
    console.log(valueSum += assignPointsToWord(word[letter]))
  }
  for (letter in doubledWords) {
    console.log(doubledWords[letter])
    console.log((valueSum += 2 * assignPointsToWord(doubledWords[letter])))
  }
  return valueSum
}


module.exports = scrabble
