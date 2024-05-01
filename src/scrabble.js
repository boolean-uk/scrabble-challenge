// totalPoints is defined outside of the scrabble() function
// due to more than one function accessing the value
// scrabble(), tally(), and calculateCurlyBrackets()
let totalPoints
const WORD_MODIFIERS = ['{', '}', '[', ']']
const WORD_POINTS = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10
}

function scrabble(inputWord) {
  // Set totalPoints to zero
  totalPoints = 0
  // Make sure the inputWord is a valid string
  if (typeof inputWord !== 'string') {
    return totalPoints
  }

  // Check if the inputWord has any modifiers
  if (WORD_MODIFIERS.some((mod) => inputWord.includes(mod))) {
    // Calculate the value of the word if it has square brackets
    // also calculate the value if the word has curly brackets in addition
    calculateSquareBrackets(inputWord)
    // Calculate the value of the word if it only has curly brackets
    calculateCurlyBrackets(inputWord)
  } else if (inputWord.includes('|')) {
    // 0 points for strings with a bar
    totalPoints = 0
  } else {
    // Count the entire string if there are no modifiers
    tally(inputWord, 1)
  }
  return totalPoints
}

function tally(inputString, multiplier) {
  // Make the string lowercase
  const stringEvaluate = inputString.toLowerCase()
  // Iterate throughout all the letters in a string and
  // assign the corresponding value
  for (let i = 0; i <= stringEvaluate.length; i++) {
    // Assign the value to 'key'
    const key = WORD_POINTS[stringEvaluate[i]]
    if (key > 1) {
      // Add the value to the totalPoints tally
      totalPoints += key * multiplier
    } else if (key === 1) {
      // If the key = 1, then multiplying it won't work
      totalPoints += multiplier
    }
  }
}

function calculateSquareBrackets(inputWord) {
  // Check if the inputWord has square brackets
  if (inputWord.includes('[')) {
    if (inputWord.includes(']')) {
      // Slice the string at the square brackets
      const substring = inputWord.slice(
        inputWord.indexOf('[') + 1,
        inputWord.indexOf(']')
      )
      // Calculate the points inbetween the square brackets
      tally(substring, 3)

      // Handle cases with both square and curly brackets
      if (inputWord.includes('{' && '}')) {
        // Slice between the brackets
        const bracketstring = inputWord
          .slice(inputWord.indexOf('{'), inputWord.indexOf('}'))
          .toLowerCase()
        // Count what's between the brackets
        tally(bracketstring, 2)
        // Count the rest of the word
        tally(substring, 1)
      } else {
        // Count the rest of the word
        const rest = inputWord.replace(substring, '')
        tally(rest, 1)
      }
    }
  }
}

function calculateCurlyBrackets(inputWord) {
  // Only allow words that do not have square brackets,
  // Words with multiple modifiers are handled in the square brackets
  if (!inputWord.includes('[')) {
    // Check if the string has curly braces
    if (inputWord.includes('{')) {
      if (inputWord.includes('}')) {
        // Slice the string at the curly brackets
        const substring = inputWord.slice(
          inputWord.indexOf('{') + 1,
          inputWord.indexOf('}')
        )
        // Calculate the points of the substring
        tally(substring, 2)
        // Calculate the rest of the string after removing
        // the substring and replacing with ''
        const rest = inputWord.replace(substring, '')
        tally(rest, 1)
        // Check if there are more than one set of curly brackets
        if (inputWord.indexOf('}') < inputWord.lastIndexOf('}')) {
          // Slice the second pair of brackets
          const substring = inputWord.slice(inputWord.indexOf('}') + 3)
          // Calculate the value of the second substring
          tally(substring, 1)
        }
      } else {
        return totalPoints
      }
    }
  }
}

module.exports = scrabble
