const scoreLibrary = [
  { letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], score: 1 },
  { letters: ['D', 'G'], score: 2 },
  { letters: ['B', 'C', 'M', 'P'], score: 3 },
  { letters: ['F', 'H', 'V', 'W', 'Y'], score: 4 },
  { letters: ['K'], score: 5 },
  { letters: ['J', 'X'], score: 8 },
  { letters: ['Q', 'Z'], score: 10 }
]

const scrabble = (str = '') => {
  if (typeof str !== 'string') return 0

  const strLetters = str.toUpperCase().split('')
  let scores = 0

  strLetters.forEach((item) => {
    scoreLibrary.forEach((scoreItem) => {
      if (scoreItem.letters.includes(item)) {
        scores += scoreItem.score
      }
    })
  })

  return scores
}

module.exports = scrabble
