let wordSplit = []

function scrabble(word) {
  if (typeof word === 'string' && word.match(/^[a-zA-Z{}[\]]*$/)) {
    const wordToLowerCase = word.toLowerCase()
    wordSplit = wordToLowerCase.split('')
    checkBrackets()
    wordMultiply()
    letterMultiply()
    let score = 0
    for (let i = 0; i < wordSplit.length; i++) {
      switch (wordSplit[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'l':
        case 'n':
        case 'r':
        case 's':
        case 't':
          score += 1
          break
        case 'd':
        case 'g':
          score += 2
          break
        case 'b':
        case 'c':
        case 'm':
        case 'p':
          score += 3
          break
        case 'f':
        case 'h':
        case 'v':
        case 'w':
        case 'y':
          score += 4
          break
        case 'k':
          score += 5
          break
        case 'j':
        case 'x':
          score += 8
          break
        case 'q':
        case 'z':
          score += 10
          break
      }
    }
    return score
  } else {
    const score = 0
    return score
  }
}

function checkBrackets() {
  let numOfBrackets = 0
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] === '{' || wordSplit[i] === '[') {
      numOfBrackets += 1
    }
    if (wordSplit[i] === '}' || wordSplit[i] === ']') {
      numOfBrackets -= 1
    }
  }
  if (numOfBrackets === 0) {
    return wordSplit
  } else {
    return (wordSplit = [])
  }
}

function letterMultiply() {
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] === '{' && wordSplit[i + 2] === '}') {
      wordSplit.push(wordSplit[i + 1])
    }
    if (wordSplit[i] === '[' && wordSplit[i + 2] === ']') {
      wordSplit.push(wordSplit[i + 1], wordSplit[i + 1])
    }
  }
}

// function wordMultiply() {
//   if (
//     wordSplit[0] === '[' &&
//     wordSplit[1] === '{' &&
//     wordSplit[3] !== '}' &&
//     wordSplit[wordSplit.length - 2] === '}' &&
//     wordSplit[wordSplit.length - 1] === ']'
//   ) {
//     wordSplit.push(
//       ...wordSplit,
//       ...wordSplit,
//       ...wordSplit,
//       ...wordSplit,
//       ...wordSplit
//     )
//   } else if (
//     wordSplit[0] === '{' &&
//     wordSplit[1] === '[' &&
//     wordSplit[3] !== ']' &&
//     wordSplit[wordSplit.length - 2] === ']' &&
//     wordSplit[wordSplit.length - 1] === '}'
//   ) {
//     wordSplit.push(
//       ...wordSplit,
//       ...wordSplit,
//       ...wordSplit,
//       ...wordSplit,
//       ...wordSplit
//     )
//   } else if (
//     wordSplit[0] === '[' &&
//     wordSplit[wordSplit.length - 1] === ']' &&
//     wordSplit[2] !== ']'
//   ) {
//     wordSplit.push(...wordSplit, ...wordSplit)
//   } else if (
//     wordSplit[0] === '{' &&
//     wordSplit[wordSplit.length - 1] === '}' &&
//     wordSplit[2] !== '}'
//   ) {
//     wordSplit.push(...wordSplit)
//   } else {
//     return wordSplit
//   }
// }

function wordMultiply() {
  if (
    wordSplit[0] === '[' &&
    wordSplit[1] === '{' &&
    wordSplit[3] !== '}' &&
    wordSplit[wordSplit.length - 2] === '}' &&
    wordSplit[wordSplit.length - 1] === ']'
  ) {
    wordSplit.push(
      ...wordSplit,
      ...wordSplit,
      ...wordSplit,
      ...wordSplit,
      ...wordSplit
    )
  } else if (
    wordSplit[0] === '[' &&
    wordSplit[wordSplit.length - 1] === ']' &&
    wordSplit[2] !== ']'
  ) {
    wordSplit.push(...wordSplit, ...wordSplit)
  }
  if (
    wordSplit[0] === '{' &&
    wordSplit[1] === '[' &&
    wordSplit[3] !== ']' &&
    wordSplit[wordSplit.length - 2] === ']' &&
    wordSplit[wordSplit.length - 1] === '}'
  ) {
    wordSplit.push(
      ...wordSplit,
      ...wordSplit,
      ...wordSplit,
      ...wordSplit,
      ...wordSplit
    )
  } else if (
    wordSplit[0] === '{' &&
    wordSplit[wordSplit.length - 1] === '}' &&
    wordSplit[2] !== '}'
  ) {
    wordSplit.push(...wordSplit)
  }
  if (wordSplit[0] === '{' && wordSplit[1] === '{') {
    wordSplit.push(...wordSplit)
  }
  if (wordSplit[0] === '[' && wordSplit[1] === '[') {
    wordSplit.push(...wordSplit, ...wordSplit)
  }
}

console.log(scrabble('[d{o}g]'))

module.exports = scrabble
