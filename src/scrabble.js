class Scrabble {
  // Write your implementation here

  constructor(word) {
    this.word = word
  }

  score() {
    let totalScore = 0

    //  to test for null/undefined
    if (this.word === null || this.word === undefined) {
      this.word = 0
    }

    // for loop to test every letter in the word and add their value to the total score, checks if the letter is in {} or []
    for (let i = 0; i < this.word.length; i++) {
      if (
        this.word[i] === 'a' ||
        this.word[i] === 'e' ||
        this.word[i] === 'i' ||
        this.word[i] === 'o' ||
        this.word[i] === 'u' ||
        this.word[i] === 'l' ||
        this.word[i] === 'n' ||
        this.word[i] === 'r' ||
        this.word[i] === 's' ||
        this.word[i] === 't' ||
        this.word[i] === 'A' ||
        this.word[i] === 'E' ||
        this.word[i] === 'I' ||
        this.word[i] === 'O' ||
        this.word[i] === 'U' ||
        this.word[i] === 'L' ||
        this.word[i] === 'N' ||
        this.word[i] === 'R' ||
        this.word[i] === 'S' ||
        this.word[i] === 'T'
      ) {
        if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
          totalScore += 2
        } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
          totalScore += 3
        } else totalScore += 1
      }

      if (
        this.word[i] === 'd' ||
        this.word[i] === 'g' ||
        this.word[i] === 'D' ||
        this.word[i] === 'G'
      ) {
        if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
          totalScore += 4
        } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
          totalScore += 6
        } else totalScore += 2
      }

      if (
        this.word[i] === 'b' ||
        this.word[i] === 'c' ||
        this.word[i] === 'm' ||
        this.word[i] === 'p' ||
        this.word[i] === 'B' ||
        this.word[i] === 'C' ||
        this.word[i] === 'M' ||
        this.word[i] === 'P'
      ) {
        if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
          totalScore += 6
        } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
          totalScore += 9
        } else totalScore += 3
      }

      if (
        this.word[i] === 'f' ||
        this.word[i] === 'h' ||
        this.word[i] === 'v' ||
        this.word[i] === 'w' ||
        this.word[i] === 'y' ||
        this.word[i] === 'F' ||
        this.word[i] === 'H' ||
        this.word[i] === 'V' ||
        this.word[i] === 'W' ||
        this.word[i] === 'Y'
      ) {
        if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
          totalScore += 8
        } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
          totalScore += 12
        } else totalScore += 4
      }

      if (this.word[i] === 'k' || this.word[i] === 'K') {
        if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
          totalScore += 10
        } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
          totalScore += 15
        } else totalScore += 5
      }

      if (
        this.word[i] === 'j' ||
        this.word[i] === 'x' ||
        this.word[i] === 'J' ||
        this.word[i] === 'X'
      ) {
        if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
          totalScore += 16
        } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
          totalScore += 24
        } else totalScore += 8
      }

      if (
        this.word[i] === 'q' ||
        this.word[i] === 'z' ||
        this.word[i] === 'Q' ||
        this.word[i] === 'Z'
      ) {
        if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
          totalScore += 20
        } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
          totalScore += 30
        } else totalScore += 10
      }
    }

    // if statements to test if the whole word is in {} or [] and then doubling/tripling the total if so
    if (
      this.word[0] === '{' &&
      this.word[this.word.length - 1] === '}' &&
      this.word[2] !== '}'
    ) {
      totalScore *= 2
    } else if (
      this.word[0] === '[' &&
      this.word[this.word.length - 1] === ']' &&
      this.word[2] !== ']'
    ) {
      totalScore *= 3
    }

    return totalScore
  }
}

const scrabble = new Scrabble('[street]')
console.log('the scrabble word is: ', scrabble.word)
console.log('the scrabble score is: ', scrabble.score())

module.exports = Scrabble
