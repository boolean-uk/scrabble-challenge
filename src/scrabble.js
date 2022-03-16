// class Scrabble {
//   constructor(word) {
//     this.word = word;
//   }

//   score() {
//     if (typeof this.word !== "string" || this.word.length === 0) {
//       return 0;
//     }
//     this.word = this.word.toLowerCase();
//     const points1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
//     const points2 = ["d", "g"];
//     const points3 = ["b", "c", "m", "p"];
//     const points4 = ["f", "h", "v", "w", "y"];
//     const points5 = ["k"];
//     const points8 = ["j", "x"];
//     const points10 = ["q", "z"];

//     let score = 0;
//     let scoreMultiplier = 1;

//     for (let i = 0; i < this.word.length; i++) {
//       // decide if double or tripple letter
//       if (this.word[i] === "{") {
//         scoreMultiplier = 2;
//       } else if (this.word[i] === "}") {
//         scoreMultiplier = 1;
//       } else if (this.word[i] === "[") {
//         scoreMultiplier = 3;
//       } else if (this.word[i] === "]") {
//         scoreMultiplier = 1;
//       } else {
//         // calc letter score
//         let letterScore = 0;

//         if (points1.includes(this.word[i])) {
//           letterScore = 1;
//         } else if (points2.includes(this.word[i])) {
//           letterScore = 2;
//         } else if (points3.includes(this.word[i])) {
//           letterScore = 3;
//         } else if (points4.includes(this.word[i])) {
//           letterScore = 4;
//         } else if (points5.includes(this.word[i])) {
//           letterScore = 5;
//         } else if (points8.includes(this.word[i])) {
//           letterScore = 8;
//         } else if (points10.includes(this.word[i])) {
//           letterScore = 10;
//         }

//         // add correct amount to total score

//         score += letterScore * scoreMultiplier;
//         scoreMultiplier = 1;
//       }
//     }
//     return score;
//   }
// }

const pointMap = {
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
    if (!this.isValidScrabbleWord(this.word)) return 0;

    this.word = this.word.toUpperCase();

    let score = 0;
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i];

      // double letter
      if (letter === "{") {
        const nextLetter = this.word[i + 1];
        score += pointMap[nextLetter];
        continue;
      }

      if (letter === "}") {
        continue;
      }

      // triple letter
      if (letter === "[") {
        const nextLetter = this.word[i + 1];
        score += pointMap[nextLetter] * 2;
        continue;
      }

      if (letter === "]") {
        continue;
      }

      score += pointMap[letter];
    }

    return score;
  }

  /**
   * Checks if the input word is valid
   * @param {string} word - scrabble word entry to be checked for validity
   * @returns Boolean
   */
  isValidScrabbleWord(word) {
    if (!word) return false;

    if (word.includes("\n") || word.includes("\t")) return false;

    return true;
  }

  /**
   * method for adding extra validation to double letter entries
   * @param {string} word takes in scrabble word
   * @returns boolean
   */
  doubleScoreBracketIsValid(word) {
    let numOfOpenBrackets = 0;
    let numOfClosedBrackets = 0;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const nextLetter = word[i + 1];

      if (letter === "{") numOfOpenBrackets += 1;

      if (letter === "}") numOfClosedBrackets += 1;

      if (letter === "{" && this.isAValidLetter(nextLetter));
    }

    if (numOfOpenBrackets === numOfClosedBrackets) return true;
  }

  /**
   * Checks if character is a letter from the alphabet.
   * @param {string} ch - A character from a string.
   * @returns Boolean
   */
  isAValidLetter(ch) {
    return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
  }
}

module.exports = Scrabble;
