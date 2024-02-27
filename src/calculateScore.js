function calculateScore(word) {
  // Define my letter values.
  const letterValues = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z']
  }
  // Convert the word to lowercase, so there is no case incensitivity.
  const lowercaseWord = word.toLowerCase()

  // Calculate the score.
  let score = 0
  for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i]

    // Check if the letter is in the letterValues object
    // eslint-disable-next-line no-prototype-builtins
    if (letterValues.hasOwnProperty(letter)) {
      score += letterValues[letter]
    }
  }
  return score
}

const word = 'cabbage'
const score = calculateScore(word)
console.log(`The Scrabble score for "${word}" is ${score} points.`)
