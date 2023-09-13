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
    if (lettersWorthOne.includes(lowerCaseWord[i])) {
      scrabbleScore += 1
    }
    if (lettersWorthTwo.includes(lowerCaseWord[i])) {
      scrabbleScore += 2
    }
    if (lettersWorthThree.includes(lowerCaseWord[i])) {
      scrabbleScore += 3
    }
    if (lettersWorthFour.includes(lowerCaseWord[i])) {
      scrabbleScore += 4
    }
    if (lettersWorthFive.includes(lowerCaseWord[i])) {
      scrabbleScore += 5
    }
    if (lettersWorthEight.includes(lowerCaseWord[i])) {
      scrabbleScore += 8
    }
    if (lettersWorthTen.includes(lowerCaseWord[i])) {
      scrabbleScore += 10
    }
  }
  return scrabbleScore
}

module.exports = scrabble
