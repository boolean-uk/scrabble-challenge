function scrabble(word) {

  let onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  let twoPoint = ['D', 'G']
  let threePoint = ['B', 'C', 'M', 'P']
  let fourPoint = ['F', 'H', 'V', 'W', 'Y']
  let fivePoint = ['K']
  let eightPoint = ['J', 'X']
  let tenPoint = ['Q', 'Z']

  let score = 0

  if (word === '' || word === undefined || word === null) {
    score = 0
    return score
  } else {
    let letters = word.split('')
    for (let i = 0; i < letters.length; i++) {
      let capitalLetter = letters[i].toUpperCase()
      if (onePoint.includes(capitalLetter)) {
        score += 1
      } else if (twoPoint.includes(capitalLetter)) {
        score += 2
      } else if (threePoint.includes(capitalLetter)) {
        score += 3
      } else if (fourPoint.includes(capitalLetter)) {
        score += 4
      } else if (fivePoint.includes(capitalLetter)) {
        score += 5
      } else if (eightPoint.includes(capitalLetter)) {
        score += 8
      } else if (tenPoint.includes(capitalLetter)) {
        score += 10
      }
    }
    return score
  }
}

module.exports = scrabble
