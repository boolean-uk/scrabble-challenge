const lettersValues = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

const scrabble = (word) => {
  if (wordValidate(word)) {
    let lowerCaseWord = word.toLowerCase()
    let wordScoreTally = tallyLetterScores(lowerCaseWord)
    let wordScoreDouble = doubleWordRule(lowerCaseWord)
    let wordScoreTriple = tripleWordRule(lowerCaseWord)
    let totalScore = tallyFinalScores(
      wordScoreTally,
      wordScoreDouble,
      wordScoreTriple
    )
    return totalScore
  } else {
    return 0
  }
}

const wordValidate = (word) => {
  let openingBrace = 0
  let closingBrace = 0
  let openingBracket = 0
  let closingBracket = 0

  if (word === null) {
    return false
  }

  let lowerCaseWord = word.toLowerCase()

  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (
      Object.keys(lettersValues).includes(lowerCaseWord[i]) ||
      lowerCaseWord[i] === '{' ||
      lowerCaseWord[i] === '}' ||
      lowerCaseWord[i] === '[' ||
      lowerCaseWord[i] === ']'
    ) {
      switch (lowerCaseWord[i]) {
        case '{':
          openingBrace++;
          break;
        case '}':
          closingBrace++;
          break;
        case '[':
          openingBracket++;
          break
        case ']':
          closingBracket++;
          break;
      }
    } else {
      return false
    }
  }

  if (openingBrace !== closingBrace || openingBracket !== closingBracket) {
    return false
  } else {
    return true
  }
}

const tallyLetterScores = (word) => {
  let wordScoreSingle = 0
  let wordScoreDouble = 0
  let wordScoreTriple = 0

  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === '{' ||
      word[i] === '}' ||
      word[i] === '[' ||
      word[i] === ']'
    ) {
      continue
    }
    if (word[i - 1] === '{' && word[i + 1] === '}') {
      wordScoreDouble += (lettersValues[word[i]] * 2)
    } else if (word[i - 1] === '[' && word[i + 1] === ']') {
      wordScoreTriple += (lettersValues[word[i]] * 3)
    } else {
      wordScoreSingle += lettersValues[word[i]]
    }
  }
  return wordScoreSingle + wordScoreDouble + wordScoreTriple
}

const doubleWordRule = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{' && word[i + 2] !== '}') {
      return true
    }
  }
  return false
}

const tripleWordRule = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '[' && word[i + 2] !== ']') {
      return true
    }
  }
  return false
}

const tallyFinalScores = (lettersValue, scoreDouble, scoreTriple) => {
  if (scoreDouble && scoreTriple) {
    return (lettersValue *= 6)
  } else if (scoreDouble) {
    return (lettersValue *= 2)
  } else if (scoreTriple) {
    return (lettersValue *= 3)
  }
  return lettersValue
}

module.exports = scrabble
