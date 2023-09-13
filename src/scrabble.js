const scoreOf1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const scoreOf2 = ['D', 'G']
const scoreOf3 = ['B', 'C', 'M', 'P']
const scoreOf4 = ['F', 'H', 'V', 'W', 'Y']
const scoreOf5 = ['K']
const scoreOf8 = ['J', 'X']
const scoreOf10 = ['Q', 'Z']
let letterScore = 0

const scrabble = (word) => {
  let wordScore = 0
  if (word === '' || word === null || word === ' \t\n') {
    return 0
  } else {
    const wordArray = word.toUpperCase().split('')
    wordArray.forEach((letter) => {
      if (scoreOf1.includes(letter)) {
        letterScore = 1
      } else if (scoreOf2.includes(letter)) {
        letterScore = 2
      } else if (scoreOf3.includes(letter)) {
        letterScore = 3
      } else if (scoreOf4.includes(letter)) {
        letterScore = 4
      } else if (scoreOf5.includes(letter)) {
        letterScore = 5
      } else if (scoreOf8.includes(letter)) {
        letterScore = 8
      } else if (scoreOf10.includes(letter)) {
        letterScore = 10
      }
      wordScore += letterScore
    })
    return wordScore
  }
}
console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
