// Define a function to calculate the letter score for a single letter
function calculateLetterScore(letter) {
  const letterValues = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

  return letterValues[letter.toUpperCase()];
}
console.log(calculateLetterScore('A'));
console.log(calculateLetterScore('M'));
console.log(calculateLetterScore('I'));
console.log(calculateLetterScore('N'));

// Define a function to calculate the word score for a given word (by adding together scores of each letter)
function scrabble(word) {
  let score = 0;
  if (!word || /^\s*$/.test(word)) {
// If the word is empty (not a word), null or whitespace, return a score of 0
    score = 0;
    } else {
  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    score += calculateLetterScore(letter);
  }
}
  return score;
}

module.exports = scrabble


// PSEUDO CODE
// Define a function to calculate the word score for a single letter (object and key value pairs)
// Define a table of letter values
// Look up the score for the given letter
// Return the score
// Define a function to calculate the word score for a given word
// If the word is empty, null, or whitespace, return a score of 0 (if/else statement)
// Loop through each letter in the word and add up the scores (for loop)
// Return the total score for the word
