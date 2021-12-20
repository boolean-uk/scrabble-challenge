const letters = {
  lettersA: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  lettersB: ['D', 'G', 'd', 'g'],
  lettersC: ['B', 'C', 'M', 'P', 'b', 'c', 'm', 'p'],
  lettersD: ['F', 'H', 'V', 'W', 'Y', 'f', 'h', 'v', 'w', 'y'],
  lettersE: ['K', 'k'],
  lettersF: ['J', 'X', 'j', 'x'],
  lettersG: ['Q', 'Z', 'q', 'z']
}


class Scrabble {
  // Write your implementation here
  constructor(word) {
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
      if (letters.lettersD.includes(this.word[i])) {
        count = count + 4
      }
      if (letters.lettersE.includes(this.word[i])) {
        count = count + 5
      }
      if (letters.lettersF.includes(this.word[i])) {
        count = count + 8
      }
      if (letters.lettersG.includes(this.word[i])) {
        count = count + 10
      }
    }
    return count
  }
}

//function doubleLetters () {
  //let doubleDigits = []
 // for (let i = 0; i < doubleDigits)
//}


module.exports = Scrabble