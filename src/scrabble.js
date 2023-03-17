const referenceArray = [
  [1, 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  [2, 'D', 'G'],
  [3, 'B', 'C', 'M', 'P'],
  [4, 'F', 'H', 'V', 'W', 'Y'],
  [5, 'K'],
  [8, 'J', 'X'],
  [10, 'Q', 'Z']
]

let score = 0
const pointScored = (pointValue) => {
  score += pointValue
  return score
}

// apply a 2x or 3x multiplier when required
const scoreMultiplier = (points, value) => {
  // score is x3
  if (points === 'tripled') {
    return (value *= 3)
    // score is x2
  } else if (points === 'doubled') {
    return (value *= 2)
    // score remains x1
  } else {
    return (value *= 1)
  }
}

// 2 - if there is a double/triple word score declared, double/triple the score output
//     --> double/triple word - recognise start { && end } / start [ && end ]
const checkWordScoreMultiplier = (aWord) => {
  if (aWord.charAt(0) === '{' && aWord.charAt(aWord.length - 1) === '}') {
    scoreMultiplier('doubled', score)
    score *= 2
    return score
  } else if (
    aWord.charAt(0) === '[' &&
    aWord.charAt(aWord.length - 1) === ']'
  ) {
    scoreMultiplier('tripled', score)
    score *= 3
    return score
  } else {
    scoreMultiplier('', score)
    return score
  }
}

function scrabble(word) {
  if (score !== 0) {
    score = 0
  }
  const givenWord = caseSensitive(word)
  const givenLettersArray = splitLetters(givenWord)
  letterLookingFor(givenLettersArray)
  checkWordScoreMultiplier(word)
  console.log('---')
  console.log(`"${word}" scored ${score} points!`)
  return score
}

const caseSensitive = (aString) => {
  if (typeof aString === 'string') {
    return aString.toUpperCase()
  } else {
    return ''
  }
}

const splitLetters = (givenWord) => {
  const givenLettersArray = givenWord.split('')
  console.log('givenLetters =', givenLettersArray)
  return givenLettersArray
}

const letterLookingFor = (givenArrayOfLetters) => {
  const letterToCompare = givenArrayOfLetters
  for (let i = 0; i < letterToCompare.length; i++) {
    for (let j = 0; j <= referenceArray.length - 1; j++) {
      if (referenceArray[j].includes(letterToCompare[i])) {
        console.log(
          `${letterToCompare[i]} scored ${referenceArray[j][0]} points!`
        )
        pointScored(referenceArray[j][0])
      }
    }
  }
}

scrabble('example')

module.exports = scrabble
