const pointValuesForLetters = [
  [1, 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  [2, 'D', 'G'],
  [3, 'B', 'C', 'M', 'P'],
  [4, 'F', 'H', 'V', 'W', 'Y'],
  [5, 'K'],
  [8, 'J', 'X'],
  [10, 'Q', 'Z']
]
let score = 0

// // function takes any word and returns scrabble score
function scrabble(word) {
  // word to upper case
  const givenWord = caseSensitive(word)
  // UC word split to array of letters
  const givenLetters = splitLetters(givenWord)
  // for each of the given letters, loop ref. array
  letterLookingFor(givenLetters)
}

// function turns all given letters to capitals
const caseSensitive = (aString) => {
  if (typeof aString === 'string') {
    return aString.toUpperCase()
  } else {
    return ''
  }
}

// split UC word into Array of Letters
const splitLetters = (givenWord) => {
  const givenLetters = givenWord.split('')
  console.log('givenLetters =', givenLetters)
  return givenLetters
}

// for each element of givenLetters, loop through reference array
const letterLookingFor = (letterToCompare) => {
  const questionedLetter5 = letterToCompare
  letterToCompare.forEach(() => {
    searchMainArray(pointValuesForLetters, questionedLetter5)
  })
}

// look through pointsValuesForLetters array (loop)
const searchMainArray = (mainArray, questionedLetter4) => {
  const outerArray = mainArray
  const questionedLetter3 = questionedLetter4
  for (let i = 0; i <= outerArray.length - 1; i++) {
    // each time - call function that searches that element (inner array)
    searchInnerArray(outerArray[i], questionedLetter3)
  }
}

// loop through elements of inner array, start idx 1
const searchInnerArray = (subArray, questionedLetter) => {
  const innerArray = subArray
  const questionedLetter1 = questionedLetter
  console.log(innerArray)
  for (let j = 1; j <= innerArray.length - 1; j++) {
    compareInnerArray(innerArray, questionedLetter1)
  }
}

// compare given letter with inner array
const compareInnerArray = (innerArrayElement, questionedLetter2) => {
  const searchingList = innerArrayElement
  console.log('searchingList =', searchingList)
  const lookingFor = questionedLetter2
  console.log('lookingFor =', lookingFor)
  // compare the letter we're searching for with the reference array element we are at
  if (searchingList.includes(lookingFor)) {
    // score some points - point value from array letter found in
    console.log('FOUND!')
    pointScored(innerArrayElement[0])
  } else {
    // score 0 points
    noPoints()
  }
  return score
}

// score some points
const pointScored = (pointValue) => {
  score += pointValue
  return score
}
// score 0 points
const noPoints = () => {
  score = 0
  return score
}

console.log(scrabble('z'))

module.exports = scrabble

// --- refactor plan ---
// a - combine point and letter arrays into single array
// b - make function for iterating through checks to find letter
