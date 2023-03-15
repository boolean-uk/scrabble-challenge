const alphaGroup = [
  ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 1],
  ['D', 'G', 2],
  ['B', 'C', 'M', 'P', 3],
  ['F', 'H', 'V', 'W', 'Y', 4],
  ['K', 5],
  ['J', 'X', 8],
  ['Q', 'Z', 10]
]

const scrabble = (word) => {
  let scrabbleScore = 0
  if (word === null) return 0
  const scrabbleWord = word.toUpperCase().split('')
  let doubleTheWord = []
  let tripleTheWord = []

  // d{og
  if (scrabbleWord.includes('{')) {
    if (scrabbleWord.indexOf('}') === -1) {
      return scrabbleScore
    }
  }

  if (scrabbleWord.includes('}')) {
    if (scrabbleWord.indexOf('{') === -1) {
      return scrabbleScore
    }
  }

  if (scrabbleWord.includes('[')) {
    if (scrabbleWord.indexOf(']') === -1) {
      return scrabbleScore
    }
  }

  if (scrabbleWord.includes(']')) {
    if (scrabbleWord.indexOf('[') === -1) {
      return scrabbleScore
    }
  }

  if (scrabbleWord.includes('{') && scrabbleWord.includes('}')) {
    const startIndex = scrabbleWord.indexOf('{')
    const endIndex = scrabbleWord.indexOf('}')
    doubleTheWord = scrabbleWord.splice(
      startIndex + 1,
      endIndex - (startIndex + 1)
    )

    for (let i = 0; i < doubleTheWord.length; i++) {
      for (let j = 0; j < alphaGroup.length; j++) {
        if (alphaGroup[j].includes(doubleTheWord[i])) {
          scrabbleScore += alphaGroup[j][alphaGroup[j].length - 1] * 2
        }
      }
    }
  }

  if (scrabbleWord.includes('[') && scrabbleWord.includes(']')) {
    const startIndex = scrabbleWord.indexOf('[')
    const endIndex = scrabbleWord.indexOf(']')
    tripleTheWord = scrabbleWord.splice(
      startIndex + 1,
      endIndex - (startIndex + 1)
    )

    for (let i = 0; i < tripleTheWord.length; i++) {
      for (let j = 0; j < alphaGroup.length; j++) {
        if (alphaGroup[j].includes(tripleTheWord[i])) {
          scrabbleScore += alphaGroup[j][alphaGroup[j].length - 1] * 3
        }
      }
    }
  }

  for (let i = 0; i < scrabbleWord.length; i++) {
    for (let j = 0; j < alphaGroup.length; j++) {
      if (alphaGroup[j].includes(scrabbleWord[i])) {
        scrabbleScore += alphaGroup[j][alphaGroup[j].length - 1]
      }
    }
  }

  return scrabbleScore
}

module.exports = scrabble

// const alphaGroup = [
//   ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 1],
//   ['D', 'G', 2],
//   ['B', 'C', 'M', 'P', 3],
//   ['F', 'H', 'V', 'W', 'Y', 4],
//   ['K', 5],
//   ['J', 'X', 8],
//   ['Q', 'Z', 10],
//   ['{', '}', 2],
//   ['[', ']', 3]
// ]

// function scrabble(word) {
//   // define a variable to store the scrabble result
//   let scrabbleScore = 0
//   // test for null to return 0
//   if (word === null) return 0
//   // convert the scrabble word to uppercase and then split it
//   const scrabbleWord = word.toUpperCase().split('')
//   // the outer for loop will iterate through the scrabble word elements
//   for (let i = 0; i < scrabbleWord.length; i++) {
//     // the inner for loop will iterate the each unique group
//     for (let j = 0; j < alphaGroup.length; j++) {
//       // the if condition is checking if each element of the alphaGroup array contains the current scrabble word element.
//       if (alphaGroup[j].includes(scrabbleWord[i])) {
//         // If the above condition is met, the scrabbleScore variable is updated
//         // with the letter value of the group.
//         scrabbleScore += alphaGroup[j][alphaGroup[j].length - 1]
//       }
//     }
//   }
//   return scrabbleScore // the function returns the update scrabbleScore.
// }

// module.exports = scrabble
