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
  if (typeof str !== 'string' || str.length === 0 || str === ' \t\n') {
    return 0 // If any condition is true, 0
  }
  let score = 0
  str = str.toUpperCase()
  for (const char of str.split('')) {
    const returnScore = () => {
      for (const key of Object.keys(scoreDict)) {
        if (scoreDict[key].includes(char)) {
          return (score += Number(key.substring('score'.length))) // Return the sum of the score
        }
      }
    }
    returnScore()
  }
  return score
}

console.log(scrabble('Luciano'))

module.exports = scrabble
