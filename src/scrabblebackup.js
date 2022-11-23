const array1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const array2 = ['D', 'G']
const array3 = ['B', 'C', 'M', 'P']
const array4 = ['F', 'H', 'V', 'W', 'Y']
const array5 = ['K']
const array8 = ['J', 'X']
const array10 = ['Q', 'Z']

function letterValue(letter) {
  let value = 0
  const letterUpper = letter.toUpperCase()
  // console.log(letterUpper)
  if (array1.includes(letterUpper)) {
    value += 1
    // console.log(value)
    return value
  } else if (array2.includes(letterUpper)) {
    value += 2
    return value
  } else if (array3.includes(letterUpper)) {
    value += 3
    return value
  } else if (array4.includes(letterUpper)) {
    value += 4
    return value
  } else if (array5.includes(letterUpper)) {
    value += 5
    return value
  } else if (array8.includes(letterUpper)) {
    value += 8
    return value
  } else if (array10.includes(letterUpper)) {
    value += 10
    return value
  } else {
    return value
  }
}

function scrabble(word) {
  let score = 0
  if (typeof word !== 'string' || word instanceof String) {
    return score
  }
  for (let i = 0; i < word.length; i++) {
    score += letterValue(word[i])
    // console.log(score)
  }
  return score
}

console.log(scrabble('cabbage'))

module.exports = scrabble
