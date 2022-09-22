const scoreDict = {
  score1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  score2: ['D', 'G'],
  score3: ['B', 'C', 'M', 'P'],
  score4: ['F', 'H', 'V', 'W', 'Y'],
  score5: ['K'],
  score8: ['J', 'X'],
  score10: ['Q', 'Z']
}

// INPUT
// - str as a var that holds the users input

// OUTPUT
// - score of the str input based on the scoreDict

// 1. Create a function called 'scrabble' that takes as argument 'str'
function scrabble(str) {
  // 2. Check if the 'str' is a valid string in order to continue the code
  if (!validateString(str)) return // If true, continue

  // 3. create the output variable called 'score', it will be returned at the end of the function
  let score = 0

  // 4. The 'str' must be set to upperCase in order to have the checks made properly. The scoreDict
  // has its keys as upperCase letter.
  str = str.toUpperCase()

  console.log(`String parsed is ${str} ...`)

  // 5. Itinerate the characters of 'str' for us to check if the 'char' matches with the scoreDict
  for (const char of str.split('')) {
    // 5.1. Return the value of the 'char' if it belongs to scoreDict. If not, just jump to next
    // sum the score returned to the variable 'score'
    const checkExtension = checkForDoubleOrTriple(char)
    const isDouble = checkExtension[0]
    const isTriple = checkExtension[1]

    console.log(`- Char ${char} will be processed, ${checkExtension}`)

    const returnScore = () => {
      for (const key of Object.keys(scoreDict)) {
        if (scoreDict[key].includes(char)) {
          let num = 1
          num = isDouble ? num * 2 : num
          num = isTriple ? num * 3 : num
          const charScore = Number(key.substring('score'.length)) * num
          return (score += charScore) // Return the sum of the score
        }
      }
    }
    returnScore()
  }
  return score
}

function validateString(str) {
  if (typeof str !== 'string' || str.length === 0 || str === ' \t\n') {
    return false
  } else return true
}

function checkForDoubleOrTriple(char) {
  let isDouble = false
  let isTriple = false
  if (char === '{') {
    isDouble = true
  } else if (char === '}') {
    isDouble = false
  } else if (char === '[') {
    isTriple = true
  } else if (char === ']') {
    isTriple = false
  }

  console.log(`-- ${char} checked for doubles and triples`)

  return [isDouble, isTriple]
}

console.log(scrabble('Lucia{n}o'))

module.exports = scrabble
