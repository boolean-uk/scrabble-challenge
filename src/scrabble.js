function scrabble(string) {
  if (string === null) {
    return 0
  } else {
    const word = string.toUpperCase()
    let value = 0
    for (let i = 0; i <= word.length; i++) {
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
        value += 1
      } else if (word[i] === 'D' || word[i] === 'G') {
        value += 2
      } else if (
        word[i] === 'B' ||
        word[i] === 'C' ||
        word[i] === 'M' ||
        word[i] === 'P'
      ) {
        value += 3
      } else if (
        word[i] === 'F' ||
        word[i] === 'H' ||
        word[i] === 'V' ||
        word[i] === 'Y'
      ) {
        value += 4
      } else if (word[i] === 'K') {
        value += 5
      } else if (word[i] === 'J' || word[i] === 'X') {
        value += 8
      } else if (word[i] === 'Q' || word[i] === 'Z') {
        value += 10
      }
    }
    return value
  }
}
console.log(scrabble(null))
module.exports = scrabble
