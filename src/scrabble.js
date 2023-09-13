// PLAN

// Plain english

// GOAL -
// The purpose is to pass in a word via a function and that word should return a score depending on the word passed through

// For example,
// A = 1
// P = 3
// P = 3
// L = 1
// E = 1
// Total score should return a score of 9

// However, if a white space is entered - ('') empty string = this should return 0
// However, if a new line is entered /n   (" \t\n")         = should return 0
// However, if null is entered                              = should return 0

// Pseudo code

// 1. Create a function called scrabble
// //  2. Assign each letter to a score for example, A=1
// Write your logic here so:
// if A, E, I, O, U, L, N, R, S, T then return 1
// if D, G                         then return 2
// if B, C, M, P                   then return 3
// if F, H, V, W,                  then return 4
// if K                            then return 5
// if J, X                         then return 8
// if Q, Z                         then return 10

// 3. Lower case

// 5. Create a variable that keeps track of the score

// 6. Create a loop to loop through each word entered
// - if any word entered
// add the totalScore to the scoreLetters

// 7.
// Create if statements within the function that take into account the possible enteries example if empty string entered, new line entered, null is entered, then this should return a score of 0
// 1. Assigning the letters to scores
const letterScore = {
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
  B: 2,
  C: 2,
  M: 2,
  P: 2,
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

// 2. Create a function called 'scrabble' with one parameter called 'word'
function scrabble(word) {


  // 3. Create a variable that keeps track of the totalScore

  let totalScore = 0

  // 4. Create loop that iterates through the word that is passed through the function - that way it can check whether the scores for each letter and these up
  // eslint-disable-next-line no-unreachable-loop

  for (let i = 0; i < word.length; i++) {
    // 5. Create a variable and store one letter and apply upperCase method, so if lowerCase is entered, the function still works
    const aLetter = word[i].toUpperCase()

    // 6. if a letter is in the letterScore then update the totalScore by calcuting the letter score depending on the score. The word 'in' returns true if the specified propety is in the specified object
    if (aLetter in letterScore) {
      // update the totalscore = totalscore + letterscore[letter]
      totalScore += letterScore[aLetter]
    }

    if (aLetter === null || aLetter === ' \t\n' || aLetter === '') {
      return 0
    }
  }
  return totalScore
}

console.log(scrabble('hello'))
console.log(scrabble(''))
console.log(scrabble(' \t\n'))
// console.log(scrabble(null))
console.log(scrabble('f'))
console.log(scrabble('street'))
console.log(scrabble('quirky'))
console.log(scrabble('OXYPHENBUTAZONE'))


module.exports = scrabble

