// - create a function that associates each letter with its corresponding value
//  - create a function (for loop?) that takes a string and divides it down into individual letters
//  - take each letter (split?), compare it against the key in the class object and returns a numerical value
//  - once all letters have a number value, add them together and return a total number for the word

// ---SCORE ---
// Score must start at 0
//  - If ' ' or null are passed in, return 0
//  - If words are passed in, push(?) to lettersValue for value assessment
// Once values are returned from lettersValue,

class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.word = word
    // word.toUpperCase()
  }

  score() {
    let total = 0
    if (this.word === ' ' || this.word === null || this.word === undefined) {
      return total
    }
    for (let i = 0; i < this.word.length; i++) {
      if (
        this.word[i] === 'A' ||
        this.word[i] === 'E' ||
        this.word[i] === 'I' ||
        this.word[i] === 'O' ||
        this.word[i] === 'U' ||
        this.word[i] === 'L' ||
        this.word[i] === 'N' ||
        this.word[i] === 'R' ||
        this.word[i] === 'S' ||
        this.word[i] === 'T'
      ) {
        total = total + 1
      }
      if (this.word[i] === 'D' || this.word[i] === 'G') {
        total = total + 2
      }
      if (
        this.word[i] === 'B' ||
        this.word[i] === 'C' ||
        this.word[i] === 'M' ||
        this.word[i] === 'P'
      ) {
        total = total + 3
      }
      if (
        this.word[i] === 'F' ||
        this.word[i] === 'H' ||
        this.word[i] === 'V' ||
        this.word[i] === 'W' ||
        this.word[i] === 'Y'
      ) {
        total = total + 4
      }
      if (this.word[i] === 'K') {
        total = total + 5
      }
      if (this.word[i] === 'J' || this.word[i] === 'X') {
        total = total + 8
      }
      if (this.word[i] === 'Q' || this.word[i] === 'Z') {
        total = total + 10
      }
    }
    return total
  }
}

const scrabble = new Scrabble('quirky')
// console.log(Scrabble.score())

module.exports = Scrabble
