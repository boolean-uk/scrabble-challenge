const scoreTable = {
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

function scoreForLetter(letter) {
  return scoreTable[letter.toUpperCase()] || 0
}

function scrabble(word) {
  let totalScore = 0
  //   I have realy struggled without lines 37. my code was failing to proceed with line 40 without this guard.
  if (!word) {
    return 0
  }
  const upperCasedString = word.split('')
  upperCasedString.forEach((letter) => {
    totalScore += scoreForLetter(letter)
  })
  return totalScore
}
console.log(scrabble('Dorofi +ychuk'))

function doubleWord(word) {
  if (word[0] === '{' && word[word.length - 1] === '}') {
    return scrabble(word) * 2
  } else {
    return scrabble(word)
  }
}

console.log(doubleWord('{dorofiychuk}'))

function tripleWord(word) {
  if (word[0] === '[' && word[word.length - 1] === ']') {
    return scrabble(word) * 3
  } else {
    return scrabble(word)
  }
}
console.log(tripleWord('[dorofi-ychuk ]'))

function twoSameLettersInLine(word) {
  const initScore = scrabble(word)
  let bonusPoints = 0

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (word[i] === word[i - 1]) {
      bonusPoints += scoreForLetter(letter) * 3
      //   return scrabble(word) + bonusPoints
    }
  }
  console.log('bonus', bonusPoints)
  console.log('score', initScore)

  return initScore + bonusPoints
}

console.log(twoSameLettersInLine('Doorofiychuk'))

module.exports = scrabble
