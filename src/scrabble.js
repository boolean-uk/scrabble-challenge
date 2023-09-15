 
 // write code here
 const letterScores = {'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 
 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3,
 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1,
 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10}

 
function scrabble (word) {
 if (!word){
   return 0
  } 

  let totalScore = 0
  for (let i = 0; i < word.length; i++){
    let eachWord = word[i].toUpperCase()
    if (letterScores[eachWord]){
      totalScore += letterScores[eachWord]
    }
  } 
  return totalScore
}
console.log(scrabble('come')) 














module.exports = scrabble