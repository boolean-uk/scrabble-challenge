// For this challenge use CLASSES, FUNCTIONS, LOOPS and FLOW CONTROL.
// We have the word "street" so we need to slipt it down into letters. We want to check the alphabets. So we use .split() in an array.

class Scrabble {
  //Created a class
  constructor(word) {
    this.word = word;
  }
  score() {
    //Function in the class is a method. This is a method.
    let score = 0; //Flexible variable
    if (typeof this.word !== "string") {
      //If it's NOT a string, return 0. This is a conditional flow with a strict inequality (!==)
      return 0;
    } else {
      const wordArray = this.word.toUpperCase().split(""); // variable with array capitalising the splitted word.
      console.log(wordArray);
      for (let i = 0; i <= wordArray.length; i++) {
        if (
          wordArray[i] === "A" ||
          wordArray[i] === "E" ||
          wordArray[i] === "I" ||
          wordArray[i] === "O" ||
          wordArray[i] === "U" ||
          wordArray[i] === "L" ||
          wordArray[i] === "N" ||
          wordArray[i] === "R" ||
          wordArray[i] === "S" ||
          wordArray[i] === "T"
        ) {
          score += 1;
        } else if (wordArray[i] === "D" || wordArray[i] === "G") {
          score += 2;
        } else if (
          wordArray[i] === "B" ||
          wordArray[i] === "C" ||
          wordArray[i] === "M" ||
          wordArray[i] === "P"
        ) {
          score += 3;
        } else if (
          wordArray[i] === "F" ||
          wordArray[i] === "H" ||
          wordArray[i] === "V" ||
          wordArray[i] === "W" ||
          wordArray[i] === "Y"
        ) {
          score += 4;
        } else if (wordArray[i] === "K") {
          score += 5;
        } else if (wordArray[i] === "J" || wordArray[i] === "X") {
          score += 8;
        } else if (wordArray[i] === "Q" || wordArray[i] === "Z") {
          score += 10;
        }
      }
    }

    return score; // Return score from let score = 0. The number 0 is going to increase.
  }
}

// If you want to access to every single letter/element in an array, use loops.

//Don't need to use .push, we want a score.

module.exports = Scrabble;

// ./node_modules/jasmine/bin/jasmine.js

// Nathan's solution of Scrabble Challenge:
/* const pointMap = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (!this.word) {
      return 0;
    }

    if (this.word.includes("\n") || this.word.includes("\t")) {
      return 0;
    }

    let score = 0;
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i].toUpperCase();
    }
    return score;
  }
}
*/
