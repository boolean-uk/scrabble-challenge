function scrabble(scrabbleWord) {
  if (!scrabbleWord) return 0
  const libary = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
  }
  let sum = 0
  scrabbleWord = scrabbleWord.toLowerCase()

  for (let i = 0; i < scrabbleWord.length; i++) {
    sum += libary[scrabbleWord[i]] || 0

    // double or triple word to come here ( look at if statements )
  }
  if (
    scrabbleWord[0] === '[' &&
    scrabbleWord[scrabbleWord.length - 1] === ']'
  ) {
    return sum * 3
  } else if (
    scrabbleWord[0] === '{' &&
    scrabbleWord[scrabbleWord.length - 1] === '}'
  ) {
    return sum * 2
  }
  return sum
}
// function tripler (triple){
//   if(scrabbledWord[0] && scrabbledWord[scrabbledWord.length-1]) = []
// return scrabble * 3
// }
console.log(scrabble('cat'))

module.exports = scrabble
