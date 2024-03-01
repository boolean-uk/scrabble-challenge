//input : word, output: score
//Given a word, return the amount of points it'll score.
//1.create a function that accepts a word parameter
//2.create a variable for the letter values
//3.create a for loop that goes through each letter in the word adding a point to the result
//4.return the result
//5.console.log to test it!

function scrabble(word) {
  if (word === null || word === undefined){
    return 0 
  }
  const letterValues = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
      
      'D': 2, 'G': 2,
      
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      
      'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
      
      'K': 5,

      'J': 8, 'X': 8,

      'Q': 10, 'Z': 10
  }
 let result = 0;
  for (let i = 0; i < word.length; i++) {
      let j = word[i].toUpperCase();
      result += letterValues[j] || 0;
  }
  return result
}
console.log(scrabble('sami'))
module.exports = scrabble
