const keys = [
  { string: 'AEIOULNRST', points: 1 },
  { string: 'DG', points: 2 },
  { string: 'BCMP', points: 3 },
  { string: 'FHVWY', points: 4 },
  { string: 'K', points: 5 },
  { string: 'JX', points: 8 },
  { string: 'QZ', points: 10 }
]

function scrabble(str) {
  if (typeof str !== 'string') {
    return 0
  }
  const word = str.toUpperCase()
  let pointsOut = 0

  for (let i = 0; i <= word.length; i++) {
    keys.forEach((key) => {
      if (key.string.includes(word[i])) {
        pointsOut += key.points
      }
    })
  }
  return pointsOut
}

console.log(scrabble('apple'))

module.exports = scrabble
