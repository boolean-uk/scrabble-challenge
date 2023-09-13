const scores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

// function scrabble(word){
//   let sum = 0
//   for (let i = 0; i < word.length; i++) {
//     sum += scores[word[i]]
//   }
//   return sum
// }

function scrabble(word) {
  // write code here
  if (
    word === null ||
    word === '' ||
    word === ' \t\n' ||
    typeof word !== 'string'
  ) {
    return 0
  }
  const caseSensitive = word.toLowerCase()
  let sum = 0
  // const object = Object.keys(scores)
  for (let i = 0; i < caseSensitive.length; i++) {
    sum += scores[caseSensitive[i]]
    // if (object.includes(caseSensitive[i])) {
    //   sum += scores[caseSensitive.charAt(i)]
    // }
  }
  return sum
}

console.log(scrabble('quirky'))
console.log(scrabble('OXYPHENBUTAZONE'))
console.log(scrabble())

module.exports = scrabble
