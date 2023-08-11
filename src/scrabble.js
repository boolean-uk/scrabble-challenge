function returnLetterValue(str) {
  const valueLevel = [
    { arr: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], val: 1 },
    { arr: ['D', 'G'], val: 2 },
    { arr: ['B', 'C', 'M', 'P'], val: 3 },
    { arr: ['F', 'H', 'V', 'W', 'Y'], val: 4 },
    { arr: ['K'], val: 5 },
    { arr: ['J', 'X'], val: 8 },
    { arr: ['Q', 'Z'], val: 10 }
  ]
  const tmp = valueLevel.find((myArray) => {
    return myArray.arr.find((myElement) => myElement === str)
  })
  if (tmp !== undefined) {
    return tmp.val
  } else {
    return 0
  }
}

function wordBonus(strArray) {
  if (
    strArray[0] === '{' &&
    strArray[strArray.length - 1] === '}' &&
    (strArray[2] !== '}' || strArray[strArray.length - 3] !== '{')
  ) {
    return 2
  } else if (
    strArray[0] === '[' &&
    strArray[strArray.length - 1] === ']' &&
    (strArray[2] !== ']' || strArray[strArray.length - 3] !== ']')
  ) {
    return 3
  } else {
    return 1
  }
}

function letterBonus(str, currVal) {
  if (str === '{') {
    return 2
  } else if (str === '[') {
    return 3
  } else if (str === '}' || str === ']') {
    return 1
  } else if (str === '|' || str === '|') {
    return 0
  } else {
    return currVal
  }
}

function isValid(letterArr) {
  let count1 = 0
  let count2 = 0
  letterArr.forEach((letter) => {
    if (letter === '{' || letter === '[') {
      count1++
    } else if (letter === '}' || letter === ']') {
      count2++
    }
  })
  if (count1 !== count2) {
    return false
  } else {
    return true
  }
}

function scrabble(str) {
  if (str === null) {
    return 0
  }
  const wordArray = str.toUpperCase().split('')
  if (isValid(wordArray) === false) {
    return 0
  }
  const wordMul = wordBonus(wordArray)
  if (wordMul !== 1) {
    wordArray.shift()
    wordArray.pop()
  }
  let count = 0
  let letterMul = 1
  let errorFlag = false
  wordArray.forEach((myElement) => {
    letterMul = letterBonus(myElement, letterMul)
    if (letterMul === 0) {
      errorFlag = true
    }
    count += returnLetterValue(myElement) * letterMul
  })
  if (errorFlag) {
    return 0
  } else {
    return count * wordMul
  }
}

module.exports = scrabble
