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
// OUTPUT = SCORE (which is the sum of every char score)
function scrabble(str) {
  // 2. Check if the 'str' is a valid string in order to continue the code
  if (!validateString(str)) return 0 // If true, continue

  // 3. create the output variable called 'score', it will be returned at the end of the function
  let score = 0
  // They are updated on every 'char' check. These values only change when a char is {} or [].
  // Due to it only changing on those special char, when a char is between {} or [], it is considered
  // a double Or triple
  let doubleValue = false
  let tripleValue = false

  // set it to upperCase before iterating
  // 5. Iterate the characters of 'str' for us to check if the 'char' matches with the scoreDict
  for (const char of str.toUpperCase().split('')) {
    // Check for initialization and finalization of double and triple values.
    if (char === '{') doubleValue = true
    else if (char === '[') tripleValue = true
    else if (char === '}') doubleValue = false
    else if (char === ']') tripleValue = false

    console.log(`Working with ${char}:`)
    console.log(`-- double ${doubleValue}, triple ${tripleValue}`)

    // Anonymous function to return the value of the character it has gone though
    const returnScore = () => {
      // Iterate though each key of the Object to later check if 'char' belongs to the key
      for (const key of Object.keys(scoreDict)) {
        // Check if the key (like score2) has the value 'char' in it
        if (scoreDict[key].includes(char)) {
          console.log(`- Key ${key} has the char ${char}`)
          // Creates a var to be used as a multiplier at the charScore
          let num = 1 // If not doubled nor trippled, just let it be 1 so the score will not change
          // 'num' is condition if doubled (num*2) or if tripled (num*3) else 'num' (no ? so is a else)
          num = doubleValue ? num * 2 : tripleValue ? num * 3 : num

          // multi the score (like score2 = 2) with the num (that is either 1, 2 or 3 depending
          // if normal, double or triple)
          const charScore = Number(key.substring('score'.length)) * num

          console.log(`- Char score: ${Number(key.substring('score'.length))}`)
          console.log(`- After x${num}: ${charScore}\n`)
          return (score += charScore) // Return the sum of the score
        }
      }
    }
    // Return the value of the char
    returnScore()
  }

  // Return the score var to be used/showed in outside code.
  return score
}

// Validates the parsed string returning true or false
function validateString(str) {
  // If following conditions are TRUE, return false (not valid string):
  // 'str' is not a string? if false, good
  // 'str' has the length of 0? if false, good
  // 'str' is a space or line breaks? if false, good
  if (typeof str !== 'string' || str.length === 0 || str === ' \t\n') {
    return false
  } else return true
}

console.log(scrabble('L{u}[c]iano'))

module.exports = scrabble
