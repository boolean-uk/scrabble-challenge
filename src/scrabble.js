function scrabble(word) {
  let score = 0
  if (typeof word !== 'string' || word.includes('|') === true) {
    return (score = 0)
  } else {
    const upperCaseWord
    upperCaseWord = word.toUpperCase()
    const arrayOfWord = [...upperCaseWord]
    if (
      arrayOfWord.includes('{') === false &&
      arrayOfWord.includes('}') === true
    ) {
      return (score = 0)
    }
    if (
      arrayOfWord.includes('{') === true &&
      arrayOfWord.includes('}') === false
    ) {
      return (score = 0)
    }
    if (
      arrayOfWord.includes('[') === false &&
      arrayOfWord.includes(']') === true
    ) {
      return (score = 0)
    }
    if (
      arrayOfWord.includes('[') === true &&
      arrayOfWord.includes(']') === false
    ) {
      return (score = 0)
    }
    if (
      arrayOfWord.includes('[') === true &&
      arrayOfWord.includes(']') === true
    ) {
      const tripleUpElement = arrayOfWord.slice(
        arrayOfWord.indexOf('[') + 1,
        arrayOfWord.indexOf(']')
      )
      arrayOfWord.push(...tripleUpElement, ...tripleUpElement)
    }
    if (
      arrayOfWord.includes('{') === true &&
      arrayOfWord.includes('}') === true
    ) {
      const doubleUpElement = arrayOfWord.slice(
        arrayOfWord.indexOf('{') + 1,
        arrayOfWord.indexOf('}')
      )
      arrayOfWord.push(...doubleUpElement)
    }

    for (let i = 0; i < arrayOfWord.length; i++) {
      if (
        arrayOfWord[i] === 'A' ||
        arrayOfWord[i] === 'E' ||
        arrayOfWord[i] === 'I' ||
        arrayOfWord[i] === 'O' ||
        arrayOfWord[i] === 'U' ||
        arrayOfWord[i] === 'L' ||
        arrayOfWord[i] === 'N' ||
        arrayOfWord[i] === 'R' ||
        arrayOfWord[i] === 'S' ||
        arrayOfWord[i] === 'T'
      ) {
        score += 1
      } else if (arrayOfWord[i] === 'D' || arrayOfWord[i] === 'G') {
        score += 2
      } else if (
        arrayOfWord[i] === 'B' ||
        arrayOfWord[i] === 'C' ||
        arrayOfWord[i] === 'M' ||
        arrayOfWord[i] === 'P'
      ) {
        score += 3
      } else if (
        arrayOfWord[i] === 'F' ||
        arrayOfWord[i] === 'H' ||
        arrayOfWord[i] === 'V' ||
        arrayOfWord[i] === 'W' ||
        arrayOfWord[i] === 'Y'
      ) {
        score += 4
      } else if (arrayOfWord[i] === 'K') {
        score += 5
      } else if (arrayOfWord[i] === 'J' || arrayOfWord[i] === 'X') {
        score += 8
      } else if (arrayOfWord[i] === 'Q' || arrayOfWord[i] === 'Z') {
        score += 10
      } else {
        score += 0
      }
    }
  }
  return score
}

module.exports = scrabble
