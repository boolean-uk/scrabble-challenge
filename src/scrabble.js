class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.word = word;
  }

  score() {
    let points = 0;
    let one = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];

    if (this.word === "") {
      return 0;
    } else if (this.word === null) {
      return 0;
    } else if (this.word === " \t\n") {
      return 0;
    } else {
      for (let i = 0; i < this.word.length; i++) {
        if (one.includes(this.word[i])) {
          ++points;
        }
      }
      return points;
    }
  }
}

module.exports = Scrabble;
