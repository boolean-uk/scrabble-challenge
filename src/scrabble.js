const createLetterValue = () => {
  const letterScoreTable = {
    ...Object.fromEntries(
      ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].map((key) => [key, 1])
    ),
    D: 2,
    G: 2,
    ...Object.fromEntries(['B', 'C', 'M', 'P'].map((key) => [key, 3])),
    ...Object.fromEntries(['F', 'H', 'V', 'W', 'Y'].map((key) => [key, 4])),
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }
  return letterScoreTable
}

const getLetterScore = (letter, multiplier, letterScoreTable) => {
  if (letterScoreTable[letter.toUpperCase()] !== undefined)
    return letterScoreTable[letter.toUpperCase()] * multiplier
  else return 0
}

const manageWord = (word, letterScoreTable) => {
  let wordScore = 0
  let multiplier = 1
  let bracketOpen = false
  let curlyOpen = false
  for (let i = 0; i < word.length; i++) {
    if (
      (word[i] === `}` && curlyOpen === false) ||
      (word[i] === `]` && bracketOpen === false)
    )
      return 0

    let letterValue = 0
    switch (word[i]) {
      case `{`:
        curlyOpen = true
        multiplier *= 2
        break
      case `}`:
        curlyOpen = false
        multiplier /= 2
        break
      case `[`:
        bracketOpen = true
        multiplier *= 3
        break
      case `]`:
        bracketOpen = false
        multiplier /= 3
        break
      default:
        letterValue = getLetterScore(word[i], multiplier, letterScoreTable)
        if (letterValue === 0) return 0
        wordScore += letterValue
        break
    }
  }
  if (curlyOpen || bracketOpen) return 0
  return wordScore
}

function scrabble(word) {
  let wordScore = 0
  const letterScoreTable = createLetterValue()
  if (word === null) {
    return 0
  }
  wordScore = manageWord(word, letterScoreTable)
  return wordScore
}

module.exports = scrabble
