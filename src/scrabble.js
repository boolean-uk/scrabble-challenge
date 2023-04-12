function scrabble(givenWord) {
  let score
  if (givenWord === '' || givenWord === null) {
    score = 0
  } else {
    const word = givenWord.toUpperCase()
    score = 0
    for (let i = 0; i < word.length; i++) {
      if (
        word.charAt(i) === 'A' ||
        word.charAt(i) === 'E' ||
        word.charAt(i) === 'I' ||
        word.charAt(i) === 'O' ||
        word.charAt(i) === 'U' ||
        word.charAt(i) === 'L' ||
        word.charAt(i) === 'N' ||
        word.charAt(i) === 'R' ||
        word.charAt(i) === 'S' ||
        word.charAt(i) === 'T'
      ) {
        score += 1
      } else if (word.charAt(i) === 'D' || word.charAt(i) === 'G') {
        score += 2
      } else if (
        word.charAt(i) === 'B' ||
        word.charAt(i) === 'C' ||
        word.charAt(i) === 'M' ||
        word.charAt(i) === 'P'
      ) {
        score += 3
      } else if (
        word.charAt(i) === 'F' ||
        word.charAt(i) === 'H' ||
        word.charAt(i) === 'V' ||
        word.charAt(i) === 'W' ||
        word.charAt(i) === 'Y'
      ) {
        score += 4
      } else if (word.charAt(i) === 'K') {
        score += 5
      } else if (word.charAt(i) === 'J' || word.charAt(i) === 'X') {
        score += 8
      } else if (word.charAt(i) === 'Q' || word.charAt(i) === 'Z') {
        score += 10
      } else {
        score += 0
      }
    }
  }
  return score
}

module.exports = scrabble
