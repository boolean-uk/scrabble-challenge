function scrabble(word) {
  const onePoint = [
    'A',
    'a',
    'E',
    'e',
    'I',
    'i',
    'O',
    'o',
    'U',
    'u',
    'L',
    'l',
    'N',
    'n',
    'R',
    'r',
    'S',
    's',
    'T',
    't'
  ]
  const twoPoints = ['D', 'd', 'G', 'g']
  const threePoints = ['B', 'C', 'M', 'P', 'b', 'c', 'm', 'p']
  const fourPoints = ['F', 'H', 'V', 'W', 'Y', 'f', 'h', 'v', 'w', 'y']
  const fivePoints = ['K', 'k']
  const eightPoints = ['J', 'X', 'j', 'x']
  const tenPoints = ['Q', 'Z', 'q', 'z']
  let points = 0

  // check if a valid word is given
  if (
    word === '' ||
    word === null ||
    word === ' \t\n' ||
    typeof word !== 'string' ||
    word === undefined
  ) {
    points = 0
    return 0 // `${word} is not a valid word. You get ${points} points`
  }
  for (const i of word) {
    if (onePoint.includes(i)) {
      points += 1
    } else if (twoPoints.includes(i)) {
      points += 2
    } else if (threePoints.includes(i)) {
      points += 3
    } else if (fourPoints.includes(i)) {
      points += 4
    } else if (fivePoints.includes(i)) {
      points += 5
    } else if (eightPoints.includes(i)) {
      points += 8
    } else if (tenPoints.includes(i)) {
      points += 10
    }
  }
  return points // `The word '${word}' gives you ${points} points!`
}

// console.log(scrabble('OXYPHENBUTAZONE'))

module.exports = scrabble
