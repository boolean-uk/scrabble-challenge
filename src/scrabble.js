
const letterValues = {
  'A': 1, 'E':1, 'I':1, 'O':1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2, 
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10,
}

function scrabble(word) {
  // write code here
  if (word === null){
    return 0; //Return a score of 0 for invalid input.
  }
  let score = 0;  //Initialize score
  let wordMultiplier = 1; // For double or triple word scores.

  for (let i = 0; i < word.length; i++){
    const char = word[i]; //Get the current character from the word to process its score.

    if (char === '{' || char === '[') { //Determine modifier for double or triple letter scores.
      let endChar = char === '{' ? '}': ']'; //Determine the corresponding closing bracket for a double or triple letter modefier.
      let modifier = char === '{'? 2 : 3; // Double or triple letter score.
      i++;  //Move past the opening bracket
      const letter = word[i]; //Retrieve the current letter from the word for processing.
      if (!letter) break; // Skip if no letter follows
      score += (letterValues[letter.toUpperCase()] || 0) * modifier; //Add the letter's score to the total, applying a double or triple modifier if necessary.
      i++;
      while (i < word.length && word[i] !== endChar) // Skip to the closing bracket.
      i++;
    }
    else if (char === '(') { 

      wordMultiplier = 2; // Double word score.
    }
    else if (char === '['){
      wordMultiplier = 3; // Triple word score 
    }
    else {
      score += letterValues[char.toUpperCase()] || 0; // Regular letter score 

    }
  }
  return score * wordMultiplier; // Apply word multiplier.
}

module.exports = scrabble;
