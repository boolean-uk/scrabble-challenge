class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    const scoreMap = {
      // score = 1
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      // score = 2
      D: 2,
      G: 2,
      // score = 3
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      // score = 4
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      // score = 5
      K: 5,
      // score = 8
      J: 8,
      X: 8,
      // score = 10
      Q: 10,
      Z: 10,
      // score = 0
      _: 0,
      "{": 0,
      "}": 0,
      "[": 0,
      "]": 0,
    };

    if (this.word == null || this.word.length < 1 || this.word.trim() === "")
      return 0;
    let wordUpper = this.word.toUpperCase();
    // ----
    console.log(wordUpper);
    let double = "";
    let triple = "";
    // ----

    if (wordUpper.match(/\{([^\{\}]*)\}/g))
      double = wordUpper.match(/\{([^\{\}]*)\}/g).pop();
    console.log(double);
    // ----

    if (wordUpper.match(/\[([^\[\]]*)\]/g))
      triple = wordUpper.match(/\[([^\[\]]*)\]/g).pop();
    console.log(triple);
    // ----

    wordUpper = wordUpper.concat(double).concat(triple).concat(triple);
    console.log(wordUpper);
    if (this.word.length === 1) return scoreMap[wordUpper];
    if (this.word.length > 1)
      return [...wordUpper]
        .map((letter) => scoreMap[letter])
        .reduce((acc, letterNum) => (acc = acc + letterNum));
  }
}

let scrabble = new Scrabble("");

console.log(scrabble.score());

module.exports = Scrabble;
