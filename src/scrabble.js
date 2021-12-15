class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    let sum = 0;
    if (this.word == null) {
      return 0;
    }
    for (let i = 0; i < this.word.length; i++) {
      if (/[a-zA-Z]/.test(this.word[i])) {
        sum += POINTS[indexing(this.word[i])];
      }
    }
    return sum;
  }
}
let POINTS = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
  10,
];
function indexing(char) {
  let lastChar = char.toLowerCase();
  return lastChar.charCodeAt(0) - "a".charCodeAt(0);
}

module.exports = Scrabble;
