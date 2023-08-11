function letterScore(letter) {
  letter = letter.toUpperCase()
  if (letter < 'A' || letter > 'Z') return 0

  switch (letter) {
    case 'K':
      return 5
    case 'D':
    case 'G':
      return 2
    case 'J':
    case 'X':
      return 8
    case 'Q':
    case 'Z':
      return 10
    case 'B':
    case 'C':
    case 'M':
    case 'P':
      return 3
    case 'F':
    case 'H':
    case 'V':
    case 'W':
    case 'Y':
      return 4
    default:
      return 1
  }
}

function matchBrackets(word, leftSymbol, rightSymbol) {
  return (
    word[0] === leftSymbol &&
    word[2] !== rightSymbol &&
    word[word.length - 1] === rightSymbol
  )
}

function isDoubleW(word) {
  return matchBrackets(word, '{', '}')
}

function isTripleW(word) {
  return matchBrackets(word, '[', ']')
}

function scrabble(word) {
  if (typeof word !== 'string') return 0

  let wordScore = 0
  let isDoubleWord = isDoubleW(word)
  let isTripleWord = isTripleW(word)
  let isDoubleLetter = false
  let isTripleLetter = false
  let start = 0
  let end = word.length

  // check if word is both double and triple
  if (isDoubleWord) {
    isTripleWord = isTripleW(word.slice(1, -1))
  } else if (isTripleWord) {
    isDoubleWord = isDoubleW(word.slice(1, -1))
  }
  if (isDoubleWord) {
    ++start
    --end
  }
  if (isTripleWord) {
    ++start
    --end
  }

  for (let i = start; i < end; ++i) {
    let letter = word[i]
    let score = 0

    if (letter === ']' || letter === '}') return 0
    if (letter === '|' && word[i + 2] === '|') return 0

    // check for double or triple letter
    if (letter === '{') {
      if (word[i + 2] !== '}') return 0
      // double letter detected
      isDoubleLetter = true
      letter = word[i + 1]
    } else if (letter === '[') {
      if (word[i + 2] !== ']') return 0
      // triple letter detected
      isTripleLetter = true
      letter = word[i + 1]
    }

    score = letterScore(letter)

    if (isDoubleLetter) {
      wordScore += 2 * score
      i += 2 // get to the end of double letter notation
      isDoubleLetter = false
    } else if (isTripleLetter) {
      wordScore += 3 * score
      i += 2 // get to the end of triple letter notation
      isTripleLetter = false
    } else {
      wordScore += score
    }
  }

  if (isDoubleWord) wordScore *= 2
  if (isTripleWord) wordScore *= 3
  return wordScore
}

module.exports = scrabble
