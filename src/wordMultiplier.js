const wordMultiplier = (word, result) => {
  let sum = result
  word = word.split('')
  if (word[0] === '[' && word[word.length - 1] === ']' && word[2] !== ']') {
    sum = sum * 3
    word.pop()
    word.shift()
  }
  if (word[0] === '{' && word[word.length - 1] === '}' && word[2] !== '}') {
    sum = sum * 2
    word.pop()
    word.shift()
  }
  if (word[0] === '[' && word[word.length - 1] === ']' && word[2] !== ']') {
    sum = sum * 3
    word.pop()
    word.shift()
  }
  return sum
}
module.exports = wordMultiplier
