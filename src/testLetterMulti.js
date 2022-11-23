const letterArray = ['|', 'd', '|', 'o', 'g']

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

console.log(adjustForLetterMulti(letterArray))
