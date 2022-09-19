// Next steps:
// 1. We need to exclude certain brackets from the onlyLetters function and allow those words to continue
// 2. Perhaps this could also be done with Regular Expressions. If not, we need to use some kind of loop maybe
// 3. We need to check if those brackets are present. If at the start and end, we change the score
// 4. If in the middle of the word, we get the index of those brackets and get the difference
// 5. We add the points bonus to the score variable
// 6. Possibly do all this in an extra 'bonusPoints' function to keep it clean

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
  z: 10,
  '{': 0,
  '}': 0,
  '[': 0,
  ']': 0
}

function scrabble(word) {
  // guard clause to root out the null and empty string values
  if (!word || word.trim() === '') return 0

  // force the word to lower case and then split into an array for easier looping
  const wordArray = word.toLowerCase().split('')
  let score = 0

  console.log(wordArray)

  // loop through the array and, accessing the object, we can add the correct points to the score
  for (let i = 0; i < wordArray.length; i++) {
    score += points[wordArray[i]]
  }

  bonusChecker(wordArray, score)

  // forEach version, nicer looking and easier to understand
  // wordArray.forEach((letter) => {
  //   score += points[letter]
  // })

  return score
}

function bonusChecker(wordArray, score) {
  for (let j = 0; j < wordArray.length; j++) {
    if (wordArray[j] === '{' && wordArray[j + 2] === '}') {
      score += points[wordArray[j + 1]] * 2
    } else if (wordArray[j] === '[' && wordArray[j + 2] === ']') {
      score += points[wordArray[j + 1]] * 3
    } else {
      return score
    }
  }
}
// function onlyLetters(str) {
//   return /^[a-zA-Z]+$/.test(str)
// }

// function squareBracketChecker(str) {
//   return /\[(.*?)\]/.test(str)
// }

// function curlyBracketChecker(str) {
//   return /\{(.*?)\}/.test(str)
// }

console.log(scrabble('moose'))
// console.log(scrabble('quirky'))
// console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
