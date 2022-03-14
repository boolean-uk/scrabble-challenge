class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (typeof this.word !== "string" || this.word.length === 0) {
      return 0;
    }

    let score = 0;
    this.word = this.word.toLowerCase();
    const points1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    const points2 = ["d", "g"];
    const points3 = ["b", "c", "m", "p"];
    const points4 = ["f", "h", "v", "w", "y"];
    const points5 = ["k"];
    const points8 = ["j", "x"];
    const points9 = ["q", "z"];

    for (let i = 0; i < this.word.length; i++) {
      if (points1.includes(this.word[i])) {
        score += 1;
      } else if (points2.includes(this.word[i])) {
        score += 2;
      } else if (points3.includes(this.word[i])) {
        score += 3;
      } else if (points4.includes(this.word[i])) {
        score += 4;
      } else if (points5.includes(this.word[i])) {
        score += 5;
      } else if (points8.includes(this.word[i])) {
        score += 8;
      } else if (points9.includes(this.word[i])) {
        score += 10;
      }
    }
    return score;
  }
}

module.exports = Scrabble;
