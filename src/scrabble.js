function scrabble(word) {
  let points = 0

  if (word === null || word === undefined) {
    points = 0
  } else {
    word = word.toUpperCase()
    // console.log(word)

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
        points += 1
      } else if (word[i] === 'D' || word[i] === 'G') {
        points += 2
      } else if (
        word[i] === 'B' ||
        word[i] === 'C' ||
        word[i] === 'M' ||
        word[i] === 'P'
      ) {
        points += 3
      } else if (
        word[i] === 'F' ||
        word[i] === 'H' ||
        word[i] === 'V' ||
        word[i] === 'W' ||
        word[i] === 'Y'
      ) {
        points += 4
      } else if (word[i] === 'K') {
        points += 5
      } else if (word[i] === 'J' || word[i] === 'X') {
        points += 8
      } else if (word[i] === 'Q' || word[i] === 'Z') {
        points += 10
      } else {
        points += 0
      }
    }
  }

  return points
}

console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
