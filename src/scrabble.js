const referenceArray = [
  [1, 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  [2, 'D', 'G'],
  [3, 'B', 'C', 'M', 'P'],
  [4, 'F', 'H', 'V', 'W', 'Y'],
  [5, 'K'],
  [8, 'J', 'X'],
  [10, 'Q', 'Z'],
  [0, '{', '}', '[', ']']
]

let score = 0
let bonusPoint = 0

const pointScored = (pointValue) => {
  score += pointValue
  return score
}

// apply a 2x or 3x multiplier when required
const scoreMultiplier = (multiplier, value) => {
  // score is x3
  if (multiplier === 'tripled') {
    return (value *= 3)
    // score is x2
  } else if (multiplier === 'doubled') {
    console.log('before bob', value)
    const bob = (value *= 2)
    console.log('after', bob)
    return bob
    // score remains x1
  } else {
    return (value *= 1)
  }
}

const checkWordScoreMultiplier = (aWord) => {
  if (aWord.charAt(0) === '{' && aWord.charAt(aWord.length - 1) === '}') {
    scoreMultiplier('doubled', score)
    console.log('before word x2 score', score)
    score *= 2
    console.log('after word x2 score', score)
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

// check if letter has score multiplier ({} = double) ([] = triple)
//    make sure it checks for start && end of letter

const checkLetterScoreMultiplier = (anArrayOfWord, valueOfBonusLetter) => {
  let extraPoint = 0
  for (let k = 0; k <= anArrayOfWord.length - 1; k++) {
    if (anArrayOfWord[k] === '{' && anArrayOfWord[k + 2] === '}') {
      console.log('extra point?', extraPoint)
      console.log('what is valueOFBonLet', valueOfBonusLetter)
      extraPoint = scoreMultiplier('double', valueOfBonusLetter)
      console.log('extra points doubled?', extraPoint)
      bonusPoint += extraPoint
      return
    } else {
      // console.log('no bonus point')
    }
  }
  // for (let k = 0; k <= aWord.length - 1; k++) {
  //   if (aWord[k] === '[' && aWord[k + 2] === ']') {
  //     scoreMultiplier('triple', )
  //     return bonusPoint
  //   }
  // }
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
  console.log('any letter bonus points?', bonusPoint)
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
  for (let i = 0; i <= letterToCompare.length - 1; i++) {
    for (let j = 0; j <= referenceArray.length - 1; j++) {
      if (referenceArray[j].includes(letterToCompare[i])) {
        bonusPoint += checkLetterScoreMultiplier(letterToCompare, referenceArray[j][0])
        console.log(
          `${letterToCompare[i]} scored ${referenceArray[j][0]} points!`
        )
        pointScored(referenceArray[j][0])
      }
    }
  }
  // return referenceArray[j][0]
}

scrabble('{e}')

module.exports = scrabble


// check line 115... 