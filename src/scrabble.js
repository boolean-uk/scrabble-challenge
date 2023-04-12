const score = [
  'A',
  'E',
  'I',
  'O',
  'U',
  'L',
  'N',
  'R',
  'S',
  'T',
  'D',
  'G',
  'B',
  'C',
  'M',
  'P',
  'F',
  'H',
  'V',
  'W',
  'Y',
  'K',
  'J',
  'X',
  'Q',
  'Z'
  // A: 1,
  // E: 1,
  // I: 1,
  // O: 1,
  // U: 1,
  // L: 1,
  // N: 1,
  // R: 1,
  // S: 1,
  // T: 1,
  // D: 2,
  // G: 2,
  // B: 3,
  // C: 3,
  // M: 3,
  // P: 3,
  // F: 4,
  // H: 4,
  // V: 4,
  // W: 4,
  // Y: 4,
  // K: 5,
  // J: 8,
  // X: 8,
  // Q: 10,
  // Z: 10
]

let total = 0

function scrabble(word) {
  const input = word.toUpperCase()
  for (let i = 0; i < input.length; i++) {
    const wordLetter = input.charAt(i)
    for (let j = 0; j < score.length; j++) {
      const letterScore = score[j]
      if (wordLetter === letterScore) {
        switch (wordLetter) {
          case 'A':
            total += 1
            break
          case 'E':
            total += 1
            break
          case 'I':
            total += 1
            break
          case 'O':
            total += 1
            break
          case 'U':
            total += 1
            break
          case 'L':
            total += 1
            break
          case 'N':
            total += 1
            break
          case 'R':
            total += 1
            break
          case 'S':
            total += 1
            break
          case 'T':
            total += 1
            break
          case 'D':
            total += 2
            break
          case 'G':
            total += 2
            break
          case 'B':
            total += 3
            break
          case 'C':
            total += 3
            break
          case 'M':
            total += 3
            break
          case 'P':
            total += 3
            break
          case 'F':
            total += 4
            break
          case 'H':
            total += 4
            break
          case 'V':
            total += 4
            break
          case 'W':
            total += 4
            break
          case 'Y':
            total += 4
            break
          case 'K':
            total += 5
            break
          case 'J':
            total += 8
            break
          case 'X':
            total += 8
            break
          case 'Q':
            total += 10
            break
          case 'Z':
            total += 10
            break
        }
      }
    }
  }
}

scrabble('OXYPHENBUTAZONE')
console.log(total)

module.exports = scrabble
