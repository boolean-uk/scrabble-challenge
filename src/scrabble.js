class Scrabble {
  constructor(word) {
    this.word = word;
    this.scoreMap = {
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
      "{": 0,
      "}": 0,
      "[": 0,
      "]": 0,
      ",": 2,
    };
  }

  // notTrueWord() {
  //   return this.word == null || this.word.length < 1 || this.word.trim() === ""
  //      0
  //     : this.word;
  // }

  doubleScore() {
    if (this.word == null || this.word.length < 1 || this.word.trim() === "")
      return;
    let bracketArray = [];
    let extractArray = [];
    let extractDouble = "";
    for (let i = 0; i < this.word.length; i++) {
      if (this.word.charAt(i) === "{") bracketArray.push(i);
      if (this.word.charAt(i) === "}") {
        extractArray.push(this.word.substring(bracketArray.pop() + 1, i));
      }
    }
    return (extractDouble = extractArray.toString() ?? "");
  }

  TripleScore() {
    if (this.word == null || this.word.length < 1 || this.word.trim() === "")
      return;
    let bracketArray = [];
    let extractArray = [];
    let extractTriple = "";
    for (let i = 0; i < this.word.length; i++) {
      if (this.word.charAt(i) === "[") bracketArray.push(i);
      if (this.word.charAt(i) === "]") {
        extractArray.push(this.word.substring(bracketArray.pop() + 1, i));
      }
    }
    //nullish colaescing - return RHS operand if LHS operand is falsy - null, undefined, 0
    return (extractTriple = extractArray.toString() ?? "");
  }

  score() {
    if (this.word == null || this.word.length < 1 || this.word.trim() === "")
      return 0;
    this.word = this.word
      .concat(this.doubleScore())
      .concat(this.TripleScore())
      .concat(this.TripleScore());
    let wordUpper = this.word.toUpperCase();
    if (this.word.length === 1) return this.scoreMap[wordUpper];
    if (this.word.length > 1)
      return [...wordUpper]
        .map((letter) => this.scoreMap[letter])
        .reduce((acc, letterNum) => (acc = acc + letterNum));
  }
}

// let scrabble = new Scrabble("{h[e][l]{l}o}");
// console.log(scrabble.score());

// let scrabble = new Scrabble("{h[e][l]lo}");
// console.log(scrabble.score());

let scrabble = new Scrabble("");
module.exports = Scrabble;
