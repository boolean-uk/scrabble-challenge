// 1.Create a score chart
// 2.Create a if statment that returns 0 if
// scrabble('') // should return 0
// scrabble(" \t\n") // should return 0
// scrabble(null) // should return 0
// 3. Somehow loop throught the word and count the letters
// 4.Count the points

function scrabble(word) {
  const scoreBoard = {
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
  if ((!word, typeof word !== 'string')) {
    return 0
  }
  let points = 0
  for (let x = 0; x < word.length; x++) {
    const letters = word[x].toUpperCase()
    // console.log(letters)
    if (word === '' || word === '\t' || word === '\n' || word === null) {
      return 0
    }

    if (letters in scoreBoard) {
      points += scoreBoard[letters]
      //   console.log(points)
    }
    // if (letters === '{' && letters === '}')
    // {
    //     points += scoreBoard[letters] * 2
    // }
    // if (letters.indexOf('{}')) {
    //   points += scoreBoard * 2
    //   console.log('miau')
    // }
  }
  return points
}

// scrabble('d[o]g')

module.exports = scrabble
