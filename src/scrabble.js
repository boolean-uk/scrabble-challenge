const onePoint = [
  'A',
  'a',
  'E',
  'e',
  'I',
  'i',
  'O',
  'o',
  'U',
  'u',
  'L',
  'l',
  'N',
  'n',
  'R',
  'r',
  'S',
  's',
  'T',
  't'
]
const twoPoints = ['D', 'd', 'G', 'g']
const threePoints = ['B', 'C', 'M', 'P', 'b', 'c', 'm', 'p']
const fourPoints = ['F', 'H', 'V', 'W', 'Y', 'f', 'h', 'v', 'w', 'y']
const fivePoints = ['K', 'k']
const eightPoints = ['J', 'X', 'j', 'x']
const tenPoints = ['Q', 'Z', 'q', 'z']
const invalidChars = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '-',
  '=',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '`',
  '~',
  ';',
  '/',
  ',',
  '.',
  '?',
  '<',
  '|',
  '>'
]

const doubleWordChk = (str) => {
  const doubleWordObj = { word_modifier: 1, valid: false }

  let tmpStr = ''

  for (let i = 0; i <= str.length - 1; i++) {
    if (!['[', ']'].includes(str[i])) {
      tmpStr += str[i]
    }
  }
  const lastChar = tmpStr.charAt(tmpStr.length - 1)
  const charBeforeLast = tmpStr.charAt(tmpStr.length - 2)

  if (
    tmpStr[0] === '{' &&
    tmpStr[2] !== '}' &&
    lastChar === '}' &&
    charBeforeLast !== '{'
  ) {
    doubleWordObj.word_modifier = 2
    doubleWordObj.valid = true
  }
  return doubleWordObj
}

const tripleWordChk = (str) => {
  const tripleWordObj = { word_modifier: 1, valid: false }

  let tmpStr = ''

  for (let i = 0; i <= str.length - 1; i++) {
    if (!['{', '}'].includes(str[i])) {
      tmpStr += str[i]
    }
  }
  const lastChar = tmpStr.charAt(tmpStr.length - 1)
  const charBeforeLast = tmpStr.charAt(tmpStr.length - 2)
  if (
    tmpStr[0] === '[' &&
    tmpStr[2] !== ']' &&
    lastChar === ']' &&
    charBeforeLast !== '['
  ) {
    tripleWordObj.word_modifier = 3
    tripleWordObj.valid = true
  }
  return tripleWordObj
}

const doubleLettersChk = (str) => {
  const doubleLettersObj = { charsToDouble: '', valid: false }
  const doubleWord = doubleWordChk(str)
  const tripleWord = tripleWordChk(str)
  let count1 = 0
  let count2 = 0
  let strToCheck = str
  let newStr = ''

  if (doubleWord.valid === true) {
    strToCheck = str.slice(1, -1)
  }

  if (doubleWord.valid === true && tripleWord.valid === true) {
    strToCheck = str.slice(2, -2)
  }

  for (let i = 0; i < strToCheck.length; i++) {
    if (strToCheck[i] === '{') {
      count1 += 1
    }
    if (strToCheck[i + 2] === '}') {
      count2 += 1
      // i -= 1
      newStr += strToCheck[i + 1]
    }
  }

  if (count1 === count2) {
    doubleLettersObj.charsToDouble = newStr
    doubleLettersObj.valid = true
  } else {
    doubleLettersObj.valid = false
  }

  return doubleLettersObj
}

const tripleLettersChk = (str) => {
  const tripleLettersObj = { charsToTriple: '', valid: false }
  const tripleWord = tripleWordChk(str)
  const doubleWord = doubleWordChk(str)
  let count1 = 0
  let count2 = 0
  let strToCheck = str
  let newStr = ''

  if (tripleWord.valid) {
    strToCheck = str.slice(1, -1)
  }

  if (doubleWord.valid === true && tripleWord.valid === true) {
    strToCheck = str.slice(2, -2)
  }

  for (let i = 0; i < strToCheck.length; i++) {
    if (strToCheck[i] === '[') {
      count1 += 1
    }
    if (strToCheck[i + 2] === ']') {
      count2 += 1
      newStr += strToCheck[i + 1]
    }
  }
  if (count1 === count2) {
    tripleLettersObj.charsToTriple = newStr
    tripleLettersObj.valid = true
  } else {
    tripleLettersObj.valid = false
  }
  return tripleLettersObj
}

const checkForInvalidChars = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (invalidChars.includes(str[i])) {
      return true
    }
  }
}

