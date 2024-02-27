const letterScores = {
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
  n: 1,
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
  z: 10,
}


const validCheck = word => { 

  for (let i = 0; i < word.length; i++) {
      if (Object.keys(letterScores).includes(word[i]) || word[i] === '{' || word[i] === '}' || word[i] === '[' || word[i] ===']') {
          switch(word[i]){
              case '{': frontBraceCount++;
              break;
              case '}': backBraceCount++;
              break;
              case '[': frontSquareCount++;
              break;
              case ']': backSquareCount++
              break;
          }
      } else {
          return false
      }
  }

  if (frontBraceCount !== backBraceCount || frontSquareCount !== backSquareCount){
      return false
  } else {
      return true
  }
}      

const getLetterScores = word => {
  doubleLetterScore = 0
  tripleLetterScore = 0
  singleLetterScore = 0

  for (let i = 0; i < word.length; i++){
      if (word[i] === '{' || word[i] === '}' || word[i] === '[' || word[i] === ']'){
          continue
      }
      if (word[i-1] === '{' && word[i+1] === '}') {
          doubleLetterScore += (letterScores[word[i]]*2)
      } else if (word[i-1] === '[' && word[i+1] === ']') {
          tripleLetterScore += (letterScores[word[i]]*3)
      } else {
          singleLetterScore += letterScores[word[i]]
      }
  }
}

const multiWordCheck = word => {
  for (let i = 0; i < word.length; i++){
    if (word[i] === '{' && word[i+2] !== '}') {
      doubleWordScore = true
    }
    if (word[i] === '[' && word[i+2] !== ']') {
      tripleWordScore = true
    }
  }
}

const calculateFinalScore = () => {

  totalLetterScore = singleLetterScore + doubleLetterScore + tripleLetterScore
  
  if (doubleWordScore && tripleWordScore) {
      return totalLetterScore * 3 * 2
  } else if (doubleWordScore){
      return totalLetterScore * 2
  } else if (tripleWordScore){
      return totalLetterScore * 3
  } 
  return totalLetterScore
}


const scrabble = word => {
  if (word === null) {
    return 0
  }
  variableReset()
  lowerWord = word.toLowerCase()
  if (validCheck(lowerWord)){
      getLetterScores(lowerWord)
      multiWordCheck(lowerWord)
      return calculateFinalScore()
  } else {
      return 0
  }
}

const variableReset = () => {
  singleLetterScore = 0
  doubleLetterScore = 0
  tripleLetterScore = 0
  doubleWordScore = false
  tripleWordScore = false
  totalLetterScore = 0
  backBraceCount = 0
  frontSquareCount = 0
  backSquareCount = 0
  frontBraceCount = 0
}

module.exports = scrabble

