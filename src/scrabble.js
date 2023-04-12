function scrabble(word) {
  // write code here
  // Declare a table with all the values table[i][j] where i= String with chars and j= value of the chars
  const table = [
    ['AEIOULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10]
  ]
  // check if the word given is equal to null
  if (word === null) {
    return 0
  }
  // check if the word given contains any illegal char
  const specialChars = '{[]}AEIOULNRSTDGBCMPFHVWYKJXQZ'
  for (let k = 0; k < word.length; k++) {
    if (specialChars.includes(word[k].toUpperCase()) === false) {
      return 0
    }
  }
  // check if the word starts and ends with special charachter and if not return 0
  if (word[0] === '{' && word[word.length - 1] !== '}') {
    return 0
  }
  if (word[0] === '[' && word[word.length - 1] !== ']') {
    return 0
  }
  // flags
  let double = false // Flag that will become true if we have to double the score
  let triple = false // Flag that will become true if we have to triple the score
  let dont = false // Flag that will become true if we have 2 or more open bruckets (e.g. 2x { or 2x [)
  let count1 = 0
  let count2 = 0
  for (let k = 0; k < word.length; k++) {
    if (word[k] === '{') {
      count1 += 1
    }
    if (word[k] === '[') {
      count2 += 1
    }
  }
  if (count1 >= 2 || count2 >= 2) {
    dont = true
  }
  // a variable to sum the score
  let score = 0
  // flag variable just to pass a letter if it has brackets, so we dont count it 2 times
  let pass = false
  // flag variable to check if we have an open bracket before closing one
  let bracketOpen = false
  // check every letter of the word if included in any of the arrays
  // if includes then add the value for that letter
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < table.length; j++) {
      // check if the word start and ends with brackets
      // if this is true the will remove the first and last element and will make the flag true, in the end will check the flag and multiply the score
      if (word[0] === '[' && word[word.length - 1] === ']' && dont === false) {
        word = word.substring(1, word.length - 1)
        triple = true
      }
      if (word[0] === '{' && word[word.length - 1] === '}' && dont === false) {
        word = word.substring(1, word.length - 1)
        double = true
      }
      // Check if the given word starts with closing bracket without open one
      if (word[i] === '}' || word[i] === ']') {
        if (bracketOpen === false) {
          return 0
        }
      }
      // Check if a special character opens but never close
      if (word[i] === '{' && word[i + 2] !== '}') {
        return 0
      }
      if (word[i] === '[' && word[i + 2] !== ']') {
        return 0
      }
      // Check if a letter has brackets and make true the flags and double the score of the letter
      if (word[i] === '{' && word[i + 2] === '}') {
        if (table[j][0].includes(word[i + 1].toUpperCase())) {
          score += table[j][1] * 2
          pass = true
          bracketOpen = true
          i += 2
        }
      }
      // Check if a letter has brackets and make true the flags and triple the score of the letter
      if (word[i] === '[' && word[i + 2] === ']') {
        if (table[j][0].includes(word[i + 1].toUpperCase())) {
          score += table[j][1] * 3
          pass = true
          bracketOpen = true
          i += 2
        }
      }
      // Normal points for every correct letter
      if (table[j][0].includes(word[i].toUpperCase()) && pass === false) {
        score += table[j][1]
      }
      pass = false
    }
  }
  // check if we have to give double or triple score
  if (double === true) {
    score *= 2
  }
  if (triple === true) {
    score *= 3
  }
  // return the score
  return score
}

module.exports = scrabble
