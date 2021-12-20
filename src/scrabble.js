const val1 = ["A", "E","I","O","U","L","N","R","S","T","a","e","i","o","u","l","n","r","s","t",];
const val2 = ["D", "d", "G", "g"];
const val3 = ["B", "b", "C", "c", "M", "m", "P", "p"];
const val4 = ["F", "f", "H", "h", "V", "v", "W", "w", "Y", "y"];
const val5 = ["K", "k"];
const val8 = ["J", "j", "X", "x"];
const val10 = ["Q", "q", "Z", "z"];

class Scrabble {
  // Write your implementation here

  construtor(word) {
    this.word = word;
   }

  score() {
    let score = 0

    if (this.word === undefined) {
      return 0
    }

    for (let i = 0; i < this.word.length; i++) {
      if (val1.includes(this.word[i])) {
        score += 1
      }
      if (val2.includes(this.word[i])) {
        score += 2
      }
      if (val3.includes(this.word[i])) {
        score += 3
      }
      if (val4.includes(this.word[i])) {
        score += 4
      }
      if (val5.includes(this.word[i])) {
        score += 5
      }
      if (val8.includes(this.word[i])) {
        score += 8
      }
      if (val10.includes(this.word[i])) {
        score += 10
      }
    }
    return score
  }
}

module.exports = Scrabble
