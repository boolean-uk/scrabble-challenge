function scrabble() {}
      // write code here
const Libraryscores = {
  A: 1
  E: 1
  I: 1
  O: 1
  U: 1
  L: 1
  N: 1
  R: 1
  S: 1 
  T: 1 
  D: 2
  G: 2
  C: 3
  P: 3
  M: 3
  B: 3
  W: 4
  Y: 4
  H: 4
  F: 4
  V: 4
  K: 5
  J: 8
  X: 8
  Q: 10
  Z: 10
}

const scrubble (LibraryScore = str = '') => {
  if (Libraryscores === '' || Libraryscores === null || Libraryscores === ' \t\n') {
    return 0
}
const word = Libraryscores.toUppercase()
let sum = 0

for (let i = 0; i < word.lenght; 1++) {
  sum += [Libraryscores[i]]
}
return sum
}

console.log(scrubble(null))


module.exports = scrabble
