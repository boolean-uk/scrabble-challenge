const pointValuesForLetters = {
  onePoint: {
    letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    points: 1
  },
  twoPoints: {
    letters: ['D', 'G'],
    points: 2
  },
  threePoints: {
    letters: ['B', 'C', 'M', 'P'],
    points: 3
  },
  fourPoints: {
    letters: ['F', 'H', 'V', 'W', 'Y'],
    points: 4
  },
  fivePoints: {
    letters: ['K'],
    points: 5
  },
  eightPoints: {
    letters: ['J', 'X'],
    points: 8
  },
  tenPoints: {
    letters: ['Q', 'Z'],
    points: 10
  }
}

console.log(pointValuesForLetters.onePoint.letters[0])
// console.log(pointValuesForLetters.eightPoints.points)

function upperString(aString) {
  if (typeof aString === 'string') {
    return aString.toUpperCase()
  } else {
    return ''
  }
}

function scrabble(word) {
  const score = 0
  const givenWord = upperString(word)
  const givenLetters = givenWord.split('')
  for (let i = 0; i <= givenLetters.length - 1; i++) {
//     const eachLetter = givenLetters[i]
// call function that takes i and checks against pointsValuesForLetters
  }
  return score + 1
}

// console.log(scrabble('ian'))

module.exports = scrabble

// --- refactor plan ---
// a - combine point and letter arrays into single object
// b - make function for iterating through checks to find letter
