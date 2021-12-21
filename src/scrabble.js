const letterArray = [
  "A",
  "E",
  "I",
  "O",
  "U",
  "L",
  "N",
  "R",
  "S",
  "T",
  "D",
  "G",
  "B",
  "C",
  "M",
  "P",
  "F",
  "H",
  "V",
  "W",
  "Y",
  "K",
  "J",
  "X",
  "Q",
  "Z",
];
const valueArray = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 8, 8, 10,
  10,
];
class Scrabble {
  // Write your implementation here

  constructor(word) {
    this.word = word;
  }

  score() {
    // this.word
    //create var for score total
    let scoreTotal = 0;
    // 1- loop this.word - to get each letter
    if (this.word === null) {
      return 0;
    }
    for (let i = 0; i < this.word.length; i++) {
      const currentLetter = this.word[i];
      //2-look up the score of this letter
      // 3- store value of the letter
      let letterScore = this.getLetterScore(currentLetter);

      // Add the letterscore to the scoreTotal
      scoreTotal = letterScore + scoreTotal;
      // if you use the return keyword here  - in this position (inside the loop) - then only one letter will be calculated
    }
    return scoreTotal;
  }
  getLetterScore(currentLetter) {
    // find the currentLetter inside letter array
    // loop through the letterArray
    for (let i = 0; i < letterArray.length; i++) {
      const letter = letterArray[i];
      // if letter is equal to current letter
      if (letter === currentLetter.toUpperCase()) {
        // return the value using the valueArray[i]
        return valueArray[i];
      }
    }
    return 0;
  }
}

module.exports = Scrabble;
