const scoreDict = {
  score1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  score2: ['D', 'G'],
  score3: ['B', 'C', 'M', 'P'],
  score4: ['F', 'H', 'V', 'W', 'Y'],
  score5: ['K'],
  score8: ['J', 'X'],
  score10: ['Q', 'Z']
}

function scrabble(str) {
  if (!validateString(str)) return // If true, continue
  let score = 0

  str = str.toUpperCase()

  console.log(`String parsed is ${str} ...`)

  for (const char of str.split('')) {
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
