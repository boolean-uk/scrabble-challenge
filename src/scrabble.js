// Welcome to my scrabble function - It'll calculate those words for you in scrabble points; how exciting.

const scores = {
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

// Main function - checks the input is a string then sends the parameter value to the calculator function.
function scrabble(word) {
  if (typeof word === 'string') {
    return calculator(word)
  } else {
    return 0
  }
}

// Responsable for working out the total score
function calculator(word) {
  let score = 0
  const multiplier = 1
  // indexs through each letter
  for (let x = 0; x < word.length; x++) {
    const letter = word.charAt(x).toUpperCase()
    // console.log(letter)
    // console.log(alphabet[letter])
    if (scores[letter] !== undefined) {
      score += scores[letter] * multiplier
    } else {
      score = 0
      break
    }
  }
  return score
}

// check the letter is a special character

// console.log(scrabble("hi"))

// const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 'V', 'W', 'X', 'Y', 'Z']

// else if (letter === "[") {
//   console.log("bonus start")
// }
// else if (letter === "{") {
//   console.log("bonus3 start")
// }
// else if (letter === "]") {
//   console.log("bonus end")
// }
// else if (letter === "}") {
//   console.log("bonus3 end")
// }

module.exports = scrabble
