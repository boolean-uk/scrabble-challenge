scrabble('P{i}nt')

function scrabble(word) {
  // Guard condition for null
  if (word === null) {
    console.log('Why would you enter null?')
    return 0
  }
  // If it's not null we move on
  const wordUpperCase = word.toUpperCase() // Coverting the given word to upper case
  const wordSplit = wordUpperCase.split('') // Splitting the given word letter by letter
  console.log(`Your letters are the following: ${wordSplit}`) // Displaying the letters to the user
  let points = 0 // Setting up initial points tally at 0
  for (const i of wordSplit) {
    // Awarding points
    points = letterToPoints(i, points)
  }
  if (word[0] === '{' && word[word.length - 1] === '}') {
    console.log('This is a double word!')
    points *= 2
  } else if (word[0] === '[' && word[word.length - 1] === ']') {
    console.log('This is a triple word!')
    points *= 3
  }
  function isOpeningCurlyBracket(element) {
    if (element === '{') {
      return true
    } else {
      return false
    }
  }
  function isClosingCurlyBracket(element) {
    if (element === '}') {
      return true
    } else {
      return false
    }
  }
  const openingCurlyBracketPlace = wordSplit.findIndex(isOpeningCurlyBracket)
  const closingCurlyBracketPlace = wordSplit.findIndex(isClosingCurlyBracket)
  const powerLetter = openingCurlyBracketPlace + 1

  if (closingCurlyBracketPlace - openingCurlyBracketPlace === 2) {
    console.log(
      'We know this letter is in curly brackets and we will need to do something with it in the future: ' +
        wordSplit[powerLetter]
    )
  }
  console.log(`This gives you ${points} points in Scrabble!`)
  return points
}

function letterToPoints(i, points) {
  if (
    // letters for 1 point below
    i === 'A' ||
    i === 'E' ||
    i === 'I' ||
    i === 'O' ||
    i === 'U' ||
    i === 'L' ||
    i === 'N' ||
    i === 'R' ||
    i === 'S' ||
    i === 'T'
  ) {
    points += 1
  } else if (
    // letters for 2 points below
    i === 'D' ||
    i === 'G'
  ) {
    points += 2
  } else if (
    // letters for 3 points below
    i === 'B' ||
    i === 'C' ||
    i === 'M' ||
    i === 'P'
  ) {
    points += 3
  } else if (
    // letters for 4 points below
    i === 'F' ||
    i === 'H' ||
    i === 'V' ||
    i === 'W' ||
    i === 'Y'
  ) {
    points += 4
  } else if (
    // letters for 5 points below
    i === 'K'
  ) {
    points += 5
  } else if (
    // letters for 8 points below
    i === 'J' ||
    i === 'X'
  ) {
    points += 8
  } else if (
    // letters for 10 points below
    i === 'Q' ||
    i === 'Z'
  ) {
    points += 10
  }
    return points
}

module.exports = scrabble
