function scrabble(word) {
  let wordMultiplier = 1

  if (checkInput(word)) {
    while (doubleTripleWord(word) !== 1) {
      wordMultiplier *= doubleTripleWord(word)
      if (wordMultiplier > 1) {
        const arrWord = word.split('')
        arrWord.shift()
        arrWord.pop()
        word = arrWord.join('')
      }
    }

    const wordScore = scoreLetters(word)
    return wordScore * wordMultiplier
  } else {
    return 0
  }
}

function checkInput(word) {
  const inputRegex = /[^a-zA-Z{}[\]]/gi

  if (!word) {
    return 0
  } else if (inputRegex.test(word)) {
    return 0
  }

  return 1
}

function doubleTripleWord(word) {
  if (word[0] === '{' && word[word.length - 1] === '}' && word[2] !== '}') {
    return 2
  } else if (
    word[0] === '[' &&
    word[word.length - 1] === ']' &&
    word[2] !== ']'
  ) {
    return 3
  } else {
    return 1
  }
}

function scoreLetters(word) {
  let sum = 0
  let letterMultiplier = 1

  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case '{':
        if (word[i + 2] === '}') {
          letterMultiplier = 2
        } else {
          return 0
        }
        break
      case '[':
        if (word[i + 2] === ']') {
          letterMultiplier = 3
        } else {
          return 0
        }
        break
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
        sum += 1 * letterMultiplier
        break
      case 'd':
      case 'g':
      case 'D':
      case 'G':
        sum += 2 * letterMultiplier
        break
      case 'b':
      case 'c':
      case 'm':
      case 'p':
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        sum += 3 * letterMultiplier
        break
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        sum += 4 * letterMultiplier
        break
      case 'k':
      case 'K':
        sum += 5 * letterMultiplier
        break
      case 'j':
      case 'x':
      case 'J':
      case 'X':
        sum += 8 * letterMultiplier
        break
      case 'q':
      case 'z':
      case 'Q':
      case 'Z':
        sum += 10 * letterMultiplier
        break
      case '}':
      case ']':
        if (word[i - 2] === '[' || word[i - 2] === '{') {
          letterMultiplier = 1
        } else {
          return 0
        }
        break
    }
  }

  return sum
}

module.exports = scrabble
