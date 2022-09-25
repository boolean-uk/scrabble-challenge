const letterValue = {
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
const word = 'ho{t}DOg'
function scrabble(word) {
  let score = 0
  if (word === null) {
    // Guard condition for empty or null words
    return 0
  }
  const characters = word.toLowerCase().split('') // splits word into individual characters contained within an array, all lowercase
  characters.forEach((character) => {
    score += letterValue[character] || 0 // Checks each character within the array with its value in letterValue and adds that toscore. If its not there nothing is added
  })
  score = characterMultiplier(characters, score) // created separate function to check if charcter is within special brackets for a multiplier
  score = scoreMultiplier(characters, score) // Created separate fucntion at the bottom to check for double and triple word multipliers
  return score
}
console.log(scrabble(word))

function characterMultiplier(characters, score) {
  // Checks if a character is in special brackets and applies the appropriate multiplier before updating the score
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === '{' && characters[i + 2] === '}') {
      score -= letterValue[characters[i + 1]]
      score += letterValue[characters[i + 1]] * 2
      return score
    } else if (characters[i] === '[' && characters[i + 2] === ']') {
      score -= letterValue[characters[i + 1]]
      score += letterValue[characters[i + 1]] * 3
      return score
    }
  }
  return score
}

function scoreMultiplier(characters, score) {
  if (
    // Checks that the the whole word is contained within special brackets and not just the first and last characters
    characters[0] === '{' &&
    characters[2] !== '}' &&
    characters[characters.length - 3] !== '{' &&
    characters[characters.length - 1] === '}'
  ) {
    score *= 2
    return score
  } else if (
    characters[0] === '[' &&
    characters[2] !== ']' &&
    characters[characters.length - 3] !== '[' &&
    characters[characters.length - 1] === ']'
  ) {
    score *= 3
    return score
  } else {
    return score
  }
}

module.exports = scrabble
