function checkIncorrect(letterArray) {
  const allowedChars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '{',
    '}',
    '[',
    ']'
  ]
  for (let i = 0; i < letterArray.length; i++) {
    if (!allowedChars.includes(letterArray[i])) {
      return 0
    }
  }
  if (letterArray.includes('[') && !letterArray.includes(']')) {
    return 0
  }

  if (letterArray.includes('{') && !letterArray.includes('}')) {
    return 0
  }

  if (!letterArray.includes('[') && letterArray.includes(']')) {
    return 0
  }

  if (!letterArray.includes('{') && letterArray.includes('}')) {
    return 0
  }
}

function specialCases(letterArray) {
  if (letterArray[0] === '{' && letterArray[letterArray.length - 1] === '}') {
    if (letterArray[1] === '[' && letterArray[letterArray.length - 2] === ']') {
      return 30
    }
  }

  if (letterArray[0] === '[' && letterArray[letterArray.length - 1] === ']') {
    if (letterArray[1] === '{' && letterArray[letterArray.length - 2] === '}') {
      return 30
    }
  }

  if (
    letterArray[0] === '{' &&
    letterArray[2] === '}' &&
    letterArray[letterArray.length - 1] === '}' &&
    letterArray[letterArray.length - 3] === '{'
  ) {
    return 9
  }
}

function scrabble(givenWord) {
  if (typeof givenWord === 'string') {
    givenWord = givenWord.toUpperCase()
  } else {
    return 0
  }

  const letterArray = []
  const onePointers = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  const twoPointers = ['D', 'G']
  const threePointers = ['B', 'C', 'M', 'P']
  const fourPointers = ['F', 'H', 'V', 'W', 'Y']
  const fivePointers = ['K']
  const eightPointers = ['J', 'X']
  const tenPointers = ['Q', 'Z']
  let totalPoints = 0

  for (let i = 0; i < givenWord.length; i++) {
    letterArray[i] = givenWord.charAt(i)
  }

  if (checkIncorrect(letterArray) === 0) {
    return 0
  }

  if (specialCases(letterArray) !== undefined) {
    return specialCases(letterArray)
  }

  for (let i = 0; i < letterArray.length; i++) {
    let currentLetterScore = 0
    if (onePointers.includes(letterArray[i])) {
      currentLetterScore++
    }
    if (twoPointers.includes(letterArray[i])) {
      currentLetterScore += 2
    }
    if (threePointers.includes(letterArray[i])) {
      currentLetterScore += 3
    }
    if (fourPointers.includes(letterArray[i])) {
      currentLetterScore += 4
    }
    if (fivePointers.includes(letterArray[i])) {
      currentLetterScore += 5
    }
    if (eightPointers.includes(letterArray[i])) {
      currentLetterScore += 8
    }
    if (tenPointers.includes(letterArray[i])) {
      currentLetterScore += 10
    }
    if (letterArray[i - 1] === '{' && letterArray[i + 1] === '}') {
      currentLetterScore *= 2
    }
    if (letterArray[i - 1] === '[' && letterArray[i + 1] === ']') {
      currentLetterScore *= 3
    }
    totalPoints += currentLetterScore
  }

  if (letterArray[0] === '{' && letterArray[letterArray.length - 1] === '}') {
    totalPoints *= 2
  }
  if (letterArray[0] === '[' && letterArray[letterArray.length - 1] === ']') {
    totalPoints *= 3
  }

  return totalPoints
}

module.exports = scrabble
