const letterDoubler = require('./letterx2.js')
const letterTripler = require('./letterx3.js')
const core = require('./Core.js')
const kingFilter = require('./filter.js')
const wordMultiplier = require('./wordMultiplier')

const scrabble = (word) => {
  if (typeof word !== 'string') {
    return 0
  }
  if (kingFilter(word) === false) {
    return 0
  }
  let result = 0
  result = core(word)
  result += letterDoubler(word)
  result += letterTripler(word)
  const finalScore = wordMultiplier(word, result)
  return finalScore
}
module.exports = scrabble
