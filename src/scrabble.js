function scrabble(word) {
  if (!word || typeof word !== 'string') {
    return 0;
  }

  // Define the letter values based on the Scrabble rules
  const letterValues = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10
  };

  // Convert the word to uppercase for consistency
  const upperWord = word.toUpperCase();

  // Initialize the total score to 0
  let totalScore = 0;

  // Loop through each letter in the word and calculate its score
  for (let i = 0; i < upperWord.length; i++) {
    // Find the corresponding value for the letter
    const value = Object.keys(letterValues).find(key => key.includes(upperWord[i]));
    // Add the score of the current letter to the total score
    totalScore += (value ? letterValues[value] : 0);
  }

  return totalScore;
}

module.exports = scrabble;
