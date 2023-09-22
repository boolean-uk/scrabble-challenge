// write code here
const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const twoPoint = ['D', 'G']
const threePoint = ['B', 'C', 'M', 'P']
const fourPoint = ['F', 'H', 'V', 'W', 'Y']
const fivePoint = ['K']
const eightPoint = ['J', 'X']
const tenPoint = ['Q', 'Z']
let scorePoint = 0

const scrabble = (word) => {
  let wordScore = 0
  if (word === null || word === '' || word === ' \t\n') {
    return 0
  } else {
    const wordArray = word.toUpperCase().split('')
    wordArray.forEach((letter) => {
      if (onePoint.includes(letter)) {
        scorePoint = 1
      } else if (twoPoint.includes(letter)) {
        scorePoint = 2
      } else if (threePoint.includes(letter)) {
        scorePoint = 3
      } else if (fourPoint.includes(letter)) {
        scorePoint = 4
      } else if (fivePoint.includes(letter)) {
        scorePoint = 5
      } else if (eightPoint.includes(letter)) {
        scorePoint = 8
      } else if (tenPoint.includes(letter)) {
        scorePoint = 10
      }
      wordScore += scorePoint
    })
    return wordScore
  }
}
module.exports = scrabble
