// need to make this into objects so i can parse it easier
const letters = [
  ['{', '}', '[', ']'],
  ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  ['D', 'G'],
  ['B', 'C', 'M', 'P'],
  ['F', 'H', 'V', 'W', 'Y'],
  ['K'],
  [],
  [],
  ['J', 'X'],
  [],
  ['Q', 'Z']
]
function valueOfLetter(char) {
  char = char.toUpperCase().charAt(0)
  // value = 1
  for (let value = 0; value < letters.length; value++) {
    if (letters[value].includes(char)) {
      return value
    }
  }
  return -1 // TODO: changed from 0 to -1
}

function valueOfWord(word) {
  let value = 0
  if (word) {
    for (let i = 0; i < word.length; i++) {
      const multiplier = letterMultiplier(word, i)
      value += valueOfLetter(word.charAt(i)) * multiplier
    }
  }
  return value
}

function letterMultiplier(word, index) {
  if (index > 0 && index < word.length - 1) {
    if (word.charAt(index - 1) === '{' && word.charAt(index + 1) === '}') {
      return 2
    }
    if (word.charAt(index - 1) === '[' && word.charAt(index + 1) === ']') {
      return 3
    }
  }
  return 1
}

function checkValidity(word) {
  let countBracketsOpen = 0
  let countBracketsClosed = 0
  let countCurlyBracketsOpen = 0
  let countCurlyBracketsClosed = 0
  for (let i = 0; i < word.length; i++) {
    if (valueOfLetter(word.charAt(i)) === -1) {
      return false
    }
    if (word.charAt(i) === '{') {
      countBracketsOpen++
    } else if (word.charAt(i) === '}') {
      countBracketsClosed++
    } else if (word.charAt(i) === '[') {
      countCurlyBracketsOpen++
    } else if (word.charAt(i) === ']') {
      countCurlyBracketsClosed++
    }
  }

  return (
    countBracketsOpen === countBracketsClosed &&
    countCurlyBracketsOpen === countCurlyBracketsClosed
  )
}

function wordMultiplier(word, multiplier) {
  if (
    (word.charAt(0) === '{' &&
      word.charAt(2) !== '}' &&
      word.charAt(word.length - 1) === '}') ||
    (word.charAt(0) === '{' && word.charAt(2) === '}' && word.length === 3)
  ) {
    multiplier *= 2
    multiplier = wordMultiplier(word.substring(1, word.length - 1), multiplier)
  } else if (
    (word.charAt(0) === '[' &&
      word.charAt(2) !== ']' &&
      word.charAt(word.length - 1) === ']') ||
    (word.charAt(0) === '[' && word.charAt(2) === ']' && word.length === 3)
  ) {
    multiplier *= 3
    multiplier = wordMultiplier(word.substring(1, word.length - 1), multiplier)
  }
  return multiplier
}

function scrabble(word) {
  // checkValidity(word)
  // return valueOfWord(word)

  return checkValidity(word) ? wordMultiplier(word, 1) * valueOfWord(word) : 0
}

module.exports = scrabble
