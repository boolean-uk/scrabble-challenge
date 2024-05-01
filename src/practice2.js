function scrabble(string) {
  // write code here
  if (typeof string !== typeof 'string') {
    return 0
  } else if (
    string.includes('{') ||
    string.includes('}') ||
    string.includes('[') ||
    string.includes(']') ||
    string.includes('|')
  ) {
    return dealingWithBrackets(string)
  } else {
    return keepingScore(string)
  }
}

function dealingWithBrackets(string) {
  if (
    string.includes('[') &&
    string.includes(']') &&
    string.includes('{') &&
    string.includes('}')
  ) {
    const startIndex = string.indexOf('{')
    const endIndex = string.indexOf('}')
    const substring = string.substring(startIndex + 1, endIndex)
    console.log(substring)
    const letterWithinBracketsScore = keepingScore(substring)
    const originalStringScore = keepingScore(string)
    const finalScore = (letterWithinBracketsScore + originalStringScore) * 3
    return finalScore
  } else if (string.includes('{') && string.includes('}')) {
    const startIndex = string.indexOf('{')
    const endIndex = string.indexOf('}')
    const substring = string.substring(startIndex + 1, endIndex)
    console.log(substring)
    const letterWithinBracketsScore = keepingScore(substring)
    const originalStringScore = keepingScore(string)
    const finalScore = letterWithinBracketsScore + originalStringScore
    return finalScore
  } else if (string.includes('[') && string.includes(']')) {
    const startIndex = string.indexOf('[')
    const endIndex = string.indexOf(']')
    const substring = string.substring(startIndex + 1, endIndex)
    console.log(substring)
    const letterWithinBracketsScore = keepingScore(substring) * 2
    const originalStringScore = keepingScore(string)
    const finalScore = letterWithinBracketsScore + originalStringScore
    return finalScore
  } else {
    return 0
  }
}

function keepingScore(string) {
  let totalScore = 0
  const lowerCaseWord = string.toLowerCase()
  console.log(lowerCaseWord)
  for (let i = 0; i < string.length; i++) {
    console.log(string[i])
    if (
      string[i] === 'a' ||
      string[i] === 'e' ||
      string[i] === 'i' ||
      string[i] === 'o' ||
      string[i] === 'u' ||
      string[i] === 'l' ||
      string[i] === 'n' ||
      string[i] === 'r' ||
      string[i] === 's' ||
      string[i] === 't'
    ) {
      totalScore = totalScore + 1
    } else if (string[i] === 'd' || string[i] === 'g') {
      totalScore = totalScore + 2
    } else if (
      string[i] === 'b' ||
      string[i] === 'c' ||
      string[i] === 'm' ||
      string[i] === 'p'
    ) {
      totalScore = totalScore + 3
    } else if (
      string[i] === 'f' ||
      string[i] === 'h' ||
      string[i] === 'v' ||
      string[i] === 'w' ||
      string[i] === 'y'
    ) {
      totalScore = totalScore + 4
    } else if (string[i] === 'k') {
      totalScore = totalScore + 5
    } else if (string[i] === 'j' || string[i] === 'x') {
      totalScore = totalScore + 8
    } else if (string[i] === 'q' || string[i] === 'z') {
      totalScore = totalScore + 10
    } else {
      totalScore = totalScore + 0
    }
  }
  return totalScore
}
console.log(scrabble('{[d]og}'))
console.log(scrabble('{d}o{g}'))
