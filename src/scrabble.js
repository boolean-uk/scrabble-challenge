const {
  letters,
  scores,
  doubleWord,
  tripleWord,
  error
} = require('./scrabbleinfo')

function scrabble(word) {
  let total = 0
  if (typeof word !== 'string') {
    return total
  }
  word = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    const index = letters.indexOf(word[i])
    let score = scores[index]
    if (score === undefined) {
      total = 0
      break
    }
    if (word[i - 1] === '[' && word[i + 1] === ']') {
      score = score * 3
    }
    if (word[i - 1] === '{' && word[i + 1] === '}') {
      score = score * 2
    }
    total += score
  }
  if (tripleWord.test(word)) {
    tripleWord.test(word)
    total = total * 3
    word = word.slice(1, word.length - 1)
  }
  if (doubleWord.test(word)) {
    doubleWord.test(word)
    total = total * 2
  }
  if (error(word) === true) {
    total = 0
  }

  return total
}

module.exports = scrabble
