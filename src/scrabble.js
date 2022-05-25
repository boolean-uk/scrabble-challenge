class Scrabble {
  // Write your implementation here

  // Start off with the constructor

  constructor(word = "", score = 0) {
    this.word = word
    this.score = score
  }

  totalScore() {
    return {
      word: this.word,
      score: this.score
    }
  }

}

module.exports = Scrabble

// First thoughts on how to approach this:
// In a class of scrabble 
// I need methods (functions) that has a score for different letters and adds them together when a word is in the input.
// Have a score function that stores the scores and updates it accordingly.
// I need to also have for loops that iterate through the length of the input words, count each letter and gets the sum of the word for each letter in that word.
// Returns the final sum for that whole word or letter depending on what the input is.
