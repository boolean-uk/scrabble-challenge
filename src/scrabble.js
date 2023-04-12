function scrabble(str) {
  // checking if the str is null
  if (str === null) {
    return 0
  }
  // initiate the counter
  let counterPoints = 0
  // creating the arrays with the letter groups
  const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  const twoPoint = ['D', 'G']
  const threePoint = ['B', 'C', 'M', 'P']
  const fourPoint = ['F', 'H', 'V', 'W', 'Y']
  const fivePoint = ['K']
  const eightPoint = ['J', 'X']
  const tenPoint = ['Q', 'Z']
  // make the given str all to uppercase
  const strUpper = str.toUpperCase()
  // console.log(strUpper)
  for (let i = 0; i < strUpper.length; i++) {
    if (onePoint.includes(strUpper[i])) {
      counterPoints += 1
    } else if (twoPoint.includes(strUpper[i])) {
      counterPoints += 2
    } else if (threePoint.includes(strUpper[i])) {
      counterPoints += 3
    } else if (fourPoint.includes(strUpper[i])) {
      counterPoints += 4
    } else if (fivePoint.includes(strUpper[i])) {
      counterPoints += 5
    } else if (eightPoint.includes(strUpper[i])) {
      counterPoints += 8
    } else if (tenPoint.includes(strUpper[i])) {
      counterPoints += 10
    }
  }
  // checks if theere is a word multiplier

  // if (strUpper.includes('{') && strUpper.includes('}')) {
  //   return counterPoints * 2
  // } else if (strUpper.includes('[') && strUpper.includes(']')) {
  //   return counterPoints * 3
  // } else if (strUpper.includes('[') && !strUpper.includes(']')) {
  //   return 0
  // } else if (strUpper.includes('{') && !strUpper.includes('}')) {
  //   return 0
  // } else if (!strUpper.includes('{') && !strUpper.includes('}')) {
  //   return 0
  // }
  return counterPoints
}

// console.log(scrabble('{dog}'))
module.exports = scrabble
