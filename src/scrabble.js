const pointValuesForLetters = [
  { letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], points: 1 },
  { letters: ['D', 'G'], points: 2 },
  { letters: ['B', 'C', 'M', 'P'], points: 3 },
  { letters: ['F', 'H', 'V', 'W', 'Y'], points: 4 },
  { letters: ['K'], points: 5 },
  { letters: ['J', 'X'], points: 8 },
  { letters: ['Q', 'Z'], points: 10 }
]

// function turns all given letters to capitals
const upperString = (aString) => {
  if (typeof aString === 'string') {
    return aString.toUpperCase()
  } else {
    return ''
  }
}

// look through pointsValuesForLetters array (loop)
//    first object - extract inner Array [letters]
//        includes letter we're looking for?
//           if true - output score and stop looking
//            if false - look at second object
//                  etc...

// look through pointsValuesForLetters array (loop)
const searchMainArray = (arrayToSearch, givenLetter) => {
  const arraySearching = arrayToSearch
  for (let i = 0; i <= arraySearching.length - 1; i++) {
    // each time - extract object at index i
    const innerObject = Object.values(pointValuesForLetters[i])
    // call function that compares, pass innerObject through
    compareGivenLetter(innerObject, givenLetter)
  }
}

// includes letter we're looking for?
const compareGivenLetter = (innerObject, givenLetter) => {
  const lettersArray = innerObject
  let score = 0
  console.log('score before if - ', score)
  console.log('letArr[1] = ', lettersArray[1])
  console.log('letArr[0] = ', lettersArray[0])
  console.log('givLetter = ', givenLetter)
  // does given letter appear in this array?
  if (lettersArray[0].includes(givenLetter)) {
    console.log('found!')
    score += lettersArray[1]
    console.log('score after if - ', score)
  } else {
    score = 0
  }
  return score
}

// // function takes any word and returns scrabble score
function scrabble(word) {
  // const score = 0
  const givenWord = upperString(word)
  console.log('what is givenWord?', givenWord)
  const givenLetter = givenWord.split('')
  searchMainArray(pointValuesForLetters, givenLetter)
}

console.log(scrabble('z'))

module.exports = scrabble

// --- refactor plan ---
// a - combine point and letter arrays into single array
// b - make function for iterating through checks to find letter
