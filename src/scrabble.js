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

// Scrabble function to calculate word score
// First check if the word is a valid word: if validWordCheck is false, return total is 0
// Then check if the word contains a double and triple word score. If it does, the total should be what is calculated in calculateDoubleAndTripleWordScore
// If none of this is the case, the word should be a normal word or a word with single brackets. In that case, the total should start with what is calculated in detectBracket and the word should be split. Where the double letter has been taken out. Then the normal word score can be calculated.
// In the end, the total should be returned
function scrabble(word) {
  let total = 0
  const doublePlusTripleWord = doubleAndTripleCheck(word)
  const validWordCheck = checkIfWordIsWord(word)

  if (validWordCheck === false) {
    total = 0
    return total
  }

  if (
    doublePlusTripleWord.doubleWord === true ||
    doublePlusTripleWord.tripleWord === true
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
// First check if the word does not cotain an empty string, null or whitespace
// Then check if the word contains a single bracket instead of two
// Lastly, check if the word contains any special characters
// If any of this is true, return validWordCheck is false, else return validWordCheck is true
function checkIfWordIsWord(word) {
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
// If the word contains curly brackets, the double score for this letter should be calculated and added to the total
// If the word includes straight brackets, the triple score for this letter should be calculated and added to the total
// In the end, the total should be returned
function detectBracket(word) {
  let total = 0
  word = word.toUpperCase()

  if (word.includes('{') && word.includes('}')) {
    const re = /[^{]+(?=\})/g
    const found = word.match(re)
    word = found.toString()

    for (const letter of found) {
      total += values[letter] * 2
    }
  } else if (word.includes('[') && word.includes(']')) {
    const re = /(?<=\[).+?(?=\])/g
    const found = word.match(re)
    word = found.toString()

    for (const letter of word) {
      total += values[letter] * 3
    }
  }

  return total
}

// If the word contains any brackets, split the word and take out the brackets
// If the word contains any brackets, the new word, without the double or triple letter should be returned
// Else, the original word should be returned
function splitWords(word) {
  word = word.toUpperCase()

  if (word.includes('{') && word.includes('}')) {
    const tempWord = word.split('{')
    const tempWord2 = tempWord[1].split('}')
    word = tempWord[0] + tempWord2[1]
  } else if (word.includes('[') && word.includes(']')) {
    const tempWord = word.split('[')
    const tempWord2 = tempWord[1].split(']')
    word = tempWord[0] + tempWord2[1]
  } else {
    return word
  }

  return word
}

// Check if the word contains double and triple brackets
// If the word is an empty string or null, doubleWord and tripleWord should be false
// If the word is either a double word or triple word, then it should be true
// In the end, it should retrun doubleAndTripleWords
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
// If the word is a double score word it should be checked for having a triple word or letter score in the word as well. If it does, the corresponding score should be calculated
// If it does not have a triple word or letter score in there, the double word score should be calculated
// If the word is a triple score word it should be checked for having a double word or letter score in the word as well. If it does, the corresponding score should be calculated
// If it does not have a double word or letter score in there, the triple word score should be calculated
// It should return the calculated total
function caculateDoubleAndTripleWordScore(word) {
  let doublePlusTripleWord = false
  let total = 0
  doublePlusTripleWord = doubleAndTripleCheck(word)
  word = word.toUpperCase()

  if (doublePlusTripleWord.doubleWord === true) {
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
  } else if (doublePlusTripleWord.tripleWord === true) {
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
