function scrabble(str) {
  if (str === '' || str === null || str === ' \t\n') {
    return 0
  }
  let addedTogether = 0
  str = str.toUpperCase()
  for (let i = 0; i <= str.length; i++) {
    if (
      str.charAt(i) === 'A' ||
      str.charAt(i) === 'E' ||
      str.charAt(i) === 'I' ||
      str.charAt(i) === 'O' ||
      str.charAt(i) === 'U' ||
      str.charAt(i) === 'L' ||
      str.charAt(i) === 'N' ||
      str.charAt(i) === 'R' ||
      str.charAt(i) === 'S' ||
      str.charAt(i) === 'T'
    ) {
      addedTogether += 1
    }
    if (str.charAt(i) === 'D' || str.charAt(i) === 'G') {
      addedTogether += 2
    }
    if (
      str.charAt(i) === 'B' ||
      str.charAt(i) === 'C' ||
      str.charAt(i) === 'M' ||
      str.charAt(i) === 'P'
    ) {
      addedTogether += 3
    }
    if (
      str.charAt(i) === 'F' ||
      str.charAt(i) === 'H' ||
      str.charAt(i) === 'V' ||
      str.charAt(i) === 'W' ||
      str.charAt(i) === 'Y'
    ) {
      addedTogether += 4
    }
    if (str.charAt(i) === 'K') {
      addedTogether += 5
    }
    if (str.charAt(i) === 'J' || str.charAt(i) === 'X') {
      addedTogether += 8
    }
    if (str.charAt(i) === 'Q' || str.charAt(i) === 'Z') {
      addedTogether += 10
    } 
  }
  return addedTogether
}

module.exports = scrabble
