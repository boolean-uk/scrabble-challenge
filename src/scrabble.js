const lettersToPoints = {
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

const brackets = {
  '{': {multi: 2, corresponding: '}', type: 'open'},
  '[': {multi: 3, corresponding: ']', type: 'open'},
  '}': {multi: 2, corresponding: '{', type: 'close'},
  ']': {multi: 3, corresponding: '[', type: 'close'}
}
function scrabble(str) {
  if (typeof str !== 'string' || !str) {
    return 0
  } 

  let points = 0
  let stack = []
  let multiplier = 1
  for (let i = 0; i < str.length; i++) {
    // console.log('loop nr', i)
    if (str[i] === '{'
     || str[i] === '}'
     || str[i] === '['
     || str[i] === ']') {
      multiplier = calculateMultiplier(str[i], stack, multiplier)
      if (multiplier === -1) {
        return 0
      }

    } else {
      let currentLetter = str[i].toUpperCase()

      if (!(currentLetter in lettersToPoints)) {
        return 0
      }
  
      points += (lettersToPoints[currentLetter]) * multiplier

      // console.log("current multi", multiplier)
      // console.log('letter is', currentLetter)
      // console.log('current points', points)
    }
  }
  if (stack.length === 0) {
    return points
  } else {
    return 0
  }
}

function calculateMultiplier(char, arr, multiplier) {
  switch(brackets[char].type) {
    case 'open':
      arr.push(char)
      return multiplier *= brackets[char].multi
    case 'close':
      // console.log("corresponding", brackets[char].corresponding)
      if(arr.length === 0) {
        return -1
      } else if (arr[arr.length - 1] !== brackets[char].corresponding) {
        return -1
      } else {
        arr.pop()
        return multiplier /= brackets[char].multi
      }
      
    default:
      return -1
  }
}

module.exports = scrabble
