const allowed = require('./characters.js')

const curlyFilter = (word) => {
  let leftBox = []
  let rightBox = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{') {
      leftBox.push('{')
    }
    if (word[i] === '}') {
      rightBox.push('}')
    }
  }
  if (leftBox.length === rightBox.length) {
    return 0
  } else {
    return false
  }
}

const squareFilter = (word) => {
  let leftBox = []
  let rightBox = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '[') {
      leftBox.push('[')
    }
    if (word[i] === ']') {
      rightBox.push(']')
    }
  }
  if (leftBox.length === rightBox.length) {
    return 0
  } else {
    return false
  }
}

const ruleChecker = (word) => {
  let sum = 0
  arr = word.split('')
  if (arr[0] === '{' && arr[arr.length - 1] !== '}') {
    return false
  }
  if (arr[0] === '[' && arr[arr.length - 1] !== ']') {
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '{' && arr[i + 2] === '}') {
      arr.splice(i, 1)
      arr.splice(i + 1, 1)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === '{' && arr[arr.length - 1] === '}') {
      arr.pop()
      arr.shift()
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '[' && arr[i + 2] === ']') {
      arr.splice(i, 1)
      arr.splice(i + 1, 1)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === '[' && arr[arr.length - 1] === ']') {
      arr.pop()
      arr.shift()
    }
    if (arr[i] === '[' && arr[i + 2] !== ']') {
      return false
    }
    if (arr[i + 2] === ']' && arr[i] !== '[') {
      return false
    }
  }
  return 0
}

const kingFilter = (word) => {
  if (curlyFilter(word) === false) {
    return false
  } else if (squareFilter(word) === false) {
    return false
  } else if (ruleChecker(word) === false) {
    return false
  } else if (allowed(word) === false) {
    return false
  } else {
    return 0
  }
}
module.exports = kingFilter
