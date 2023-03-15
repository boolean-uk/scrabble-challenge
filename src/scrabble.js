// function scrabble() {}
// module.exports = scrabble

const alphaGroup = [
  ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 1],
  ['D', 'G', 2],
  ['B', 'C', 'M', 'P', 3],
  ['F', 'H', 'V', 'W', 'Y', 4],
  ['K', 5],
  ['J', 'X', 8],
  ['Q', 'Z', 10],
  ['{', '}', 2],
  ['[', ']', 3]
]

function scrabble(word) {
  // define a variable to store the scrabble result
  let scrabbleScore = 0
  // test for null to return 0
  if (word === null) return 0
  // convert the scrabble word to uppercase and then split it
  const scrabbleWord = word.toUpperCase().split('')
  // the outer for loop will iterate through the scrabble word elements
  for (let i = 0; i < scrabbleWord.length; i++) {
    // the inner for loop will iterate the each unique group
    for (let j = 0; j < alphaGroup.length; j++) {
      // the if condition is checking if each element of the alphaGroup array contains the current scrabble word element.
      if (alphaGroup[j].includes(scrabbleWord[i])) {
        // If the above condition is met, the scrabbleScore variable is updated
        // with the letter value of the group.
        scrabbleScore += alphaGroup[j][alphaGroup[j].length - 1]
      }
    }
  }
  return scrabbleScore // the function returns the update scrabbleScore.
}

module.exports = scrabble
