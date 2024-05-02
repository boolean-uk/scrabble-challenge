function scrabble(word) {
  // 1. Attribute numbers to the letters in the scrabble as an array
  // with each class of array representing different class values.
  const letterValues = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  // Change the words to uppercase to meet spec criteria
  word = word.toUpperCase()

  // Set the total score from zero
  let totalScore = 0

  // Sum up the values on your string that corresponds to a word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    const score = letterValues[letter]

    // If the letter is found in the letterScores object, add its score to the total
    // e.g. d.o.g and the output should be the sum of the value of those letters
    if (score !== undefined) {
      totalScore += score
    }
  }
  return totalScore
}

// Final Output:
const word = 'ALHASSAN'
const score = scrabble(word)
console.log(`The Scrabble score for "${word}" is ${score}.`)

module.exports = scrabble
