const points = require('./points')

// takes in the full array and score. We loop through each letter in the array, and if we detect a certain bracket with a closing one 2
// indexes later, we adjust the score and return. If these brackets aren't detected, we return the original score and exit the function
function letterBonusChecker(wordArray, score) {
  for (let j = 0; j < wordArray.length; j++) {
    if (wordArray[j] === '{' && wordArray[j + 2] === '}') {
      score -= points[wordArray[j + 1]]
      score += points[wordArray[j + 1]] * 2
      return score
    } else if (wordArray[j] === '[' && wordArray[j + 2] === ']') {
      score -= points[wordArray[j + 1]]
      score += points[wordArray[j + 1]] * 3
      return score
    }
  }
  return score
}

// again takes in the word array and the score. This time, we check if the first and last chars are certain brackets. If so, we multiply the whole score to apply the bonus. If the brackets aren't at the beginning or end (or none), we simply return out
function wordBonusChecker(wordArray, score) {
  if (wordArray[0] === '{' && wordArray[wordArray.length - 1] === '}') {
    const scoreWithBonus = score * 2
    return scoreWithBonus
  } else if (wordArray[0] === '[' && wordArray[wordArray.length - 1] === ']') {
    const scoreWithBonus = score * 3
    return scoreWithBonus
  } else {
    return score
  }
}

module.exports = {
  letterBonusChecker,
  wordBonusChecker
}
