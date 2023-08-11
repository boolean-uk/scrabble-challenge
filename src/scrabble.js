function letterScore(letter) {
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

function scrabble(word) {
  // write code here
  if (typeof word !== 'string') return 0

  let wordScore = 0

  for (let i = 0; i < word.length; ++i) {
    const letter = word[i]
    if (letter >= 'a' && letter <= 'z') {
      wordScore += letterScore(letter.toUpperCase())
    } else if (letter >= 'A' && letter <= 'Z') {
      wordScore += letterScore(letter)
    }
  }

  return wordScore
}

module.exports = scrabble
