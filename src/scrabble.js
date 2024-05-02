function scrabble(string) {
  // write code here
  // The purpose of this part of the function is to sort between strings with brackets and strings without. Strings without a function go straight into the keepingScore function and a total score is outputted. Strings with brackets then go into the countingBrackets function.
  if (typeof string !== typeof 'string') {
    return 0
  } else if (
    string.includes('{') ||
    string.includes('}') ||
    string.includes('[') ||
    string.includes(']') ||
    string.includes('|')
  ) {
    return countingBrackets(string)
  } else {
    return keepingScore(string)
  }
}

function countingBrackets(string) {
  // The purpose of this function is to count how many brackets within a string. This is because the amount of brackets will affect the multiplier number. In this function I have also defined what will happen to a string if it has more than 2 of the same bracket (e.g. more than 2 curly brackets). In this case the multiplier will need to be doubled which I have accounted for here. Bracket strings are then passed through the dealingWithBrackets function before releasing a final output score.
  let curlyBracketAmount = 0
  let squareBracketAmount = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '}') {
      curlyBracketAmount = curlyBracketAmount + 1
    }
    if (string[i] === '[' || string[i] === ']') {
      squareBracketAmount = squareBracketAmount + 1
    }
  }
  console.log('curly Bracket Amount =', curlyBracketAmount)
  if (curlyBracketAmount > 2) {
    const startIndex = string.indexOf('{')
    const endIndex = string.indexOf('}')
    const curlyBracketsSubstring = string.substring(startIndex + 1, endIndex)
    const curlyBracketScore = keepingScore(curlyBracketsSubstring)
    const finalScore = dealingWithBrackets(string) + curlyBracketScore
    // THe dealingWithBrackets function applies its own multiplier when it encounters a curly bracket. As some strings have 2 sets of curly brackets, this part of the function then adds number (curlyBracketScore) in order to deal with this.
    return finalScore
  } else if (squareBracketAmount > 2) {
    return dealingWithMultipleBrackets(string)
  } else if (curlyBracketAmount === 2 || squareBracketAmount === 2) {
    return dealingWithBrackets(string)
  } else if (curlyBracketAmount <= 1 || squareBracketAmount <= 1) {
    return 0
    // This part of the function deals with any symbols which are not '{}' or '[]' based off the amount of brackets in the string or the type of symbol used (e.g. '|' symbol is rejected here.)
  }
}

function dealingWithBrackets(string) {
  // The purpose of this function is muliply the finalScore based off of the curly brackets used. Strings are passed through the keepingScore function and then this number is then multiplied accordingly.
  let finalScore = 0
  if (
    string.includes('[') &&
    string.includes(']') &&
    string.includes('{') &&
    string.includes('}')
  ) {
    return dealingWithMultipleBrackets(string)
  } else if (string.includes('{') && string.includes('}')) {
    const startIndex = string.indexOf('{')
    const endIndex = string.indexOf('}')
    const curlyBracketsSubstring = string.substring(startIndex + 1, endIndex)
    const originalString = keepingScore(string)
    finalScore = keepingScore(curlyBracketsSubstring) + originalString
    // As some strings only require one letter to be doubled/tripled and not the rest of the string, I had to make sure the score of the original string was also factored in as well.
  } else if (string.includes('[') && string.includes(']')) {
    const startIndex = string.indexOf('[')
    const endIndex = string.indexOf(']')
    const squareBracketSubstring = string.substring(startIndex + 1, endIndex)
    const originalString = keepingScore(string)
    finalScore = keepingScore(squareBracketSubstring) * 2 + originalString
  } else {
    finalScore = 0
  }
  return finalScore
}

function dealingWithMultipleBrackets(string) {
  // The purpose of this function is to deal with strings with more than one type of bracket included. This will then change the multiplier.
  let finalScore = 0
  if (string[0] === '{' || string[0] === '[') {
    const startIndex = string.indexOf('[')
    const endIndex = string.indexOf(']')
    const squareBracketSubstring = string.substring(startIndex + 1, endIndex)
    const originalScoreOfSquareCharacter = keepingScore(squareBracketSubstring)
    const squareBracketScore = keepingScore(squareBracketSubstring) * 3
    console.log('square Bracket Score =', squareBracketScore)
    const startIndex2 = string.indexOf('{')
    const endIndex2 = string.indexOf('}')
    const curlyBracketsSubstring = string.substring(startIndex2 + 1, endIndex2)
    const curlyBracketScore = keepingScore(curlyBracketsSubstring) * 2
    console.log('curly Bracket Score =', curlyBracketScore)
    finalScore =
      squareBracketScore + curlyBracketScore + originalScoreOfSquareCharacter
    return finalScore
  } else {
    return 0
  }
}

function keepingScore(string) {
  // The purpose of this function is just to deal with the letters in the strings and to assign the right total score.
  let totalScore = 0
  const lowerCaseWord = string.toLowerCase()
  console.log(lowerCaseWord)
  for (let i = 0; i < lowerCaseWord.length; i++) {
    console.log(lowerCaseWord[i])
    if (
      lowerCaseWord[i] === 'a' ||
      lowerCaseWord[i] === 'e' ||
      lowerCaseWord[i] === 'i' ||
      lowerCaseWord[i] === 'o' ||
      lowerCaseWord[i] === 'u' ||
      lowerCaseWord[i] === 'l' ||
      lowerCaseWord[i] === 'n' ||
      lowerCaseWord[i] === 'r' ||
      lowerCaseWord[i] === 's' ||
      lowerCaseWord[i] === 't'
    ) {
      totalScore = totalScore + 1
    } else if (lowerCaseWord[i] === 'd' || lowerCaseWord[i] === 'g') {
      totalScore = totalScore + 2
    } else if (
      lowerCaseWord[i] === 'b' ||
      lowerCaseWord[i] === 'c' ||
      lowerCaseWord[i] === 'm' ||
      lowerCaseWord[i] === 'p'
    ) {
      totalScore = totalScore + 3
    } else if (
      lowerCaseWord[i] === 'f' ||
      lowerCaseWord[i] === 'h' ||
      lowerCaseWord[i] === 'v' ||
      lowerCaseWord[i] === 'w' ||
      lowerCaseWord[i] === 'y'
    ) {
      totalScore = totalScore + 4
    } else if (lowerCaseWord[i] === 'k') {
      totalScore = totalScore + 5
    } else if (lowerCaseWord[i] === 'j' || lowerCaseWord[i] === 'x') {
      totalScore = totalScore + 8
    } else if (lowerCaseWord[i] === 'q' || lowerCaseWord[i] === 'z') {
      totalScore = totalScore + 10
    } else {
      totalScore = totalScore + 0
    }
  }
  return totalScore
}

module.exports = scrabble
