function scrabble(aWord) {
  if (aWord === '' || aWord === ' \t\n' || aWord === null) {
    return 0
  } else {
    const newWord = aWord.toUpperCase()
    console.log('new word is', newWord)
    let sum = 0
    for (i = 0; i < newWord.length; i++) {
      if (
        newWord[i].includes('A') ||
        newWord[i].includes('E') ||
        newWord[i].includes('I') ||
        newWord[i].includes('O') ||
        newWord[i].includes('U') ||
        newWord[i].includes('L') ||
        newWord[i].includes('N') ||
        newWord[i].includes('R') ||
        newWord[i].includes('S') ||
        newWord[i].includes('T')
      ) {
        sum += 1
      }
      if (newWord[i].includes('D') || newWord[i].includes('G')) {
        sum += 2
      }
      if (
        newWord[i].includes('B') ||
        newWord[i].includes('C') ||
        newWord[i].includes('M') ||
        newWord[i].includes('P')
      ) {
        sum += 3
      }
      if (
        newWord[i].includes('F') ||
        newWord[i].includes('H') ||
        newWord[i].includes('V') ||
        newWord[i].includes('W') ||
        newWord[i].includes('Y')
      ) {
        sum += 4
      }
      if (newWord[i].includes('K')) {
        sum += 5
      }
      if (newWord[i].includes('J') || newWord[i].includes('X')) {
        sum += 8
      }
      if (newWord[i].includes('Q') || newWord[i].includes('Z')) {
        sum += 10
      }
    }
    return sum
  }
}

console.log('test', scrabble('OXYPHENBUTAZONE'))
module.exports = scrabble
