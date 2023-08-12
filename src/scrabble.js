function scrabble(word) {
  let value = 0
  if (errorCheck(word) === -1) {
    return 0
  }
  value = multipliers(word)
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

function multipliers(word) {
  let count = 0
  const arr = word.toUpperCase().split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '{') {
      const doubleWord = word
        .toUpperCase()
        .substring(i + 1, arr.indexOf('}', i))
        .split('')
      for (let j = 0; j < doubleWord.length; j++) {
        if (arr[j] === '[') {
          const tripleWord = doubleWord
            .toString()
            .substring(j + 1, arr.indexOf(']', j))
            .split('')
          for (let k = 0; k < tripleWord.length; k++) {
            count += valueOfLetter(tripleWord[k]) * 6
            console.log(count)
            j++
          }
        } else {
          count += valueOfLetter(doubleWord[j]) * 2
          i += 3
        }
      }
    }
    if (arr[i] === '[') {
      const tripleWord = word
        .toUpperCase()
        .substring(i + 1, arr.indexOf(']', i))
        .split('')
      for (let j = 0; j < tripleWord.length; j++) {
        if (arr[j] === '{') {
          const doubleWord = tripleWord
            .toString()
            .substring(j + 1, arr.indexOf('}', j))
            .split('')
          for (let k = 0; k < doubleWord.length; k++) {
            count += valueOfLetter(doubleWord[k]) * 6
            j++
          }
          count += 9
        } else {
          count += valueOfLetter(tripleWord[j]) * 3
          i += 3
        }
      }
    }
    count += valueOfLetter(arr[i])
  }
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

console.log(scrabble('[{dog}]'))
module.exports = scrabble