const validityChecks = (str) => {
  const doubleLetters = doubleLettersChk(str)
  const tripleLetters = tripleLettersChk(str)
  const invalidChars = checkForInvalidChars(str)

  if (
    str === '' ||
    str === null ||
    str === ' \t\n' ||
    typeof str !== 'string' ||
    str === undefined ||
    invalidChars ||
    !doubleLetters.valid ||
    !tripleLetters.valid
  ) {
    return false
  } else {
    return true
  }
}

const calculateDoubleValueLetters = (str) => {
  const calcDoubledLetters = { doubleLettersPoints: 0 }
  const lettersToDouble = doubleLettersChk(str)
  const timesTwo = lettersToDouble.charsToDouble
  let points = 0

  for (const i of timesTwo) {
    if (onePoint.includes(i)) {
      points += 1
    } else if (twoPoints.includes(i)) {
      points += 2
    } else if (threePoints.includes(i)) {
      points += 3
    } else if (fourPoints.includes(i)) {
      points += 4
    } else if (fivePoints.includes(i)) {
      points += 5
    } else if (eightPoints.includes(i)) {
      points += 8
    } else if (tenPoints.includes(i)) {
      points += 10
    }
    calcDoubledLetters.doubleLettersPoints = points * 2
  }
  return calcDoubledLetters
}

const calculateTripleValueLetters = (str) => {
  const tripledLettersResult = { tripleLettersPoints: 0 }
  const lettersToTriple = tripleLettersChk(str)
  const timesThree = lettersToTriple.charsToTriple
  let points = 0

  for (const i of timesThree) {
    if (onePoint.includes(i)) {
      points += 1
    } else if (twoPoints.includes(i)) {
      points += 2
    } else if (threePoints.includes(i)) {
      points += 3
    } else if (fourPoints.includes(i)) {
      points += 4
    } else if (fivePoints.includes(i)) {
      points += 5
    } else if (eightPoints.includes(i)) {
      points += 8
    } else if (tenPoints.includes(i)) {
      points += 10
    }
    tripledLettersResult.tripleLettersPoints = points * 3
  }
  return tripledLettersResult
}

function removeDoubleLetterValues(str) {
  const newWord = { newStr: '' }
  const isDoubleWord = doubleWordChk(str)
  const isTripleWord = tripleWordChk(str)
  let newStr = str

  if (isDoubleWord.valid === true && isTripleWord.valid === true) {
    newStr = str.slice(2, -2)
  }
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '{') {
      newStr = newStr.slice(0, i) + newStr.slice(i + 3)
      i -= 1
    }
  }

  newWord.newStr = newStr

  return newWord
}
function removeTripleLetterValues(str) {
  const newWord = { newStr: '' }
  const isDoubleWord = doubleWordChk(str)
  const isTripleWord = tripleWordChk(str)
  let strToChk = str

  if (isDoubleWord.valid === true && isTripleWord.valid === true) {
    strToChk = str.slice(2, -2)
  }

  for (let i = 0; i < strToChk.length; i++) {
    if (strToChk[i] === '[') {
      strToChk = strToChk.slice(0, i) + strToChk.slice(i + 3)
      i -= 1
    }
  }

  newWord.newStr = strToChk
  return newWord
}

const scrabble = (str) => {
  if (str === null) {
    return 0
  }
  const checkValidity = validityChecks(str)

  const dlChk = doubleLettersChk(str)
  const tlChk = tripleLettersChk(str)
  const removeDoubles = removeDoubleLetterValues(str)
  const removeTriples = removeTripleLetterValues(str)
  const dwChk = doubleWordChk(str)
  const twChk = tripleWordChk(str)
  const cdl = calculateDoubleValueLetters(str)
  const ctl = calculateTripleValueLetters(str)

  let points = 0
  if (!checkValidity) {
    return 0
  }

  if (dlChk.charsToDouble.length > 0) {
    points += cdl.doubleLettersPoints
    str = removeDoubles.newStr
  }

  if (tlChk.charsToTriple.length > 0) {
    points += ctl.tripleLettersPoints
    str = removeTriples.newStr
  }

  for (const i of str) {
    if (onePoint.includes(i)) {
      points += 1
    } else if (twoPoints.includes(i)) {
      points += 2
    } else if (threePoints.includes(i)) {
      points += 3
    } else if (fourPoints.includes(i)) {
      points += 4
    } else if (fivePoints.includes(i)) {
      points += 5
    } else if (eightPoints.includes(i)) {
      points += 8
    } else if (tenPoints.includes(i)) {
      points += 10
    }
  }

  if (dwChk.valid) {
    points *= 2
  }

  if (twChk.valid) {
    points *= 3
  }

  return points
}
// console.log(scrabble())

module.exports = scrabble
