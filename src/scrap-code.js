const array1 = [
  { l: ['a', 'b', 'c'], p: 1 },
  { l: ['d', 'e', 'f'], p: 2 },
  { l: ['g', 'h', 'i'], p: 3 }
]

let score = 0

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

const checkLetter = (groupedLetters, questionedLetter) => {
  const groupedLettersLookingAt = groupedLetters.toString()
  console.log('what is groupedLettersLookingAt?', groupedLettersLookingAt)
  console.log(
    'what is questioned Letter while checking Letter? ',
    questionedLetter
  )
  console.log('what is typeof grouped letters element? ', typeof groupedLettersLookingAt[0])
  console.log('type of questioned letter -', typeof questionedLetter)
  if (groupedLettersLookingAt.includes(questionedLetter)) {
    console.log('found')
    score += 1
    console.log('current score ', score)
  } else {
    score = 0
  }
  return score
}

const scrabble = (givenWord) => {
  searchArray1(givenWord)
  return score
}

console.log('scrabble! -', scrabble('a'))
