class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.word = word;
  }

  score() {
    
    let points = 0;
    let one = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    let two = ["d", "g"];
    let three = ["b", "c", "m", "p"]
    let four = ["f", "h", "v", "w", "y"]
    let five = ["k"]
    let eight = ["j", "x"]
    let ten = ["q", "z"]


    if (this.word === "") {
      return 0;
    } else if (this.word === null) {
      return 0;
    } else if (this.word === " \t\n") {
      return 0;
    } else {
      let letters = this.word.toLowerCase();
      for (let i = 0; i < letters.length; i++) {
        if (one.includes(letters[i])) {
          ++points;
        }
      }
      for (let i = 0; i < letters.length; i++) {
        if (two.includes(letters[i])) {
          points = points + 2;
        }
      }
      for (let i = 0; i < letters.length; i++) {
        if (three.includes(letters[i])) {
          points = points + 3;
        }
      }
      for (let i = 0; i < letters.length; i++) {
        if (four.includes(letters[i])) {
          points = points + 4;
        }
      }
      for (let i = 0; i < letters.length; i++) {
        if (five.includes(letters[i])) {
          points = points + 5;
        }
      }
      for (let i = 0; i < letters.length; i++) {
        if (eight.includes(letters[i])) {
          points = points + 8;
        }
      }
      for (let i = 0; i < letters.length; i++) {
        if (ten.includes(letters[i])) {
          points = points + 10;
        }
      }

      return points;
    }
  }
}

module.exports = Scrabble;
