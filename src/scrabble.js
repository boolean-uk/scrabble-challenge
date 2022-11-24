function scrabble(string) {
  // let score = 0

  if (!string) {
    return 0
  }

  const word = string.toUpperCase()

  const scoreOfOne = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  const scoreOfTwo = ['D', 'G']
  const scoreOfThree = ['B', 'C', 'M', 'P']
  const scoreOfFour = ['F', 'H', 'V', 'W', 'Y']
  const scoreOfFive = 'K'
  const scoreOfEight = ['J', 'X']
  const scoreOfTen = ['Q', 'Z']

  function calculateScore(word) {
    let score = 0
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
          // console.log(`${counter} and score is: ${score}`)
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
      // console.log(`${counter} and score is: ${score}`)
    }
    return score
  }

  function doubleScore() {
    for (let i = 0; i < word.length; i++) {
      const counter = i
      let charsToBeDoubled = '.'
      if (word[counter] === '}') {
        return null
      }
      if (word[counter] === '{') {
        // while (word[counter] !== '}') {
        for (let i = word.indexOf(word[counter]); i < word.length; i++) {
          const counter = i
          if (word[counter] === '}') {
            return calculateScore(charsToBeDoubled)
            // break
          }
          charsToBeDoubled += word[counter]
        }

        // console.log('INSIDE DOUBLE SCORE ---> ', charsToBeDoubled)
        return null
        // }
      }
    }
    // score = 0
    return 0
  }

  function tripleScore() {
    for (let i = 0; i < word.length; i++) {
      const counter = i
      let charsToBeTripled = '.'
      if (word[counter] === ']') {
        return null
      }
      if (word[counter] === '[') {
        // while (word[counter] !== '}') {
        for (let i = word.indexOf(word[counter]); i < word.length; i++) {
          const counter = i
          if (word[counter] === ']') {
            return calculateScore(charsToBeTripled) * 2
            // break
          }
          charsToBeTripled += word[counter]
        }

        // console.log('INSIDE DOUBLE SCORE ---> ', charsToBeDoubled)
        return null
        // }
      }
    }
    // score = 0
    return 0
  }

  let finalScore = calculateScore(word) + doubleScore() + tripleScore()
  if (doubleScore() === null) {
    finalScore = 0
  } else if (tripleScore === null) {
    finalScore = 0
  }
  return finalScore
}

// console.log(scrabble('d{o}g'))

module.exports = scrabble
