function scrabble(words) {
  // write code here
  const dictionary = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  }
  let fullTotal = 0
  if (typeof words !== 'string') {
    return 0
  }

  if (words.length === 0) {
    return 0
  }
  
  if (words === null) {
    return 0
  }

  for (let index = 0; index < words.length; index++) {
    let wordsCapit = words[index].toUpperCase()
    if (wordsCapit in dictionary) {
      fullTotal += dictionary[wordsCapit]
    }
  }

  console.log(fullTotal)
  return fullTotal
}
scrabble(' ')
module.exports = scrabble
