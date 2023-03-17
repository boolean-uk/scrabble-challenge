const scoreValues = {
  // Corresponding alphabet to letter score values
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
  Z: 10,
}

function isValidInput(word) {
  return (word !== undefined && word !== null);
}

function scrabble(word) {
  if (!isValidInput(word)) {
    return 0;
  }

  let s = 0; // stands for score 
  let wordMultiplier = 1;
  let i = 0;

  while (i < word.length) {
    let letter = word[i].toUpperCase();

    if (letter === '{' || letter === '[') {
      let closingChar = letter === '{' ? '}' : ']';
      let j = word.indexOf(closingChar, i + 1);
      if (j === -1) {
        return 0;
      }
      let letters = word.substring(i + 1, j).toUpperCase();
      let letterMultiplier = letter === '{' ? 2 : 3;
      for (let k = 0; k < letters.length; k++) {
        let letterScore = scoreValues[letters[k].toUpperCase()] || 0;
        s += letterScore * letterMultiplier;
        console.log(`letter: ${letters[k]}, multiplier: ${letterMultiplier}, score: ${letterScore}`);
      }
      i = j + 1;
    } else if (letter === '|') {
      let j = word.indexOf('|', i + 1);
      if (j === -1 || (j - i) % 2 === 0) {
        return 0;
      }
      let letters = word.substring(i + 1, j).toUpperCase();
      let letterMultiplier = 1;
      for (let k = 0; k < letters.length; k++) {
        let letterScore = scoreValues[letters[k].toUpperCase()] || 0;
        s += letterScore * letterMultiplier;
        console.log(`letter: ${letters[k]}, multiplier: ${letterMultiplier}, score: ${letterScore}`);
        letterMultiplier = letterMultiplier === 1 ? 2 : 1;
      }
      i = j + 1;
    } else if (letter === '(') {
      wordMultiplier *= 2;
      i++;
    } else if (letter === ')') {
      wordMultiplier *= 3;
      i++;
    } else if (scoreValues.hasOwnProperty(letter)) {
      let letterScore = scoreValues[letter];
      s += letterScore;
      console.log(`letter: ${letter}, score: ${letterScore}`);
      i++;
    } else {
      return 0;
    }
  }

  return s * wordMultiplier;

}

console.log(scrabble('[{dog}]')); //   Expected 15 to equal 30.
console.log(scrabble('{[d]og}'));  // Expected 10 to equal 18.

module.exports = scrabble;