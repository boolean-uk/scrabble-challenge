class Scrabble {
  // Write your implementation here
  constructor (word) {
    this.word = word
  }

  score () {
    if (this.word === '') {
      return 0
    }
    if (this.word === ' \t\n') {
      return 0
    }
    if (this.word === null) {
      return 0
    }
    let score = 0
    const lettersValue1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
    const lettersValue2 = ['D', 'G', 'd', 'g']
    const lettersValue3 = ['B', 'C', 'M', 'P', 'b', 'c', 'm', 'p']
    const lettersValue4 = ['F', 'H', 'V', 'W', 'Y', 'f', 'h', 'v', 'w', 'y']
    const lettersValue5 = ['K', 'k']
    const lettersValue8 = ['J', 'X', 'j', 'x']
    const lettersValue10 = ['Q', 'Z', 'q', 'z']
    // return 1
    // Loop through each of the letter in the word
    for (let i = 0; i < this.word.length; i++) {
      // We check if the letter is in the array lettersValue1
      if (lettersValue1.includes(this.word[i])) {
        // If the letter is in lettersValue1 - add 1 to the score
        score += 1
      }
      // We check if the letter is in the array lettersValue2
      if (lettersValue2.includes(this.word[i])) {
        // If the letter is in lettersValue2 - add 2 to the score
        score += 2
      }
      // We check if the letter is in the array lettersValue3
      if (lettersValue3.includes(this.word[i])) {
        // If the letter is in lettersValue3 - add 3 to the score
        score += 3
      }
      // We check if the letter is in the array lettersValue4
      if (lettersValue4.includes(this.word[i])) {
        // If the letter is in lettersValue4 - add 4 to the score
        score += 4
      }
      // We check if the letter is in the array lettersValue5
      if (lettersValue5.includes(this.word[i])) {
        // If the letter is in lettersValue5 - add 5 to the score
        score += 5
      }
      // We check if the letter is in the array lettersValue8
      if (lettersValue8.includes(this.word[i])) {
        // If the letter is in lettersValue8 - add 8 to the score
        score += 8
      }
      // We check if the letter is in the array lettersValue10
      if (lettersValue10.includes(this.word[i])) {
        // If the letter is in lettersValue10 - add 10 to the score
        score += 10
      }
    }
    return score
  }
}

module.exports = Scrabble
