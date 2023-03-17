function scrabble(word) {
  if (typeof word !== 'string') {
    return 0
  }

  const caseSensitivity = word.toUpperCase()
  let charExtract
  let charPoints
  let scrabbleScore = 0
  let doublePoints = 0
  let triplePoints = 0
  const incorrectTokenControl = () => {
    const acceptableChars = [
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
      ']',
      ' ',
      '',
      '.'
    ]
    return acceptableChars.filter((pass) => pass.includes(charExtract))
  }
  for (let i = 0; i < caseSensitivity.length; i++) {
    charExtract = caseSensitivity.charAt(i)
    if (
      charExtract === 'A' ||
      charExtract === 'I' ||
      charExtract === 'E' ||
      charExtract === 'O' ||
      charExtract === 'U' ||
      charExtract === 'L' ||
      charExtract === 'N' ||
      charExtract === 'R' ||
      charExtract === 'S' ||
      charExtract === 'T'
    ) {
      charPoints = 1
    }

    if (charExtract === 'D' || charExtract === 'G') {
      charPoints = 2
    }

    if (
      charExtract === 'B' ||
      charExtract === 'C' ||
      charExtract === 'M' ||
      charExtract === 'P'
    ) {
      charPoints = 3
    }

    if (
      charExtract === 'F' ||
      charExtract === 'H' ||
      charExtract === 'V' ||
      charExtract === 'W' ||
      charExtract === 'Y'
    ) {
      charPoints = 4
    }

    if (charExtract === 'K') {
      charPoints = 5
    }

    if (charExtract === 'J' || charExtract === 'X') {
      charPoints = 8
    }

    if (charExtract === 'Q' || charExtract === 'Z') {
      charPoints = 10
    }

    if (
      charExtract === ' ' ||
      charExtract === '' ||
      charExtract === '{' ||
      charExtract === '}' ||
      charExtract === '[' ||
      charExtract === ']' ||
      charExtract === '.'
    ) {
      charPoints = 0
    }

    if (caseSensitivity.includes(`{${charExtract}}`)) {
      charPoints *= 2
    }

    if (caseSensitivity.includes(`[${charExtract}]`)) {
      charPoints *= 3
    }

    if (
      caseSensitivity.search('{') === 0 &&
      caseSensitivity.search('}') === caseSensitivity.length - 1
    ) {
      charPoints *= 2
    }

    if (
      caseSensitivity.search(/\[/) === 0 &&
      caseSensitivity.search(/\]/) === caseSensitivity.length - 1
    ) {
      charPoints *= 3
    }

    if (charExtract === '{' || charExtract === '}') {
      doublePoints += 1
    }

    if (charExtract === '[' || charExtract === ']') {
      triplePoints += 1
    }

    if (!incorrectTokenControl().includes(charExtract)) {
      return 0
    }

    scrabbleScore += charPoints
  }

  if (doublePoints === 1 || triplePoints === 1) {
    return 0
  } else if (
    caseSensitivity.search(/\[/) === 0 &&
    caseSensitivity.search('{') === 1 &&
    caseSensitivity.search('}') === caseSensitivity.length - 2 &&
    caseSensitivity.search(/\]/) === caseSensitivity.length - 1
  ) {
    return scrabbleScore * 2
  } else if (
    caseSensitivity.search('{') === 0 &&
    caseSensitivity.search(/\[/) === 1 &&
    caseSensitivity.search(/\]/) === caseSensitivity.length - 2 &&
    caseSensitivity.search('}') === caseSensitivity.length - 1
  ) {
    return scrabbleScore * 3
  }

  return scrabbleScore
}

module.exports = scrabble
