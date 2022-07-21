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
  0: ['{', '}', '[', ']'],
  1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  2: ['d', 'g'],
  3: ['b', 'c', 'm', 'p'],
  4: ['f', 'h', 'v', 'w', 'y'],
  5: ['k'],
  8: ['j', 'x'],
  10: ['q', 'z']
}
function assignPointsToWord(letter) {
  return Number(
    Object.keys(pointValue).find((k) => pointValue[k].includes(letter))
  )
}
function scrabble(word) {
  if (typeof word !== 'string' || /\s/g.test(word)) {
    return 0
  }
  word = word.toLowerCase()
  let sumValue = 0
  let bracketCount = 0
  let curlyCount = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{') {
      curlyCount++
    }
    if (word[i] === '[') {
      bracketCount++
    }
    if (word[i] === '{' && word[i + 2] === '}') {
      // IF condition for double letter
      sumValue += assignPointsToWord(word[i + 1]) * 2
      i += 2
    }
    if (word[i] === '[' && word[i + 2] === ']') {
      // IF condition for triple letter
      sumValue += assignPointsToWord(word[i + 1]) * 3
      i += 2
    }
    sumValue += assignPointsToWord(word[i])
  }
  if (word[0] === '{' && word[word.length - 1] === '}' && curlyCount === 1) {
    return sumValue * 2 // IF condition for double word
  }
  if (word[0] === '[' && word[word.length - 1] === ']' && bracketCount === 1) {
    return sumValue * 3 // IF condition for triple word
  }
  return sumValue
}

module.exports = scrabble
