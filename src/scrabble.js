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
  // Write your implementation here

  constructor (word) {
    this.word = word
  }

  score() {

      let finalScore = 0;

      if (this.word === null) {
        return finalScore;
      }

      const caseInsensitiveWord = this.word.toUpperCase().split("");

      for (let i = 0; i < caseInsensitiveWord.length; i++) {
        if (["\t", "\n", " "].includes(caseInsensitiveWord[i])) {
          return finalScore;
        }

        else if (["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"].includes(caseInsensitiveWord[i])) {
        finalScore += 1;
        }

        else if (["D", "G"].includes(caseInsensitiveWord[i])) {
          finalScore += 2;
        }

        else if (["B", "C", "M", "P"].includes(caseInsensitiveWord[i])) {
          finalScore += 3;
        }

        else if (["F", "H", "V", "W", "Y"].includes(caseInsensitiveWord[i])) {
          finalScore += 4;
        }

        else if (["K"].includes(caseInsensitiveWord[i])) {
          finalScore += 5;
        }

        else if (["J", "X"].includes(caseInsensitiveWord[i])) {
          finalScore += 8;
        }

        else if (["Q", "Z"].includes(caseInsensitiveWord[i])) {
          finalScore += 10;
        }

      console.log("word =>", caseInsensitiveWord, "Letter =>", caseInsensitiveWord[i], "Score", finalScore)
    }

    return finalScore;
  }
}

let scrabble = new Scrabble('quirky')
scrabble.score()

module.exports = Scrabble
