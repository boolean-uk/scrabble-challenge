const LEFT_BRACE = '{'
const RIGHT_BRACE = '}'
const LEFT_SQUARE_BRACE = '['
const RIGHT_SQUARE_BRACE = ']'
function scrabble(word) {
  // write code here

  if (word === null) return 0

  if (!isWordProperlyFormatted(word)) return 0

  let score = 0
  let multiplier = 1
  word = word.toUpperCase()

  for (let i = 0; i < word.length; i++) {
    if (word[i] === LEFT_BRACE) {
      multiplier = multiplier * 2
    }
    if (word[i] === LEFT_SQUARE_BRACE) {
      multiplier = multiplier * 3
    }
    if (word[i] === RIGHT_BRACE) {
      multiplier = multiplier / 2
    }
    if (word[i] === RIGHT_SQUARE_BRACE) {
      multiplier = multiplier / 3
    }

    score = score + getLetterValue(word[i], multiplier)
  }
  return score
}

function getLetterValue(letter, multiplier) {
  let letterValue

  if (
    letter === 'A' ||
    letter === 'E' ||
    letter === 'I' ||
    letter === 'O' ||
    letter === 'U' ||
    letter === 'L' ||
    letter === 'N' ||
    letter === 'R' ||
    letter === 'S' ||
    letter === 'T'
  ) {
    letterValue = 1
  } else if (letter === 'D' || letter === 'G') {
    letterValue = 2
  } else if (
    letter === 'B' ||
    letter === 'C' ||
    letter === 'M' ||
    letter === 'P'
  ) {
    letterValue = 3
  } else if (
    letter === 'F' ||
    letter === 'H' ||
    letter === 'V' ||
    letter === 'W' ||
    letter === 'Y'
  ) {
    letterValue = 4
  } else if (letter === 'K') {
    letterValue = 5
  } else if (letter === 'J' || letter === 'X') {
    letterValue = 8
  } else if (letter === 'Q' || letter === 'Z') {
    letterValue = 10
  } else {
    letterValue = 0
  }

  return letterValue * multiplier
}

function isWordProperlyFormatted(word) {
  let i = 0
  const stack = []

  while (i < word.length) {
    if (word[i] === LEFT_BRACE || word[i] === LEFT_SQUARE_BRACE) {
      stack.push(word[i])
    } else if (
      word[i] === RIGHT_BRACE &&
      stack[stack.length - 1] === LEFT_BRACE
    ) {
      stack.pop()
    } else if (
      word[i] === RIGHT_SQUARE_BRACE &&
      stack[stack.length - 1] === LEFT_SQUARE_BRACE
    ) {
      stack.pop()
    } else if (word[i] === RIGHT_BRACE || word[i] === RIGHT_SQUARE_BRACE) {
      return false
    } else if (!isValidToken(word[i])) {
      return false
    }
    i++
  }
  return stack.length === 0
}

function isValidToken(token) {
  return /^[a-zA-Z0-9{}[\]]+$/.test(token)
}

console.log(scrabble('[{d}og]'))
console.log(scrabble('{d}o[{g}o]a'))
console.log(scrabble('{d}o[{g}[o]]{a'))
console.log(scrabble('{d}o{g}'))
console.log(scrabble('|d|og'))

module.exports = scrabble
