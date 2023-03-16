function isAlpha(str) {
  return (
    /^[A-Za-z]*$/.test(str) ||
    str === '{' ||
    str === '}' ||
    str === '[' ||
    str === ']'
  )
}

function getLettersInBracket(fromIndex, toIndex, scrabbleArray) {
  return scrabbleArray.slice(fromIndex, toIndex)
}

function getTotalScore(k, scrabbleArray) {
  if (
    scrabbleArray[k] === 'a' ||
    scrabbleArray[k] === 'e' ||
    scrabbleArray[k] === 'i' ||
    scrabbleArray[k] === 'o' ||
    scrabbleArray[k] === 'l' ||
    scrabbleArray[k] === 'n' ||
    scrabbleArray[k] === 'r' ||
    scrabbleArray[k] === 'u' ||
    scrabbleArray[k] === 's' ||
    scrabbleArray[k] === 't'
  ) {
    console.log('here')
    return 1
  }
  if (scrabbleArray[k] === 'd' || scrabbleArray[k] === 'g') {
    return 2
  }
  if (
    scrabbleArray[k] === 'b' ||
    scrabbleArray[k] === 'c' ||
    scrabbleArray[k] === 'm' ||
    scrabbleArray[k] === 'p'
  ) {
    return 3
  }
  if (
    scrabbleArray[k] === 'f' ||
    scrabbleArray[k] === 'h' ||
    scrabbleArray[k] === 'v' ||
    scrabbleArray[k] === 'w' ||
    scrabbleArray[k] === 'y'
  ) {
    return 4
  }
  if (scrabbleArray[k] === 'k') {
    return 5
  }
  if (scrabbleArray[k] === 'j' || scrabbleArray[k] === 'x') {
    return 8
  }
  if (scrabbleArray[k] === 'q' || scrabbleArray[k] === 'z') {
    return 10
  }
  return 0
}

function calculateScoreFromChars(foundLetters) {
  let tempCount = 0
  for (let i = 0; i <= foundLetters.length; i++) {
    if (isAlpha(foundLetters[i])) {
      tempCount += getTotalScore(i, foundLetters)
    } else return 0
  }
  return tempCount
}

function scrabble(word) {
  let count = 0
  if (typeof word === 'string') {
    const scrabbleArray = []
    for (let i = 0; i < word.length; i++) {
      scrabbleArray.push(word.toLowerCase()[i])
      console.log(scrabbleArray)
    }

    for (let k = 0; k <= scrabbleArray.length; k++) {
      let tempCount = 0
      if (k === 0) {
        const from = k + 1
        const to = scrabbleArray.length - 1
        const foundLetters = getLettersInBracket(from, to, scrabbleArray)
        console.log(foundLetters)
        let score = calculateScoreFromChars(foundLetters)
        if (
          scrabbleArray[k] === '{' &&
          scrabbleArray[scrabbleArray.length - 1] === '}'
        ) {
          score *= 2
          return score
        }

        if (
          scrabbleArray[k] === '[' &&
          scrabbleArray[scrabbleArray.length - 1] === ']'
        ) {
          score *= 3
          return score
        }
      }

      if (isAlpha(scrabbleArray[k])) {
        tempCount += getTotalScore(k, scrabbleArray)
        if (
          (scrabbleArray[k - 1] === '{' && scrabbleArray[k + 1] !== '}') ||
          (scrabbleArray[k - 1] !== '{' && scrabbleArray[k + 1] === '}')
        ) {
          return 0
        }
        if (scrabbleArray[k - 1] === '{' && scrabbleArray[k + 1] === '}') {
          tempCount *= 2
        } else if (
          (scrabbleArray[k - 1] === '[' && scrabbleArray[k + 1] !== ']') ||
          (scrabbleArray[k - 1] !== '[' && scrabbleArray[k + 1] === ']')
        ) {
          return 0
        } else if (
          scrabbleArray[k - 1] === '[' &&
          scrabbleArray[k + 1] === ']'
        ) {
          tempCount *= 3
        }
        count += tempCount
      } else return 0
    }
  }
  return count
}

console.log(scrabble('d{og'))

module.exports = scrabble
