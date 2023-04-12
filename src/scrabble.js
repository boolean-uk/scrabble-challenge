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
    if (oneValue.includes(capitalLetter)) {
      letterValue = 1
      if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
        letterValue = 1 * 2
      } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
        letterValue = 1 * 3
      }
      score += letterValue
    } else if (twoValue.includes(capitalLetter)) {
      letterValue = 2
      if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
        letterValue = 2 * 2
      } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
        letterValue = 2 * 3
      }
      score += letterValue
    } else if (threeValue.includes(capitalLetter)) {
      letterValue = 3
      if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
        letterValue = 3 * 2
      } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
        letterValue = 3 * 3
      }
      score += letterValue
    } else if (fourValue.includes(capitalLetter)) {
      letterValue = 4
      if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
        letterValue = 4 * 2
      } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
        letterValue = 4 * 3
      }
      score += letterValue
    } else if (fiveValue.includes(capitalLetter)) {
      letterValue = 5
      if (letters[i] === '{' || '}'){
        if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
          letterValue = 5 * 2
        } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
          letterValue = 5 * 3
        }
      }
      score += letterValue
    } else if (eightValue.includes(capitalLetter)) {
      letterValue = 8
      if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
        letterValue = 8 * 2
      } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
        letterValue = 8 * 3
      }
      score += letterValue
    } else if (tenValue.includes(capitalLetter)) {
      letterValue = 10
      if (letters[i - 1] === '{' && letters[i + 1] === '}' ) {
        letterValue = 10 * 2
      } else if (letters[i - 1] === '[' && letters[i + 1] === ']' ) {
        letterValue = 10 * 3
      }
      score += letterValue
    }
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
