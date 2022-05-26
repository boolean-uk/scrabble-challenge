// Task
// Given a word, compute the scrabble score for that word.

// Letter	Value
// A, E, I, O, U, L, N, R, S, T	=> 1
// D, G	=> 2
// B, C, M, P =>	3
// F, H, V, W, Y =>	4
// K	=> 5
// J, X	=> 8
// Q, Z	=> 10


class Scrabble {

  constructor (word) {
    this.word = word
  }

  score() {

    let finalScore = 0;

    if (this.word === null) {
      return finalScore;
    }

    let caseInsensitiveWord = this.word.toUpperCase();

    let visitedParentheses = "";

    for (let i = 0; i < caseInsensitiveWord.length; i++) {

      if (["\t", "\n", " "].includes(caseInsensitiveWord[i])) {
        return finalScore;
      }

      if (this.isOpenedParentheses(caseInsensitiveWord[i])) {
        visitedParentheses = caseInsensitiveWord[i];
        continue
      }

      if (this.isClosedParentheses(caseInsensitiveWord[i])) {
        visitedParentheses = "";
        continue
      }
      
      finalScore += this.getScoreByChar(caseInsensitiveWord[i]) * this.getMultiplierByParentheses(visitedParentheses);
    }

    console.log("word =>", caseInsensitiveWord, "Score =>", finalScore)

    return finalScore;
  }

  getScoreByChar(char) {
    
    const onePointLetters = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    const twoPointsLetters = ["D", "G"];
    const threePointsLetters = ["B", "C", "M", "P"];
    const fourPointsLetters = ["F", "H", "V", "W", "Y"];
    const fivePointsLetters = ["K"];
    const eightPointsLetters = ["J", "X"];
    const tenPointsLetters = ["Q", "Z"];

    if (onePointLetters.includes(char)) {
      return 1;
    }

    if (twoPointsLetters.includes(char)) {
      return 2;
    }

    if (threePointsLetters.includes(char)) {
      return 3;
    }

    if (fourPointsLetters.includes(char)) {
      return 4;
    }

    if (fivePointsLetters.includes(char)) {
      return 5;
    }

    if (eightPointsLetters.includes(char)) {
      return 8;
    }

    if (tenPointsLetters.includes(char)) {
      return 10;
    }

    return 0;
  }

  isOpenedParentheses(char) {

    if ("{" === char || "[" === char) {
      return true;
    }
    return false;
  }

  isClosedParentheses(char) {

    if ("}" === char || "]" === char) {
      return true;
    }
    return false;
  }

  getMultiplierByParentheses(parentheses) {

    if (parentheses === "{") {
      return 2;
    }

    if (parentheses === "[") {
      return 3;
    }
    return 1;
  }
}

module.exports = Scrabble
