  function scrabble() {
    // write code here
  // 1. Assigning the letters to scores
  const letterScore = {
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
    Z: 10
  }
  
  // 2. Create a function called 'scrabble' with one parameter called 'word'
  function scrabble(word) {
    if (word === null || word.trim() === '') {
      return 0
    }
  
    // 3. Create a variable that keeps track of the totalScore
    let totalScore = 0
  
    // 4. Create a loop that iterates through the word that is passed through the function
    for (let i = 0; i < word.length; i++) {
      // 5. Create a variable and store one letter and apply upperCase method
      const aLetter = word[i].toUpperCase()
  
      // 6. Check if a letter is in the letterScore, then update the totalScore
      if (aLetter in letterScore) {
        totalScore += letterScore[aLetter]
      }
    }
    return totalScore
  }
  
  console.log(scrabble('hello')) // Should return 8
  console.log(scrabble('')) // Should return 0
  console.log(scrabble(' \t\n')) // Should return 0
  console.log(scrabble(null)) // Should return 0
  console.log(scrabble('f')) // Should return 4
  console.log(scrabble('street')) // Should return 6
  console.log(scrabble('quirky')) // Should return 22
  console.log(scrabble('OXYPHENBUTAZONE')) // Should return 41
  
  module.exports = scrabble










}

module.exports = scrabble
