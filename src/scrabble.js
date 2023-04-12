function scrabble(word) {
  const array = [
    'A1',
    'B3',
    'C3',
    'D2',
    'E1',
    'F4',
    'G2',
    'H4',
    'I1',
    'J8',
    'K5',
    'L1',
    'M3',
    'N1',
    'O1',
    'P3',
    'Q10',
    'R1',
    'S1',
    'T1',
    'U1',
    'V4',
    'W4',
    'X8',
    'Y4',
    'Z10'
  ]
  let points = 0
  if (word == null || word === '' || word === ' ') {
    return 0
  }
  for (let i = 0; i < word.length; i++) {
    const currchar = word.charAt(i).toUpperCase()
    for (let j = 0; j < array.length; j++) {
      if (currchar === array[j].charAt(0)) {
        if (array[j].length === 3) {
          points += 10
          break
        }
        points += parseInt(array[j].charAt(1))
        break
      }
    }
  }
  return points
}

module.exports = scrabble
