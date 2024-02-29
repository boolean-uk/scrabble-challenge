const values = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
}

// Scrabble function
function scrabble(word) {
  let total = 0
  const doubleOrTripleWord = doubleAndTripleCheck(word)
  const validWordCheck = checkWord(word)

  if (validWordCheck === false) {
    total = 0
    return total
  }

  if (
    doubleOrTripleWord.doubleWord === true ||
    doubleOrTripleWord.tripleWord === true
  ) {
    total = caculateDoubleAndTripleWordScore(word)
  } else {
    total = detectBracket(word)
    word = splitWords(word)
    for (const letter of word) {
      total += values[letter]
    }
  }

  return total
}

// Check if word is an actual word, without special characters
function checkWord(word) {
  let validWordCheck = true
  const specialChars = /[`!@#$%^&*()_+\-=;':"\\|,.<>/?~]/

  if (word === '' || word === null || word.includes(' ')) {
    validWordCheck = false
  } else if (
    (word.includes('{') && !word.includes('}')) ||
    (word.includes('}') && !word.includes('{')) ||
    (word.includes('[') && !word.includes(']')) ||
    (word.includes('[') && !word.includes(']'))
  ) {
    validWordCheck = false
  } else if (specialChars.test(word) === true) {
    validWordCheck = false
  }

  return validWordCheck
}

// Check if word contains any brackets and calculate the correspoding score if they do
function detectBracket(word) {
  let total = 0
  word = word.toUpperCase()

  if (word === '' || word === null) {
    total = 0
  } else if (word.includes('{') === true && word.includes('}') === true) {
    const re = /[^{]+(?=\})/g
    const found = word.match(re)
    word = found.toString()
    for (const letter of found) {
      total += values[letter] * 2
    }
  } else if (word.includes('[') === true && word.includes(']') === true) {
    const re = /(?<=\[).+?(?=\])/g
    const found = word.match(re)
    word = found.toString()
    for (const letter of word) {
      total += values[letter] * 3
    }
  } else {
    total = 0
  }

  return total
}

// If the word contains any brackets, split the word and take out the brackets
function splitWords(word) {
  word = word.toUpperCase()

  if (word.includes('{') === true && word.includes('}') === true) {
    const tempWord = word.split('{')
    const tempWord2 = tempWord[1].split('}')
    word = tempWord[0] + tempWord2[1]
  } else if (word.includes('[') === true && word.includes(']') === true) {
    const tempWord = word.split('[')
    const tempWord2 = tempWord[1].split(']')
    word = tempWord[0] + tempWord2[1]
  } else {
    return word
  }

  return word
}

// Check if the word contains double and triple brackets
function doubleAndTripleCheck(word) {
  const doubleAndTripleWords = { doubleWord: false, tripleWord: false }

  if (word === '' || word === null) {
    return doubleAndTripleWords
  } else if (
    word[0] === '{' &&
    word[word.length - 1] === '}' &&
    word[2] !== '}'
  ) {
    doubleAndTripleWords.doubleWord = true
  } else if (
    word[0] === '[' &&
    word[word.length - 1] === ']' &&
    word[2] !== ']'
  ) {
    doubleAndTripleWords.tripleWord = true
  }

  return doubleAndTripleWords
}

// Calculate score for two word mulipliers
function caculateDoubleAndTripleWordScore(word) {
  let doubleOrTripleWord = false
  let total = 0
  doubleOrTripleWord = doubleAndTripleCheck(word)
  word = word.toUpperCase()

  if (doubleOrTripleWord.doubleWord === true) {
    const re = /[^{]+(?=\})/g
    const found = word.match(re)
    word = found.toString()
    if (word[0] === '[' && word[word.length - 1] === ']') {
      const re = /(?<=\[).+?(?=\])/g
      const found = word.match(re)
      word = found.toString()
      for (const letter of word) {
        total += values[letter] * 2 * 3
      }
    } else if (word.indexOf('[') === -1 && word.indexOf(']') === -1) {
      for (const letter of word) {
        total += values[letter] * 2
      }
    } else {
      const re = /(?<=\[).+?(?=\])/g
      const found = word.match(re)
      const newWord = found.toString()
      for (const letter of newWord) {
        total += values[letter] * 3
      }
      word = splitWords(word)
      for (const letter of word) {
        total += values[letter]
      }
      total *= 2
    }
  } else if (doubleOrTripleWord.tripleWord === true) {
    const re = /(?<=\[).+?(?=\])/g
    const toUpperCase = word.toUpperCase()
    const found = toUpperCase.match(re)
    word = found.toString()
    if (word[0] === '{' && word[word.length - 1] === '}') {
      const re = /[^{]+(?=\})/g
      const found = word.match(re)
      word = found.toString()
      for (const letter of word) {
        total += values[letter] * 2 * 3
      }
    } else if (word.indexOf('{') === -1 && word.indexOf('}') === -1) {
      for (const letter of word) {
        total += values[letter] * 3
      }
    } else {
      const re = /[^{]+(?=\})/g
      const found = word.match(re)
      const newWord = found.toString()
      for (const letter of newWord) {
        total += values[letter] * 2
      }
      word = splitWords(word)
      for (const letter of word) {
        total += values[letter]
      }
      total *= 3
    }
  }

  return total
}

module.exports = scrabble
