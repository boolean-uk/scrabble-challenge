function scrabble(word) {

  // write code here

  console.log('usama')

const letterScores = {

    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,

    D: 2, G: 2,

    B: 3, C: 3, M: 3, P: 3,

    F: 4, H: 4, V: 4, W: 4, Y: 4,

    K: 5,

    J: 8, X: 8,

    Q: 10, Z: 10

  }
  console.log(word)



  if (word === null ||  word === '' || word === '\t\n'){

    console.log('here')

    return 0

  }

  

  for ( let i = 0 ;   i<letterScores.length ;   i++ ) {



    let letter = word.toUpperCase()

        totalScore = letter + letterScores

        return totalScore

      }



}

const score = scrabble('')
console.log(score)
//module.exports = scrabble
console.log('show')