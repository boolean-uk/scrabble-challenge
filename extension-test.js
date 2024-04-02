// SCRABBLE FUNCTION
const scrabble = (me) => {
  const alphabetPoints = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  const checkDouble = doubleLetter(me)
  let sum = 0
//   return checkDouble

  for (let i = 0; i < me.length; i++) {
    sum += alphabetPoints[me[i]]
  }
  return sum
}
// console.log('scrabble:', scrabble('HELLO'))

// const checkIfDouble = scrabble('HELLO')
// console.log('is double?:', checkIfDouble)

const doubleLetter = (word) => {
  const checkWord = word.includes('{') && word.includes('}')
  let splitWord
  if (checkWord) {
    splitWord = word.toUpperCase().split('')
  }
  return splitWord
}
console.log('scrabble:', scrabble('HELLO'))


// console.log('DOUBLE LETTER:', doubleLetter('HE{L}LO'))

// WORD CONTAINS {} --> RETURN AS CURLEY BRACKET WORD
// WORD CONTAINS [] --> RETURN AS SQUARE BRACKET WORD

// -----------------------------------------------------------------
// const word = 'he{l}lo'
// console.log('original word:', word)

// const checkWord = word.includes('{') && word.includes('}')
// let splitWord
// if (checkWord) {
//   splitWord = word.toUpperCase().split('')
// }
// console.log('check word meets requirement:', checkWord)
// console.log('split word:', splitWord)

// const doubleLetter = word.split('{').pop().split('}')[0]
// console.log('double letter:', doubleLetter)

// ------------------------------------------------------------------

// const newArray = splitWord.map((value) => {
//     console.log('value:', value)
//     return value.split('{').pop().split('}')[0]
// })
// console.log('New array:', newArray)

// ------------------------------------------------------------------

// const checkIfLetterMultiplier = (letter) => {
//   if (letter.includes('{') && letter.includes('}')) {
//     return Number(letter) * 2
//   } else if (letter.includes('[') && letter.includes(']')) {
//     return Number(letter) * 3
//   }
// }
// console.log('Is this a multiple?:', checkIfLetterMultiplier('{8}'))

// const num = '{8}'
// const numNum = Number(num)
// console.log('Nmber Num:', numNum)

// ------------------------------------------------------------------

// let doubleLetter
// for (let i = 0; i < splitWord.length; i++) {
//   console.log('iterate through word:', splitWord[i])
//   if (splitWord[i] === '{' || splitWord[i] === '}') {
//   }
//   return doubleLetter
// }
