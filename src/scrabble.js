const { letters, scores } = require('./scrabbleinfo.js')

function scrabble(word) {
  let total = 0
  if (typeof word !== 'string') {
    return total
  }
  word = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    const index = letters.indexOf(word[i])
    const score = scores[index]
    if (score === undefined) {
      total = 0
      break
    }
    total += score
  }
  /*
  if (word[0] === '{' && word[word.length - 1] === '}') {
    total += total
  } else if (word[0] === '[' && word[word.length - 1] === ']') {
    total = total * 3
  }
  */
  console.log(total)
  return total
}

scrabble('{monkey}')

module.exports = scrabble
