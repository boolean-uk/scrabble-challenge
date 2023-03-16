const letterArray = ['h', 'e', 'l', 'l', 'o']

const checkWordMulti = (array) => {
  let wordMulti = 0
  let wordMultis = 0
  const datasheet = require('./datasheet.js').datasheet
  if (Object.getOwnPropertyNames(datasheet).includes(array[0])) {
    wordMulti = 1
  } else if (
    (array[0] === '[' && array[2] === ']') ||
    (array[0] === '{' && array[2] === '}')
  ) {
    wordMulti = 1
    return [array, wordMulti]
  } else {
    for (
      let i = 0;
      !Object.getOwnPropertyNames(datasheet).includes(array[i]);
      i++
    ) {
      if (array[i] === '[' && array[array.length - (1 + i)] === ']') {
        wordMulti += 3
        wordMultis++
      } else if (array[i] === '{' && array[array.length - (1 + i)] === '}') {
        wordMulti += 2
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

console.log(checkWordMulti(letterArray))
