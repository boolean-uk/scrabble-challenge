const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const twoPoints = ['D', 'G']
const threePoints = ['B', 'C', 'M', 'P']
const fourPoints = ['F', 'H', 'V', 'W', 'Y']
const fivePoints = ['K']
const eightPoints = ['J', 'X']
const tenPoints = ['Q', 'Z']

const valueOnePoint = 1
const valueTwoPoints = 2
const valueThreePoints = 3
const valueFourPoints = 4
const valueFivePoints = 5
const valueEightPoints = 8
const valueTenPoints = 10

function upperString(aString) {
  if (typeof aString === 'string') {
    return aString.toUpperCase()
  } else {
    return ''
  }
}

function scrabble(word) {
  let score = 0
  const givenWord = upperString(word)
  const givenLetters = givenWord.split('')
  for (let i = 0; i <= givenLetters.length - 1; i++) {
    const eachLetter = givenLetters[i]
    if (onePoint.includes(eachLetter)) {
      score += valueOnePoint
    } else if (twoPoints.includes(eachLetter)) {
      score += valueTwoPoints
    } else if (threePoints.includes(eachLetter)) {
      score += valueThreePoints
    } else if (fourPoints.includes(eachLetter)) {
      score += valueFourPoints
    } else if (fivePoints.includes(eachLetter)) {
      score += valueFivePoints
    } else if (eightPoints.includes(eachLetter)) {
      score += valueEightPoints
    } else if (tenPoints.includes(eachLetter)) {
      score += valueTenPoints
    } else {
      score = 0
    }
  }
  return score
}

// console.log(scrabble('ian'))

module.exports = scrabble

// --- refactor plan ---
// a - combine point and letter arrays into single object
// b - make function for iterating through checks to find letter