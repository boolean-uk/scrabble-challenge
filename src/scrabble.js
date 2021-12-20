const onePoint= [
    "A",
    "E",
    "I",
    "O",
    "U",
    "L",
    "N",
    "R",
    "S",
    "T",
    "a",
    "e",
    "i",
    "o",
    "u",
    "l",
    "n",
    "r",
    "s",
    "t",
  ];
  const twoPoints= ["D", "G", "d", "g"];
  const threePoints= ["B", "C", "M", "P", "b", "c", "m", "p"];
  const fourPoints= ["F", "H", "V", "W", "Y", "f", "h", "v", "w", "y"];
  const fivePoints= ["K", "k"];
  const eightPoints= ["J", "X", "j", "x"];
  const tenPoints= ["Q", "Z", "q", "z"];

let score = 0

class Scrabble {
  // Write your implementation here

  constructor(word) {
    this.word = word;
    console.log(word);
  }

  score() {
    for (let i = 0; i < this.word.length; i++) {
      if (onePoint.includes(this.word[i])) {
        score = score + 1;
      }
      else if (twoPoints.includes(this.word[i])) {
        score = score + 2;
      }
      else if (threePoints.includes(this.word[i])) {
        score = score + 3;
      }
      else if (fourPoints.includes(this.word[i])) {
        score = score + 4;
      }
      else if (fivePoints.includes(this.word[i])) {
        score = score + 5;
      }
      else if (eightPoints.includes(this.word[i])) {
        score = score + 8;
      }
      else if (tenPoints.includes(this.word[i])) {
        score = score + 10;
      } else {
        score = score + 0;
      } 
    } return score ; 
  }
}

module.exports = Scrabble;
