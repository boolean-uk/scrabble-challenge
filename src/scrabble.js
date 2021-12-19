const letters = {
  lettersA: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  letterB: ['D', 'G'],
  letterC: ['B', 'C', 'M', 'P'],
  lettersD: 
}




class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.word = word
  }

  score() {
    let count = 0
    if (this.word === null || this.word.length === '' || this.word === ' \t\n') {
  }
  for (let i = 1; i < this.word.length; i++) {
  if (letters.lettersA.includes(this.word[i]) )
  count += 1  
}
}








// let scrabble = new Scrabble('')
//scrabble.score() // => 0


module.exports = Scrabble
letters = letters
