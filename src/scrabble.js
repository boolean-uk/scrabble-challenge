function scrabble(word) {
  let score = 0
  // first we turn the word into an array
  if (word === undefined || word === null) return 0
  const arrWord = word.split('')
  for (let i = 0; i < arrWord.length; i++) {
    if ('AEIOULNRST'.includes(arrWord[i].toUpperCase())) {
      score += 1
    } else if ('DG'.includes(arrWord[i].toUpperCase())) {
      score += 2
    } else if ('BCMP'.includes(arrWord[i].toUpperCase())) {
      score += 3
    } else if ('FHVWY'.includes(arrWord[i].toUpperCase())) {
      score += 4
    } else if (arrWord[i].toUpperCase() === 'K') {
      score += 5
    } else if ('JX'.includes(arrWord[i].toUpperCase())) {
      score += 8
    } else if ('QZ'.includes(arrWord[i].toUpperCase())) {
      score += 10
    }
  }
  return score
}
console.log(scrabble('Hi'))
module.exports = scrabble
