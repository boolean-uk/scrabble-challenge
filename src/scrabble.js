const letters = {
  lettersA: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  lettersB: ['D', 'G'],
  lettersC: ['B', 'C', 'M', 'P'],
  lettersD: ['F', 'H', 'V', 'W', 'Y'],
  lettersE: ['K'],
  lettersF: ['J', 'X'],
  lettersG: ['Q', 'Z']
}




class Scrabble {
  // Write your implementation here
  constructor (word) {
    this.word = word
  }

  score() {
    let count = 0
    if (this.word === null || this.word.length === '' || this.word === ' \t\n') {
      return count
    }
    for (let i = 0; i < this.word.length; i++) {
      if (letters.lettersA.includes(this.word[i])) {
        count += 1
      }
      if (letters.lettersB.includes(this.word[i])) {
        count += 2
      }
      if (letters.lettersC.includes(this.word[i])) {
        count += 3
      }
    }
    return count
  }
}







// let scrabble = new Scrabble('')
//scrabble.score() // => 0


module.exports = Scrabble