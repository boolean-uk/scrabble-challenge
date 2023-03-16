const isStringZero = (str) => {
  if (str.length === 0) {
    str += '0'
  }
  return str
}

const stringToArray = (word) => {
  const letters = []
  word
    .toLowerCase()
    .split('')
    .forEach((element) => {
      letters.push(element)
    })
  return letters
}

const checkWordMulti = (array) => {
  let wordMulti = 1
  let wordMultis = 0
  const datasheet = require('./datasheet.js').datasheet
  if (Object.getOwnPropertyNames(datasheet).includes(array[0])) {
    return [array, wordMulti]
  } else if (
    (array[0] === '[' && array[2] === ']') ||
    (array[0] === '{' && array[2] === '}')
  ) {
    return [array, wordMulti]
  } else {
    for (
      let i = 0;
      !Object.getOwnPropertyNames(datasheet).includes(array[i]);
      i++
    ) {
      if (array[i] === '[' && array[array.length - (1 + i)] === ']') {
        wordMulti *= 3
        wordMultis++
      } else if (array[i] === '{' && array[array.length - (1 + i)] === '}') {
        wordMulti *= 2
        wordMultis++
      }
    }
    for (let i = 0; i < wordMultis; i++) {
      array.shift()
      array.pop()
    }
  }
  return [array, wordMulti]
}

const adjustForLetterMulti = (array) => {
  const adjustedArray = []
  const datasheet = require('./datasheet.js').datasheet
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '[' && array[i + 2] === ']') {
      adjustedArray.push(array[i + 1])
      adjustedArray.push(array[i + 1])
    } else if (array[i] === '{' && array[i + 2] === '}') {
      adjustedArray.push(array[i + 1])
    } else if (Object.getOwnPropertyNames(datasheet).includes(array[i])) {
      adjustedArray.push(array[i])
    } else if (
      (array[i] === ']' && array[i - 2] === '[') ||
      (array[i] === '}' && array[i - 2] === '{') ||
      (array[i] === '[' && array[i - 2] === ']') ||
      (array[i] === '{' && array[i - 2] === '}')
    ) {
      adjustedArray.push('0')
    } else {
      adjustedArray.push('invalid')
    }
  }
  return adjustedArray
}

const isValid = (array) => {
  if (array.includes('invalid')) {
    return [0]
  } else {
    return array
  }
}

const arrayToNumbers = (array) => {
  const datasheet = require('./datasheet.js').datasheet
  const values = array.map((element) => datasheet[element])
  return values
}

const arrayToSum = (array) => {
  let sum = 0
  array.forEach((element) => (sum += element))
  return sum
}

const scrabble = (word) => {
  if (word === null) {
    return 0
  } else if (typeof word === 'string') {
    const validString = isStringZero(word)
    // console.log(validString)

    const arrayOfLetters = stringToArray(validString)
    // console.log(`Array of Letters: ${arrayOfLetters}`)

    const wordMulti = checkWordMulti(arrayOfLetters)
    // console.log(wordMulti)

    const adjustedLetterArray = adjustForLetterMulti(wordMulti[0])
    // console.log(`Array adjusted for Letter multi: ${adjustedLetterArray}`)

    const validLetterArray = isValid(adjustedLetterArray)
    // console.log(`If invalid was found in array set to 0: ${validLetterArray}`)

    const arrayOfValues = arrayToNumbers(validLetterArray)
    // console.log(`Array of Values: ${arrayOfValues}`)

    const sum = arrayToSum(arrayOfValues)
    // console.log(`The total Value of the word: ${sum}`)

    return sum * wordMulti[1]
  }
}

module.exports = scrabble
