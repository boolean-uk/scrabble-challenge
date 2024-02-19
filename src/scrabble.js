function scrabble(word) {
  if(word == null)
    return 0

  if(!IsValidMultiplier(word))
    return 0

  const score = CalculateScore(word)

  return score;
}

function IsValidMultiplier(word){
  let numCurlyBracketOpen = 0
  let numCurlyBracketClose = 0
  let numSquareBracketOpen = 0
  let numSquareBreacketClose = 0

  for (let i = 0; i < word.length; i++) {
    switch (word[i].toUpperCase()) {
      case '{':
        numCurlyBracketOpen += 1;
        break;
      case '}':
        numCurlyBracketClose += 1;
        break;
      case '[':
        numSquareBracketOpen += 1;
        break;
      case ']':
        numSquareBreacketClose += 1;
        break;

      case 'A': case 'E': case 'I': case 'O': case 'U': case 'L': case 'N': case 'R': case 'S': case 'T': case 'D': case 'G': case 'B':
      case 'C': case 'M': case 'P': case 'F': case 'H': case 'V': case 'W': case 'Y': case 'K': case 'J': case 'X': case 'Q': case 'Z':
        break;

      default: //Invalid character
        return false;
    }

    if(numCurlyBracketOpen < numCurlyBracketClose || numSquareBracketOpen < numSquareBreacketClose)
      return false
  }

  if(numCurlyBracketOpen != numCurlyBracketClose || numSquareBracketOpen != numSquareBreacketClose)
    return false

  return true
}

function CalculateScore(word){
  let score = 0;
  let multiplier = 1

  for (let i = 0; i < word.length; i++) {
    switch (word[i].toUpperCase()) {
      case '{':
        multiplier *= 2;
        break;
      case '}':
        multiplier /= 2;
        break;
      case '[':
        multiplier *= 3;
        break;
      case ']':
        multiplier /= 3;
        break;

      case 'A': case 'E': case 'I': case 'O': case 'U': case 'L': case 'N': case 'R': case 'S': case 'T':
        score += 1 * multiplier;
        break;
      case 'D': case 'G':
        score += 2 * multiplier;
        break;
      case 'B': case 'C': case 'M': case 'P':
        score += 3 * multiplier;
        break;
      case 'F': case 'H': case 'V': case 'W': case 'Y':
        score += 4 * multiplier;
        break;
      case 'K':
        score += 5 * multiplier;
        break;
      case 'J': case 'X':
        score += 8 * multiplier;
        break;
      case 'Q': case 'Z':
        score += 10 * multiplier;
        break;
    }
  }

  return score
}

// Example usage:
console.log(scrabble("{HEL[L]O}")); // Output: 8

module.exports = scrabble
