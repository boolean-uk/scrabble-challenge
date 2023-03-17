const lettersToPoints = { // Object containing each letter in uppercase as the key, and their respective values as the value
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
// Object containing each type of bracket as the key, whose value is another object containing information about said bracket 
// (multiplier value, corresponding open/closing bracket, and what type of bracket it is (open or closing))
const brackets = { 
  '{': {multi: 2, corresponding: '}', type: 'open'},
  '[': {multi: 3, corresponding: ']', type: 'open'},
  '}': {multi: 2, corresponding: '{', type: 'close'},
  ']': {multi: 3, corresponding: '[', type: 'close'}
}
function scrabble(str) {
  // Guard clause to return 0 if the type of our parameter is not a string
  if (typeof str !== 'string' || !str) {
    return 0
  } 

  let points = 0
  let stack = []
  let multiplier = 1

  // Iterating through our input string, once per letter
  for (let i = 0; i < str.length; i++) {
    // If statement to check if the current letter we are "looking at" is a bracket of any kind

    // if true - run the calculateMultiplier function
    if (str[i] === '{'
     || str[i] === '}'
     || str[i] === '['
     || str[i] === ']') {
      multiplier = calculateMultiplier(str[i], stack, multiplier)
      if (multiplier === -1) {
        return 0
      }

      // if false - add the current letters corresponding value in the lettersToPoints object
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
  // If statement to check if our array called 'stack' is empty, if it is not empty, it means we have an invalid input string
  if (stack.length === 0) {
    return points
  } else {
    return 0
  }
}

// function to calculate the multiplier that should be added to the current letter
function calculateMultiplier(char, arr, multiplier) {
  // switch statement to check if the current bracket we are looking at is a closing or opening bracket
  switch(brackets[char].type) {
    // if "char" is an opening bracket we return the corresponding value from the brackets object as the multiplier
    case 'open':
      arr.push(char)
      return multiplier *= brackets[char].multi
    // if "char" is an closing bracket we return multiplier with the corresponding value from the brackets object removed
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
