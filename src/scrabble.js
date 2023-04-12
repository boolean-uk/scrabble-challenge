function scrabble(word) {

  let oneValue = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  let twoValue = ['D', 'G']
  let threeValue = ['B', 'C', 'M', 'P']
  let fourValue = ['F', 'H', 'V', 'W', 'Y']
  let fiveValue = ['K']
  let eightValue = ['J', 'X']
  let tenValue = ['Q', 'Z']

  let score = 0

  if (word === '' || word === undefined || word === null) {
    return score = 0
  } else {
    let letters = word.split('')
    for (let i = 0; i < letters.length; i++) {
      let capitalLetter = letters[i].toUpperCase()
      if (oneValue.includes(capitalLetter)) {
        score += 1
      } else if (twoValue.includes(capitalLetter)) {
        score += 2
      } else if (threeValue.includes(capitalLetter)) {
        score += 3
      } else if (fourValue.includes(capitalLetter)) {
        score += 4
      } else if (fiveValue.includes(capitalLetter)) {
        score += 5
      } else if (eightValue.includes(capitalLetter)) {
        score += 8
      } else if (tenValue.includes(capitalLetter)) {
        score += 10
      }
    }
    return score
  }
}

module.exports = scrabble
