const letterValue1 = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
const letterValue2 = ['d', 'g']
const letterValue3 = ['b', 'c', 'm', 'p']
const letterValue4 = ['f', 'h', 'v', 'w', 'y']
const letterValue5 = ['k']
const letterValue8 = ['j', 'x']
const letterValue10 = ['q', 'z']

function scrabble(word) {
  let wordValue = 0
  if (word !== null) {
    word = word.toLowerCase().split('')

    for (let i = 0; i < word.length; i++) {
      if (letterValue1.includes(word[i])) {
        wordValue += 1
      }
      if (letterValue2.includes(word[i])) {
        wordValue += 2
      }
      if (letterValue3.includes(word[i])) {
        wordValue += 3
      }
      if (letterValue4.includes(word[i])) {
        wordValue += 4
      }
      if (letterValue5.includes(word[i])) {
        wordValue += 5
      }
      if (letterValue8.includes(word[i])) {
        wordValue += 8
      }
      if (letterValue10.includes(word[i])) {
        wordValue += 10
      }
    }
  }
  return wordValue
}

console.log(scrabble(null))

module.exports = scrabble
