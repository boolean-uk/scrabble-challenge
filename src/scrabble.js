function scrabble(string) {
  let score = 0

  if (!string) {
    return score
  }

  const word = string.toUpperCase()

  const scoreOfOne = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  const scoreOfTwo = ['D', 'G']
  const scoreOfThree = ['B', 'C', 'M', 'P']
  const scoreOfFour = ['F', 'H', 'V', 'W', 'Y']
  const scoreOfFive = 'K'
  const scoreOfEight = ['J', 'X']
  const scoreOfTen = ['Q', 'Z']

  for (let i = 0; i < word.length; i++) {
    const counter = i
    for (let j = 0; j < scoreOfOne.length; j++) {
      if (word[counter] === scoreOfOne[j]) {
        score += 1
      }
    }
    for (let j = 0; j < scoreOfTwo.length; j++) {
      if (word[counter] === scoreOfTwo[j]) {
        score += 2
      }
    }
    for (let j = 0; j < scoreOfThree.length; j++) {
      if (word[counter] === scoreOfThree[j]) {
        score += 3
      }
    }
    for (let j = 0; j < scoreOfFour.length; j++) {
      if (word[counter] === scoreOfFour[j]) {
        score += 4
      }
    }
    if (word[counter] === scoreOfFive) {
      score += 5
    }
    for (let j = 0; j < scoreOfEight.length; j++) {
      if (word[counter] === scoreOfEight[j]) {
        score += 8
      }
    }
    for (let j = 0; j < scoreOfTen.length; j++) {
      if (word[counter] === scoreOfTen[j]) {
        score += 10
      }
    }
  }
  return score
}

module.exports = scrabble
