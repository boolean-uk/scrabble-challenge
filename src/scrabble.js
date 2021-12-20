const POINTS = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5,
  J: 8, X: 8, Q: 10, Z: 10, '}': 0, '{': 0, '[': 0, ']': 0
};

class Scrabble {
  constructor(string) {
    this.string = string
  }
  score() {
    let sum = 0

    if (this.string === null) {
      return 0
    }

    let word = this.string.toUpperCase()

    for (let n = 0; n < word.length; n++) {
      if (/[A-Z]/.test(word[n])) {
        sum += POINTS[word[n]]
      }
      else if (word[0] === '{' && word[word.length - 1] === '}') {
        return double(word)
      }
      else if (word[0] === '[' && word[word.length - 1] === ']') {
        return triple(word)
      }
      else if (word[n] == '{') {
        sum += POINTS[word[n + 1]]
      }
      else if (word[n] == '[') {
        sum += POINTS[word[n + 1]] * 2
      }
    }
    return sum;
  }
}
function double(word) {
  let sum = 0;
  for (let n of word) {
    sum += POINTS[n] * 2
  }
  return sum;
}
function triple(word) {
  let sum = 0;
  for (let n of word) {
    sum += POINTS[n] * 3
  }
  return sum;
}

module.exports = Scrabble
