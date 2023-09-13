let scrabbleScore
const lettersWorthOne = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
const lettersWorthTwo = ['d', 'g']
const lettersWorthThree = ['b', 'c', 'm', 'p']
const lettersWorthFour = ['f', 'h', 'v', 'w', 'y']
const lettersWorthFive = ['k']
const lettersWorthEight = ['j', 'x']
const lettersWorthTen = ['q', 'z']

function scrabble(word) {
  scrabbleScore = 0
  if (word === null) {
    return scrabbleScore
  }
  const lowerCaseWord = word.toLowerCase()

  for (let i = 0; i < word.length; i++) {
    if (lettersWorthOne.includes(lowerCaseWord[i]) === true) {
      scrabbleScore += 1
    }
    if (lettersWorthTwo.includes(lowerCaseWord[i]) === true) {
      scrabbleScore += 2
    }
    if (lettersWorthThree.includes(lowerCaseWord[i]) === true) {
      scrabbleScore += 3
    }
    if (lettersWorthFour.includes(lowerCaseWord[i]) === true) {
      scrabbleScore += 4
    }
    if (lettersWorthFive.includes(lowerCaseWord[i]) === true) {
      scrabbleScore += 5
    }
    if (lettersWorthEight.includes(lowerCaseWord[i]) === true) {
      scrabbleScore += 8
    }
    if (lettersWorthTen.includes(lowerCaseWord[i]) === true) {
      scrabbleScore += 10
    }
  }
  return scrabbleScore
}

module.exports = scrabble
