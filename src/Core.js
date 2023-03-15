/**
 * create a function called scrabble
 * scrabble needs to take 1 parameter, a word (only a string)
 * look at each letter in the word and identify it's value
 * find the total sum of all the letters
 */

const core = (word) => {
  word = word.toUpperCase()
  let sum = 0
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === 'A' ||
      word[i] === 'E' ||
      word[i] === 'I' ||
      word[i] === 'O' ||
      word[i] === 'U' ||
      word[i] === 'L' ||
      word[i] === 'N' ||
      word[i] === 'R' ||
      word[i] === 'S' ||
      word[i] === 'T'
    ) {
      sum += 1
    }
    if (word[i] === 'D' || word[i] === 'G') {
      sum += 2
    }
    if (
      word[i] === 'B' ||
      word[i] === 'C' ||
      word[i] === 'M' ||
      word[i] === 'P'
    ) {
      sum += 3
    }
    if (
      word[i] === 'F' ||
      word[i] === 'H' ||
      word[i] === 'V' ||
      word[i] === 'W' ||
      word[i] === 'Y'
    ) {
      sum += 4
    }
    if (word[i] === 'K') {
      sum += 5
    }
    if (word[i] === 'J' || word[i] === 'X') {
      sum += 8
    }
    if (word[i] === 'Q' || word[i] === 'Z') {
      sum += 10
    }
  }
  return sum
}

module.exports = core