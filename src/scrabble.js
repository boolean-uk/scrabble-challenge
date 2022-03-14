const letterValue = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}
class Scrabble {
  // Write your implementation here
  constructor (word) {
    this.word = word;
  }

  score () { 
    if (this.word === null || this.word === '') {return 0}
    // \t = tab - horizontal whitespace used for indentation
    // \n = new line
    let totalScore = 0;
    let multiple = 1;
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i].toLowerCase();
      const scoreOfLetter = letterValue[letter] || 0
      if (letter === "["){
        multiple = 2 * multiple;
      }
      if (letter === "{"){
        multiple = 3 * multiple;        
      }
      if (letter === "]"){
        multiple = multiple / 2;        
      }
      if (letter === "}"){
        multiple = multiple / 3;        
      }
      totalScore += (scoreOfLetter * multiple);
    } 
    return totalScore;
  }
}
module.exports = Scrabble

    /*
  score () {

    if ((this.word === null || this.word.includes('\t') || this.word.includes('\n') || this.word === '')) { return 0 }
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === "[" && this.word[i + 2] === "]") {
        console.log("double letter");
        if (this.word[i] === "["){
          continue
        }
        if (this.word[i + 2] === "]"){
          continue
        }
        totalScore += letterValue[this.word[i].toLowerCase().toString()];
        totalScore += letterValue[this.word[i + 1].toLowerCase()];
        return totalScore;
      }
      if (this.word[i] === "{" && this.word[i + 2] === "}") {
        console.log("tripple letter");

        totalScore += letterValue[this.word[i].toLowerCase().toString()];
        totalScore += (letterValue[this.word[i + 1].toLowerCase()] + letterValue[this.word[i + 1].toLowerCase()])
        return totalScore;
      }
      totalScore += letterValue[this.word[i].toLowerCase().toString()]
    }
    if (this.word[0] === "[" && this.word[this.word.length - 1] === "]") {
      console.log("double score")
      return (totalScore * 2)
    }
    if (this.word[0] === "{" && this.word[this.word.length - 1] === "}") {
      console.log("tripple score")
      return (totalScore * 3)
    }
    return totalScore
  }
  */
