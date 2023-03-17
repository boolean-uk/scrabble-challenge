
// Creating a function called scrabble - assigning 'word' (can use any word) as a parameter(variable that the function will have access to when it is called). In function body after {} is where logic is displayed, therefore, using an if statement to that is equal to null and returns 0

// According to w3schools - "\t" - meaning of this is tabs and "\n" - meaning of this is newline character - therefore, we want to return a score of "0" if tab or newline is entered.

// Remove whitespace - returns 0 for white space - according to MDN, we can use the 'trim' method that removes the whitespace.
// const greeting = '   Hello world!   ';
// For e.g,
// console.log(greeting);
// Expected output: "   Hello world!   ";

// console.log(greeting.trim());
// Expected output: "Hello world!";

// Creating an if statement - that if a word has a length of 0 then this should return a score of 0

// If words are entered in capitals then need to assign the toUpperCase() method to string

function scrabble(word) {
  if (word === null && word === '\n' && word === '\t' && word.length === 0) {
    return 0
  }
}
word = word.trim()

word = word.toUpperCase()

// Created a const variable 'letterScore' - then assigned the scores to the characters of the alphabet as later on - when we enter any word, a score will be retrived in the terminal.

// Created a for loop because it is easier than listing multiple times. Create a variable for the sum of score 'totalScore'. Can now assign letterScore (const variable below). So totalScore = totalScore + letterScore. Use Return to return a totalScore.


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
let totalScore = 0
for (let character of word) {
  totalScore += letterScore[character] 
}
return totalScore;



console.log(scrabble('laptop'))
console.log('hello')


// Plain English and Pseudo
// Purpose - to enter a words in the console log and terminal generates a score
// 1. Want to assign scores to words - assign points to letters - making a const variable
// 2. To actually get a result - use a function
// Conditions needed to ensure if null, whitespace or no words entered then a score of 0 will return
// 3. Conditions  - if you enter null - this should return 0
// 4. Conditions - if you enter whitespace - this should return 0
// 5. Condtions -if you enter empty words - this should return 0
// 6. assign toUpperCase function to variable as letters/words are case sensitive

 
//Example "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2x1 + 2x3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 14


module.exports = scrabble