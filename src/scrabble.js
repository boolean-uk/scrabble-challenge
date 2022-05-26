class Scrabble {
  // Write your implementation here

  constructor(word) {
    this.word = word
  }

  score() {
    let totalScore = 0

    const letterValues = {
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      l: 1,
      n: 1,
      r: 1,
      s: 1,
      t: 1,
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
      d: 2,
      g: 2,
      D: 2,
      G: 2,
      b: 3,
      c: 3,
      m: 3,
      p: 3,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      f: 4,
      h: 4,
      v: 4,
      w: 4,
      y: 4,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      k: 5,
      K: 5,
      j: 8,
      x: 8,
      J: 8,
      X: 8,
      q: 10,
      z: 10,
      Q: 10,
      Z: 10,
      '{': 0,
      '}': 0,
      '[': 0,
      ']': 0,
      ' ': 0,
      '/': 0,
      '\\': 0,
      '\t': 0,
      '\n': 0
    }

    //  to test for null/undefined
    if (this.word === null || this.word === undefined || this.word === ' ') {
      this.word = 0
    }

    // for loop checking word letters against keys and adding key values to totalScore
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
        totalScore += letterValues[this.word[i]] * 2
      } else if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
        totalScore += letterValues[this.word[i]] * 3
      } else totalScore += letterValues[this.word[i]]
    }

    // for loop to make totalScore = 0 if there's any space in the string
    for (let j = 0; j < this.word.length; j++) {
      if (this.word[j] === ' ') {
        totalScore *= 0
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

const scrabble = new Scrabble(' \t\n')
console.log('the scrabble word is: ', scrabble.word)
console.log('the scrabble score is: ', scrabble.score())

module.exports = Scrabble
