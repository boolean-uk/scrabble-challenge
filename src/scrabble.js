function scrabble(word) {
  // guard clause to root out the null and empty string values
  if (!word) return 0

  // check if the word contains any unwanted characters. If so, return out of the function
  if (!onlyLetters(word)) return 0

  // force the word to lower case and then split into an array for easier looping
  const wordArray = word.toLowerCase().split('')
  let score = 0

  // // loop through the array and, accessing the object, we can add the correct points to the score
  // for (let i = 0; i < wordArray.length; i++) {
  //   score += points[wordArray[i]]
  // }

  // forEach version, nicer looking and easier to understand
  wordArray.forEach((letter) => {
    score += points[letter]
  })

  return score
}

const points = {
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

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str)
}

console.log(scrabble(' '))
console.log(scrabble('quirky'))
console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
