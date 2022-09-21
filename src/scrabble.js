// Input word here (moved to top for ease of access)
const scrabbleInput = 'P[i]nt'

const pointsMap = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

scrabble(scrabbleInput)

function scrabble(word) {
  // Guard condition for null
  if (word === null) {
    console.log(`Why would you enter null? This gives you 0 points.`)
    return 0
  }

  // If it's not null we move on
  // Setting up initial points tally at 0
  let points = 0

  // Coverting the given word to upper case
  const wordUpperCase = word.toUpperCase()

  // Splitting the given word letter by letter
  const wordSplit = wordUpperCase.split('')

  // Displaying the letters to the user
  console.log(`Your letters are the following: ${wordSplit}`)

  // Awarding points for each letter
  for (const character of wordSplit) {
    points += letterToPoints(character)
  }

  // Checking for double and triple words
  points = doubleAndTripleWordChecker(wordSplit, points)

  // Checking for double and triple letters
  points = doubleAndTripleCharacterChecker(wordSplit, points)

  // Logging the final points tally to the console
  console.log(`This gives you ${points} points in Scrabble!`)

  // Returning the final points tally
  return points
}

function letterToPoints(letter) {
  const value = pointsMap[letter] || 0
  return value
}

function doubleAndTripleCharacterChecker(word, points) {
  const openingCurlyBracketPlace = word.indexOf('{')
  const closingCurlyBracketPlace = word.indexOf('}')
  const doublePowerLetterIndex = openingCurlyBracketPlace + 1

  const openingSquareBracketPlace = word.indexOf('[')
  const closingSquareBracketPlace = word.indexOf(']')
  const triplePowerLetterIndex = openingSquareBracketPlace + 1

  if (closingCurlyBracketPlace - openingCurlyBracketPlace === 2) {
    console.log(
      `Double points for the letter "${word[doublePowerLetterIndex]}"!`
    )
    return (points += letterToPoints(word[doublePowerLetterIndex]))
  } else if (closingSquareBracketPlace - openingSquareBracketPlace === 2) {
    console.log(
      `Triple points for the letter "${word[triplePowerLetterIndex]}"!`
    )
    return (points += letterToPoints(word[triplePowerLetterIndex]) * 2)
  } else {
    return points
  }
}

function doubleAndTripleWordChecker(word, points) {
  if (word[0] === '{' && word[word.length - 1] === '}') {
    console.log('This is a double word!')
    points *= 2
    return points
  } else if (word[0] === '[' && word[word.length - 1] === ']') {
    console.log('This is a triple word!')
    points *= 3
    return points
  } else {
    return points
  }
}

module.exports = scrabble
