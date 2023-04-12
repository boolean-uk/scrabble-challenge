//Variables
const oneValue = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const twoValue = ['D', 'G']
const threeValue = ['B', 'C', 'M', 'P']
const fourValue = ['F', 'H', 'V', 'W', 'Y']
const fiveValue = ['K']
const eightValue = ['J', 'X']
const tenValue = ['Q', 'Z']

// Functions
const checkInvalidWord = (word) => {
  if (word === ''||
      word === undefined  ||
      word === null ||
      word.includes('{') && !word.includes('}') ||
      word.includes('}') && !word.includes('{') ||
      word.includes('[') && !word.includes(']') ||
      word.includes(']') && !word.includes('[') ||
      word.includes('|')) {
        return true
  }
}

// get letter value from array
const getLetterValue = (letter) => {
  let letterValue = 0
  if (oneValue.includes(letter)) {
    letterValue = 1
  } else if (twoValue.includes(letter)) {
    letterValue = 2
  } else if (threeValue.includes(letter)) {
    letterValue = 3
  } else if (fourValue.includes(letter)) {
    letterValue = 4
  } else if (fiveValue.includes(letter)) {
    letterValue = 5
  } else if (eightValue.includes(letter)) {
    letterValue = 8
  } else if (tenValue.includes(letter)) {
    letterValue = 10
  }
  return letterValue
}


const wordMultiplier = (word) => {
  let multiplier = 1
  if ((word.substring(0, 2) === '[{') && (word.substring(word.length - 2, word.length) === '}]')) {
    multiplier = 6
  } else if (word[0] === '{' && word[word.length - 1] === '}' && word[2] !== '}') {
    multiplier = 2
  } else if (word[0] === '[' && word[word.length - 1] === ']' && word[2] !== ']') {
    multiplier = 3
  }
  return multiplier
}

function getScore(word) {
  let score = 0
  let letters = word.split('')
  for (let i = 0; i < letters.length; i++) {
    let capitalLetter = letters[i].toUpperCase()
    let value = getLetterValue(capitalLetter)
    let multiplier = 1
    if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
      multiplier = 2
    } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
      multiplier = 3
    }
    score += (value * multiplier)
  }
  let multiplier = wordMultiplier(word)
  return score * multiplier
}


// Main function
function scrabble(word) {
  if (checkInvalidWord(word)) {
    return score = 0
  } else {
  return getScore(word)
  }
}

module.exports = scrabble
