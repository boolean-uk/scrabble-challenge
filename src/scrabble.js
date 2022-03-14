class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (typeof this.word !== "string" || this.word.length === 0) {
      return 0;
    }
    this.word = this.word.toLowerCase();
    const points1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    const points2 = ["d", "g"];
    const points3 = ["b", "c", "m", "p"];
    const points4 = ["f", "h", "v", "w", "y"];
    const points5 = ["k"];
    const points8 = ["j", "x"];
    const points10 = ["q", "z"];

    let score = 0;
    let scoreMultiplier = 1;

    for (let i = 0; i < this.word.length; i++) {
      // decide if double or tripple letter
      if (this.word[i] === "{") {
        scoreMultiplier = 2;
      } else if (this.word[i] === "}") {
        scoreMultiplier = 1;
      } else if (this.word[i] === "[") {
        scoreMultiplier = 3;
      } else if (this.word[i] === "]") {
        scoreMultiplier = 1;
      } else {
        // calc letter score
        let letterScore = 0;

        if (points1.includes(this.word[i])) {
          letterScore = 1;
        } else if (points2.includes(this.word[i])) {
          letterScore = 2;
        } else if (points3.includes(this.word[i])) {
          letterScore = 3;
        } else if (points4.includes(this.word[i])) {
          letterScore = 4;
        } else if (points5.includes(this.word[i])) {
          letterScore = 5;
        } else if (points8.includes(this.word[i])) {
          letterScore = 8;
        } else if (points10.includes(this.word[i])) {
          letterScore = 10;
        }

        // add correct amount to total score

        score += letterScore * scoreMultiplier;
        scoreMultiplier = 1;
      }
      // if (this.word[i] === "{" && this.word[i] === "}") {
      //   const bracketIndexOpen = this.word.indexOf("{");
      //   const bracketIndexClosed = this.word.indexOf("}");
      //   this.word.slice(bracketIndexOpen, bracketIndexClosed);
      //   // if (points10.includes(this.word[bracketIndex + 1])) {
      //   //   score += 10;
      //   // }
      // }
    }
    return score;
  }
}

module.exports = Scrabble;
