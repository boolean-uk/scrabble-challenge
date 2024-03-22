
function scrabble(word) {
  let score = 0
  if (word === null) {
    score = 0
  } else for (let a = 0; a < word.length; a++){
    const inputWord = word.toLowerCase()[a]
    if (inputWord === '/') {
      score = 0
      return score
    } else   switch (inputWord) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'l':
      case 'n':
      case 'r':
      case 's':
      case 't':
        score += 1
        break
      case 'd':
      case 'g':
        score += 2
        break
      case 'b':
      case 'c':
      case 'm':
      case 'p':
        score += 3
        break
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        score += 4
        break
      case 'k':
        score += 5
        break
      case 'j':
      case 'x':
        score += 8
        break
      case 'q':
      case 'z':
        score += 10
        break
    }
  }
     
  return score
}

const word = scrabble('Azan')
console.log(word)

module.exports = scrabble


