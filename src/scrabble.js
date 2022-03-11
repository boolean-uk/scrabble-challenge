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
    if ((this.word === ''|| this.word.includes('\t') || this.word.includes('\n') || this.word === null)) {return 0} 
    let totalScore = 0;
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i].toLowerCase();
      totalScore += letterValue[letter];
    } 
    return totalScore;
  }
}
module.exports = Scrabble
