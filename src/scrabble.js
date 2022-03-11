class Scrabble {
  constructor(word) {
    this.word = word;
    this.onePoint = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    this.twoPoints = ["d", "g"];
    this.threePoints = ["b", "c", "m", "p"];
    this.fourPoints = ["f", "h", "v", "w", "y"];
    this.fivePoints = ["k"];
    this.eightPoints = ["j", "x"];
    this.tenPoints = ["q", "z"];
  }

  score() {
    let score = 0;
    if (typeof this.word !== "string") {
      return score;
    } else {
      const wordArr = this.word.toLowerCase().split("");
      wordArr.filter((letter) => {
        if (this.onePoint.includes(letter)) score += 1;
        if (this.twoPoints.includes(letter)) score += 2;
        if (this.threePoints.includes(letter)) score += 3;
        if (this.fourPoints.includes(letter)) score += 4;
        if (this.fivePoints.includes(letter)) score += 5;
        if (this.eightPoints.includes(letter)) score += 8;
        if (this.tenPoints.includes(letter)) score += 10;
        return score;
      });
    }
    return score;
  }
}

module.exports = Scrabble;
