function scrabble(word) {
  let value = 0
  const arr = word.toUpperCase().split('')
  if (errorCheck(word) === -1) {
    return 0
  }
  for (let i = 0; i < arr.length; i++) {
    value += valueOfLetter(arr[i])
  }
  // value += doubleLetters(arr)
  // value += trippleLetter(arr)
  if (word.indexOf('{') !== -1 && word.indexOf('[') !== -1) {
    return 0
  } else {
    value += doubleWord(word)
    value += tripleWord(word)
  }
  return value
}

// function that takes a letter and returns it's value
function valueOfLetter(letter) {
  let value = 0
  switch (letter) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'L':
    case 'N':
    case 'R':
    case 'S':
    case 'T':
      value += 1
      break
    case 'D':
    case 'G':
      value += 2
      break
    case 'B':
    case 'C':
    case 'M':
    case 'P':
      value += 3
      break
    case 'F':
    case 'H':
    case 'V':
    case 'W':
    case 'Y':
      value += 4
      break
    case 'K':
      value += 5
      break
    case 'J':
    case 'X':
      value += 8
      break
    case 'Q':
    case 'Z':
      value += 10
      break
  }
  return value
}

function doubleWord(word) {
  const start = word.indexOf('{')
  const end = word.indexOf('}')
  if (start === -1) {
    return 0
  }
  let count = 0
  word
    .slice(start + 1, end)
    .split('')
    .forEach((letter) => {
      count += valueOfLetter(letter.toUpperCase())
      console.log(count)
    })
  return count
}

function tripleWord(word) {
  const start = word.indexOf('[')
  const end = word.indexOf(']')
  if (start === -1) {
    return 0
  }
  let count = 0
  word
    .slice(start + 1, end)
    .split('')
    .forEach((letter) => {
      count += valueOfLetter(letter.toUpperCase()) * 2
      console.log(count)
    })
  return count
}

function errorCheck(word) {
  if (word === null) {
    return -1
  }
  if (
    (word.indexOf('{') !== -1 && word.indexOf('}') === -1) ||
    (word.indexOf('}') !== -1 && word.indexOf('{') === -1) ||
    (word.indexOf('[') !== -1 && word.indexOf(']') === -1) ||
    (word.indexOf(']') !== -1 && word.indexOf('[') === -1) ||
    word.indexOf('|') !== -1
  ) {
    return -1
  }
  return 0
}

// function doubleLetters(arr) {
//   let start
//   let end
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '{') {
//       start = i
//     }
//     if (arr[i] === '}') {
//       end = i
//     }
//   }
//   const indexOfDoubleLetter = end - start
//   return valueOfLetter(arr[indexOfDoubleLetter])
// }

// function trippleLetter(arr) {
//   let start
//   let end
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '[') {
//       start = i
//     }
//     if (arr[i] === ']') {
//       end = i
//     }
//   }
//   const indexOfDoubleLetter = end - start
//   return valueOfLetter(arr[indexOfDoubleLetter]) * 2
// }

console.log(scrabble('d[o]g'))
module.exports = scrabble
