function scrabble(word) {
  // write code here

  const dictionary = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
    I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
    Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
    Y: 4, Z: 10
  };
    let total = 0
    if (typeof word  !== 'string' || word.length === 0) {
      return 0
     }
    for (let i = 0; i < word.length; i++) {
      let charCap = word[i].toUpperCase()
      if (charCap in dictionary) {
        total += dictionary[charCap]
      }
    }
    return total
  }
console.log(scrabble(''), ":f")
console.log(scrabble('street'), ": street")


module.exports = scrabble
