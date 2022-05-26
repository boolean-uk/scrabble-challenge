const letterScores = {
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

class Scrabble {
  // Write your implementation here

  // Start off with the constructor
  constructor(word = "", scoreMap = letterScores) {
    this.word = word
    this.scoreMap = scoreMap
  }

  // a score method that returns 0 if 
  score(){
    if (this.word === " " || 
      this.word === null) {
      return 0
    } else {
      return this.getScore()
    }
  }

  getScore() {
    let score = 0
    for(let i= 0; i < this.word.length; i++) {
      const letter = this.word.charAt(i) // this gets the current letter
      // return letter += this.scoreMap
      // score += this.scoreMap[i]
      // FIND THE SCORE FOR THIS LETTER IN SCOREMAP
    }
    return score
  }  
}

// get the score value for each letter in the word
      // add on the value to get the sum of the word
      //return the sum
  
    // turns string(the word) into an array 
    // loops through the array giving each letter a score from letterScores
    // adds those scores and returns the sum


module.exports = Scrabble

// score() {
  //   // for(let i = )
  // }


// First thoughts on how to approach this:
// In a class of scrabble

// turn string into array
// loop the array and get the score for each letter
// add that to totalScore
//refer to letter scores in my loop...I think 



// I need methods (functions) that has a score for different letters and adds them together when a word is in the input.

// Have a score function that stores the scores and updates it accordingly.

// I need to also have for loops that iterate through the length of the input words, count each letter and gets the sum of the word for each letter in that word.

// Returns the final sum for that whole word or letter depending on what the input is.

// Maybe need arrays for the letters that store their value

// 


// I'm trying to figure out how would I get the score value for each letter in the word with the code I currently have. With what I have I'm assuming if my word was 'cat' for example, It would take each character and somehow with the letter scores it would return 311, but