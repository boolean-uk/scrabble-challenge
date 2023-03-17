function normalScore(aWord) {
  if (aWord === '' || aWord === ' \t\n' || aWord === null) {
    return 0
  } else {
    const newWord = aWord
    console.log('new word is', newWord)
    let sum = 0
    for (let i = 0; i < newWord.length; i++) {
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
        newWord[i].includes('T') ||
        newWord[i].includes('a') ||
        newWord[i].includes('e') ||
        newWord[i].includes('i') ||
        newWord[i].includes('o') ||
        newWord[i].includes('u') ||
        newWord[i].includes('l') ||
        newWord[i].includes('n') ||
        newWord[i].includes('r') ||
        newWord[i].includes('s') ||
        newWord[i].includes('t')
      ) {
        sum += 1
      }
      if (
        newWord[i].includes('D') ||
        newWord[i].includes('G') ||
        newWord[i].includes('d') ||
        newWord[i].includes('g')
      ) {
        sum += 2
      }
      if (
        newWord[i].includes('B') ||
        newWord[i].includes('C') ||
        newWord[i].includes('M') ||
        newWord[i].includes('P') ||
        newWord[i].includes('b') ||
        newWord[i].includes('c') ||
        newWord[i].includes('m') ||
        newWord[i].includes('p')
      ) {
        sum += 3
      }
      if (
        newWord[i].includes('F') ||
        newWord[i].includes('H') ||
        newWord[i].includes('V') ||
        newWord[i].includes('W') ||
        newWord[i].includes('Y') ||
        newWord[i].includes('f') ||
        newWord[i].includes('h') ||
        newWord[i].includes('v') ||
        newWord[i].includes('w') ||
        newWord[i].includes('y')
      ) {
        sum += 4
      }
      if (newWord[i].includes('K') || newWord[i].includes('k')) {
        sum += 5
      }
      if (
        newWord[i].includes('J') ||
        newWord[i].includes('X') ||
        newWord[i].includes('j') ||
        newWord[i].includes('x')
      ) {
        sum += 8
      }
      if (
        newWord[i].includes('Q') ||
        newWord[i].includes('Z') ||
        newWord[i].includes('q') ||
        newWord[i].includes('z')
      ) {
        sum += 10
      }
    }
    return sum
  }
}

function doubleLetter(aWord) {
  const regex1 = /{\w}/g
  const found1 = aWord.match(regex1)
  const doubleLetter = normalScore(found1) * 2
  return doubleLetter
}

function trippleLetter(aWord) {
  const regex2 = /\[[\w]/g
  const found2 = aWord.match(regex2)
  const trippleLetter = normalScore(found2) * 3
  return trippleLetter
}

function normalLetter(aWord) {
  const split = aWord.replaceAll(/{\w}/g, '')
  const split2 = split.replaceAll(/\[[\w]/g, '')
  return normalScore(split2)
}

function scrabble(aWord) {
  if (typeof aWord === 'string') {
    const myLength = aWord.length
    if (aWord[0] === '[' && aWord[myLength - 1] === ']') {
      const newWord2 = aWord.slice(1, myLength - 1)
      console.log('newWord', newWord2)
      if (newWord2[0] === '{') {
        const tripleWords =
          (normalScore(newWord2) * 3 +
            doubleLetter(newWord2) +
            trippleLetter(newWord2)) *
          2
        return tripleWords
      } else {
        const tripleWords =
          normalLetter(newWord2) * 3 +
          doubleLetter(newWord2) +
          trippleLetter(newWord2)
        return tripleWords
      }
    }
    const myLength2 = aWord.length
    if (aWord[0] === '{' && aWord[myLength2 - 1] === '}' && aWord[2] !== '}') {
      const newWord3 = aWord.slice(1, myLength - 1)
      const doubleWords =
        (normalLetter(newWord3) +
          doubleLetter(newWord3) +
          trippleLetter(newWord3)) *
        2
      return doubleWords
    }
    if (
      (aWord.includes('[') && aWord.includes(']')) ||
      (aWord.includes('{') && aWord.includes('}'))
    ) {
      const finalScore =
        normalLetter(aWord) + doubleLetter(aWord) + trippleLetter(aWord)

      return finalScore
    }
    if (
      (aWord.includes('[') && !aWord.includes(']')) ||
      (aWord.includes('{') && !aWord.includes('}')) ||
      (aWord.includes(']') && !aWord.includes('[')) ||
      (aWord.includes('}') && !aWord.includes('{')) ||
      aWord.includes('|') ||
      aWord.includes('%') ||
      aWord.includes('$') ||
      aWord.includes('£') ||
      aWord.includes('€') ||
      aWord.includes('=') ||
      aWord.includes('/')
    ) {
      return 0
    } else {
      return normalScore(aWord)
    }
  } else {
    return 0
  }
}

console.log('test scrabble', scrabble('dog'))

module.exports = scrabble
