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

function scrabble(word) {
  // guard clause to root out the null and empty string values
  if (!word || word.trim() === '') return 0

  // force the word to lower case and then split into an array for easier looping
  const wordArray = word.toLowerCase().split('')
  let score = 0

  // forEach version, nicer looking and easier to understand
  wordArray.forEach((letter) => {
    score += points[letter] || 0
  })

  // Moved code to a separate function, checks for bonus letters
  score = letterBonusChecker(wordArray, score)
  // Checks for whole word bonus
  score = wordBonusChecker(wordArray, score)

  return score
}

// takes in the full array and score. We loop through each letter in the array, and if we detect a certain bracket with a closing one 2
// indexes later, we adjust the score and return. If these brackets aren't detected, we return the original score and exit the function
function letterBonusChecker(wordArray, score) {
  for (let j = 0; j < wordArray.length; j++) {
    if (wordArray[j] === '{' && wordArray[j + 2] === '}') {
      score -= points[wordArray[j + 1]]
      score += points[wordArray[j + 1]] * 2
      return score
    } else if (wordArray[j] === '[' && wordArray[j + 2] === ']') {
      score -= points[wordArray[j + 1]]
      score += points[wordArray[j + 1]] * 3
      return score
    }
  }
  return score
}

function wordBonusChecker(wordArray, score) {
  if (wordArray[0] === '{' && wordArray[wordArray.length - 1] === '}') {
    const scoreWithBonus = score * 2
    return scoreWithBonus
  } else if (wordArray[0] === '[' && wordArray[wordArray.length - 1] === ']') {
    const scoreWithBonus = score * 3
    return scoreWithBonus
  } else {
    return score
  }
}

console.log('do[g]', scrabble('do[g]')) // 2 + 1 + 6 = should be 9
console.log('{dog}', scrabble('{dog}')) // (2 + 1 + 2) * 2 = should be 10
console.log('[dog]', scrabble('[dog]')) // should be 15
console.log('cabbage', scrabble('cabbage')) // should be 22
console.log('{O}XYPHENBUTAZONE', scrabble('{O}XYPHENBUTAZONE')) // should be 42
console.log('OXYPHENBUTAZ{O}NE', scrabble('OXYPHENBUTAZ{O}NE')) // should also be 42
console.log('hel!o', scrabble('hel!o'))

module.exports = scrabble
