// const letterScores = {
//   onepoint: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   twopoints: ['D', 'G'],
//   threepoints: ['B', 'C', 'M', 'P'],
//   fourpoints: ['F', 'H', 'V', 'W', 'Y'],
//   fivepoints: ['K'],
//   sixpoints: ['J', 'X'],
//   sevenpoints: ['Q', 'Z']
// } 

class Scrabble {
  constructor(word){
    this.word = word
  }
score() {
  //work out how to score here, probably with if statements
  if (this.word.length === 0) {
    return 0
  }
   
}
}

module.exports = Scrabble
