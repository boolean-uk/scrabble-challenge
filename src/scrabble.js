function scrabble(word) {
  let value = 0
  if (word === null) {
    return 0
  }
  const arr = word.toUpperCase().split('')
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N':
      case 'R':
      case 'S':
      case 'T':
        value += 1
        break
      case 'D':
      case 'G':
        value += 2
        break
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        value += 3
        break
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        value += 4
        break
      case 'K':
        value += 5
        break
      case 'J':
      case 'X':
        value += 8
        break
      case 'Q':
      case 'Z':
        value += 10
        break
    }
  }
  return value
}
console.log(scrabble('OXYPHENBUTAZONE'))
module.exports = scrabble
