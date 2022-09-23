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
  if (!validateString(str)) return 0

  let score = 0
  let doubleValue = false
  let tripleValue = false

  str = str.toUpperCase()

  for (const char of str.split('')) {
    if (char === '{') doubleValue = true
    else if (char === '[') tripleValue = true
    else if (char === '}') doubleValue = false
    else if (char === ']') tripleValue = false

    const returnScore = () => {
      for (const key of Object.keys(scoreDict)) {
        if (scoreDict[key].includes(char)) {
          let num = 1
          num = doubleValue ? num * 2 : tripleValue ? num * 3 : num
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

console.log(scrabble('Lu[ci]ano'))

module.exports = scrabble
