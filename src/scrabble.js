function scrabble(aWord) {
  if (aWord === '' || aWord === ' \t\n' || aWord === null) {
    return 0
  } else {
    const newWord = aWord.toUpperCase()
    console.log('new word is', newWord)
    let sum = 0
    for (i = 0; i < newWord.length; i++) {
      if (
        newWord.charAt(i) === 'A' ||
        newWord.charAt(i) === 'E' ||
        newWord.charAt(i) === 'I' ||
        newWord.charAt(i) === 'O' ||
        newWord.charAt(i) === 'U' ||
        newWord.charAt(i) === 'L' ||
        newWord.charAt(i) === 'N' ||
        newWord.charAt(i) === 'R' ||
        newWord.charAt(i) === 'S' ||
        newWord.charAt(i) === 'T'
      ) {
        sum += 1
      }
      if (newWord.charAt(i) === 'D' || newWord.charAt(i) === 'G') {
        sum += 2
      }
      if (
        newWord.charAt(i) === 'B' ||
        newWord.charAt(i) === 'C' ||
        newWord.charAt(i) === 'M' ||
        newWord.charAt(i) === 'P'
      ) {
        sum += 3
      }
      if (
        newWord.charAt(i) === 'F' ||
        newWord.charAt(i) === 'H' ||
        newWord.charAt(i) === 'V' ||
        newWord.charAt(i) === 'W' ||
        newWord.charAt(i) === 'Y'
      ) {
        sum += 4
      }
      if (newWord.charAt(i) === 'K') {
        sum += 5
      }
      if (newWord.charAt(i) === 'J' || newWord.charAt(i) === 'X') {
        sum += 8
      }
      if (newWord.charAt(i) === 'Q' || newWord.charAt(i) === 'Z') {
        sum += 10
      }
    }
    return sum
  }
}

console.log('test', scrabble('OXYPHENBUTAZONE'))
module.exports = scrabble
