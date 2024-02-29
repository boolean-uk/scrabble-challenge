const letterScores = {
  a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1,
  j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1,
  s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10,
}

const scrabble = word => {

  if (validWordCheck(word)) {
    let lowerCaseWord = word.toLowerCase()
    let totalLetterScore = calculateLetterScores(lowerCaseWord)
    let doubleWordScore = determineDoubleWord(lowerCaseWord)
    let tripleWordScore = determineTripleWord(lowerCaseWord) 
    let totalScore = calculateFinalScore(totalLetterScore, doubleWordScore, tripleWordScore)
    return totalScore
  } else {
    return 0
  }
}

const validWordCheck = word => {
  let frontBraceCount = 0
  let backBraceCount = 0
  let frontSquareCount = 0
  let backSquareCount = 0

  let lowerCaseWord = word.toLowerCase()
   
  if (lowerCaseWord === null) {
    return false
  }  

  for (let i = 0; i < lowerCaseWord.length; i++) {

    if (Object.keys(letterScores).includes(lowerCaseWord[i]) || lowerCaseWord[i] === '{' || lowerCaseWord[i] === '}' || lowerCaseWord[i] === '[' || lowerCaseWord[i] === ']') {
      switch(lowerCaseWord[i]){
        case '{': frontBraceCount++; break;
        case '}': backBraceCount++; break;
        case '[': frontSquareCount++; break;
        case ']': backSquareCount++; break;
      }
    } else {
      return false
    }
  }
  if (frontBraceCount !== backBraceCount || frontSquareCount !== backSquareCount) {
    return false
  } else {
    return true
  }
}

const calculateLetterScores = word => {
  let singleLetterScore = 0
  let doubleLetterScore = 0
  let tripleLetterScore = 0

  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{' || word[i] === '}' || word[i] === '[' || word[i] === ']') {
      continue
    }
    if (word[i-1] === '{' && word[i+1] === '}') {
      doubleLetterScore += (letterScores[word[i]] * 2)
    } else if (word[i-1] === '[' && word[i+1] === ']') {
      tripleLetterScore += (letterScores[word[i]] * 3)
    } else {
      singleLetterScore += letterScores[word[i]]
    }
  }
  return singleLetterScore + doubleLetterScore + tripleLetterScore
}

const determineDoubleWord = word => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{' && word[i+2] !== '}') {
      return true
    }
  }
  return false
}

const determineTripleWord = word => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '[' && word[i+2] !== ']') {
      return true
    }
  }
  return false
} 

const calculateFinalScore = (letterScore, doubleScore, tripleScore) => {
  if (doubleScore && tripleScore) {
    return letterScore * 6
  } else if (doubleScore) {
    return letterScore * 2
  } else if (tripleScore) {
    return letterScore * 3
  }
  return letterScore
}

module.exports = scrabble

console.log(scrabble('OXYPHENBUTAZONE'))