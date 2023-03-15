/**
 * iterate through the word and check if each letter is a string, object or array
 * check if the entire word is a string, object or array
 * could convert all input characters to upper case to make code case-insensitive
 *
 */

const letterValues = {
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

function scrabble(enteredWord) {
  if (typeof enteredWord !== `string` || enteredWord === ``) {
    console.log(`Please enter a valid word`)
    return 0
  }
  let wordScore = 0
  enteredWord = enteredWord.toLowerCase()
  for (let i = 0; i < enteredWord.length; i++) {
    if (
      enteredWord[i] === ' ' ||
      enteredWord[i] === `\t` ||
      enteredWord[i] === `\n` ||
      /\d/.test(enteredWord)
    ) {
      console.log(`Invalid character detected`)
      return 0
    } else {
      // console.log(enteredWord[i])
      // console.log(letterValues)
      // console.log(letterValues[enteredWord[i]])
      wordScore += letterValues[enteredWord[i]]
    }
  }
  return wordScore
}
// console.log(typeof wordScore)
console.log(scrabble(`abc1`))

module.exports = scrabble
