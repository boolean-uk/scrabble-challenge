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

// function turns all given letters to capitals
const upperString = (aString) => {
  if (typeof aString === 'string') {
    return aString.toUpperCase()
  } else {
    return ''
  }
}

// function itterates through parent object
const lookThroughObject = (currentLetter) => {
  for (currentLetter in pointValuesForLetters) {
    checkEachPointValueGroup(pointValuesForLetters)
  }
}

// function itterates through arrays of object children
const checkEachPointValueGroup = (currentLetter) => {
  pointValuesForLetters.pointValueGroup.letters.forEach(
    (pointValueGroup, pointValuesForLetters) => {
      console.log('current pointValueGroup looking at -', pointValueGroup)
      checkGivenLetter(currentLetter, pointValuesForLetters)
    }
  )
}

// function checks if letter is in an array
const checkGivenLetter = (letterToFind, numOfPoints) => {
  for (letterToFind in numOfPoints) {
    console.log('found')
    foundLetterReturnPoints()
  }
}

// function returns point value when letter is found
const foundLetterReturnPoints = () => {
  console.log('number of points scored - ')
}

// function takes any word and returns scrabble score
function scrabble(word) {
  const score = 0
  const givenWord = upperString(word)
  console.log('what is givenWord?', givenWord)
  const givenLetters = givenWord.split('')
  console.log('what is givenLetters?', givenLetters)
  for (let i = 0; i <= givenLetters.length - 1; i++) {
    const currentLetter = givenLetters[i]
    console.log('what is currentLetter?', currentLetter)
    lookThroughObject(currentLetter)
  }
  console.log('score -', score)
}

console.log(scrabble('z'))

module.exports = scrabble

// --- refactor plan ---
// a - combine point and letter arrays into single object
// b - make function for iterating through checks to find letter
