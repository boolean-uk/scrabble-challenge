const referenceArray = [
  [1, 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  [2, 'D', 'G'],
  [3, 'B', 'C', 'M', 'P'],
  [4, 'F', 'H', 'V', 'W', 'Y'],
  [5, 'K'],
  [8, 'J', 'X'],
  [10, 'Q', 'Z']
]

// --- SCORING ---
// keep track of the score
let score = 0
// score some points
const pointScored = (pointValue) => {
  score += pointValue
  return score
}
// score 0 points
const zeroPoints = () => {
  score = 0
  return score
}

// --- INPUT A WORD ---
// // function takes any word and returns scrabble score
function scrabble(word) {
  // word to upper case
  const givenWord = caseSensitive(word)
  // UC word split to array of letters
  const givenLettersArray = splitLetters(givenWord)
  // for each of the given letters, loop ref. array
  letterLookingFor(givenLettersArray)
  console.log('---')
  return score
}

// function checks valid string input, turns all given letters to capitals
const caseSensitive = (aString) => {
  if (typeof aString === 'string') {
    return aString.toUpperCase()
  } else {
    return zeroPoints()
  }
}

// split UC word into Array of Letters
const splitLetters = (givenWord) => {
  const givenLettersArray = givenWord.split('')
  console.log('givenLetters =', givenLettersArray)
  return givenLettersArray
}

// loop through array of given letters
const letterLookingFor = (givenArrayOfLetters) => {
  const letterToCompare = givenArrayOfLetters
  for (let i = 0; i < letterToCompare.length; i++) {
    // for each given letter, loop through the reference array
    for (let j = 0; j <= referenceArray.length - 1; j++) {
      if (referenceArray[j].includes(letterToCompare[i])) {
        // return the associated number of points for that letter
        console.log(
          `${letterToCompare[i]} scored ${referenceArray[j][0]} points!`
        )
        pointScored(referenceArray[j][0])
      }
    }
  }
}

console.log(scrabble('example'))

module.exports = scrabble
