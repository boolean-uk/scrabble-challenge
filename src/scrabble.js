function scrabble(word) {
  // Handle null, empty, or whitespace-only inputs
  if (!word || typeof word !== 'string' || !word.trim()) return 0

  // Define letter values for scoring
  const letterValues = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  }

  // Define bracket characters with their multipliers
  const brackets = {
    '{': 2,
    '[': 3,
    ']': 3,
    '}': 2
  }

  // Clean up the word and convert it to uppercase
  word = word.trim().toUpperCase()
  let score = 0
  let multiplier = 1

  // Iterate through each character in the word
  for (let i = 0; i < word.length; i++) {
    // Check if the character is a bracket
    if (word[i] in brackets) {
      // Update the multiplier based on the bracket
      multiplier = parseBracket(word[i], multiplier)
      continue
    }

    // Check if the character is not a letter value
    if (!(word[i] in letterValues)) {
      return 0
    }

    // Add the letter's value to the score with the current multiplier
    score += letterValues[word[i]] * multiplier
  }

  // If there's a remaining multiplier, return 0 (invalid input)
  if (multiplier !== 1) {
    return 0
  }

  return score
}

// Function to increase the multiplier
function increaseMultipler(multiplier, value) {
  return (multiplier *= value)
}

// Function to decrease the multiplier
function decreaseMultiplier(multiplier, value) {
  return (multiplier /= value)
}

// Function to parse brackets and update the multiplier accordingly
function parseBracket(bracket, multiplier) {
  switch (bracket) {
    case '{':
      return increaseMultipler(multiplier, 2)
    case '[':
      return increaseMultipler(multiplier, 3)
    case '}':
      return decreaseMultiplier(multiplier, 2)
    case ']':
      return decreaseMultiplier(multiplier, 3)
  }
}

module.exports = scrabble

// Test cases
console.log(scrabble('')) // should return 0
console.log(scrabble(' \t\n')) // should return 0
console.log(scrabble(null)) // should return 0
console.log(scrabble('a')) // should return 1
console.log(scrabble('f')) // should return 4
console.log(scrabble('street')) // should return 6
console.log(scrabble('quirky')) // should return 22
console.log(scrabble('OXYPHENBUTAZONE')) // should return 41
console.log(scrabble('d{og}')) // should return 8
console.log(scrabble('d{o}g')) // should return 6
