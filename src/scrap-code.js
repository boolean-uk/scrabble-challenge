const array1 = [
  { l: ['a', 'b', 'c'], p: 1 },
  { l: ['d', 'e', 'f'], p: 2 },
  { l: ['g', 'h', 'i'], p: 3 }
]

let score = 0

function scrabble(givenWord) {
  console.log('what is the currentScore and score? ', score)
  searchArray1(givenWord)
  return score
}

// itterate through array1
const searchArray1 = (lookingFor) => {
  const questionedLetter = lookingFor
  console.log('questionedLetter -', questionedLetter)
  for (let i = 0; i <= array1.length - 1; i++) {
    const idx = i
    findObject(idx, questionedLetter)
  }
}

// finds and returns object at idx
const findObject = (idx, questionedLetter) => {
  const letters = array1[idx]
  const innerObject = Object.values(letters)
  console.log(
    'what are the letter and point values being checked? -',
    innerObject
  )
  checkLetter(innerObject[0], questionedLetter)
}

// compare array looking at with letter questioned
const checkLetter = (groupedLetters, questionedLetter) => {
  const groupedLettersLookingAt = groupedLetters.toString()
  if (groupedLettersLookingAt.includes(questionedLetter)) {
    console.log('found')
    score += 10
    console.log('current score ', score)
  } else {
    score = 0
  }
}

console.log('scrabble! -', scrabble('a'))
