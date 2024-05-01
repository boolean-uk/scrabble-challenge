
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
  if (word == null){
    return 0;
  }
  let score = 0;
  let wordMultiplier =1;

  for (let i = 0; i < word.length; i++){
    const char = word[i];

    if (char === '{' || char === '[') {
      let endChar = char === '{' ? '}': ']';
      let modifier = char === '{'? 2 : 3;
      i++;
      const letter = word[i];
      if (!letter) break;
      score += (letterValues[letter.toUpperCase()] || 0) * modifier;
      i++;
      while (i < word.length && word[i] !== endChar)
      i++;
    }
    else if (char === '(') { 

      wordMultiplier = 2;
    }
    else if (char === '['){
      wordMultiplier = 3;
    }
    else {
      score += letterValues[char.toUpperCase()] || 0;

    }
  }
  return score * wordMultiplier;
}

module.exports = scrabble;
