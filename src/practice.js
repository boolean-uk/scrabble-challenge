function scrabble(string) {
  // write code here
  let totalScore = 0
  console.log(totalScore)
  let lowerCaseWord = ' '
  if (typeof string !== typeof 'string') {
    return 0
  } else {
    lowerCaseWord = string.toLowerCase()
    console.log(string)
  }
  for (let i = 0; i < lowerCaseWord.length; i++) {
    console.log(string[i])
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
    } else if (string[i] === "{") {
        totalScore = (totalScore + 1) * 2
    }
  return totalScore
  }
}

function dealingWithBrackets(string) {
    specialScore = 0
    if (string.includes('{') && string.includes('}')) {
        const startIndex = string.indexOf('{')
        const endIndex = string.indexOf('}')
        const substring = string.split(startIndex + 1, endIndex)
        const newString = string.substring(startIndex + 1, endIndex).join('')
    console.log(newString)
        specialScore = scrabble(substring) * 2;
        console.log(specialScore);
    } else if (string.includes('[') && string.includes(']')) {
        const startIndex = string.indexOf('[')
        const endIndex = string.indexOf(']')
        const substring = string.slice(startIndex + 1, endIndex)
    console.log(substring)
        specialScore = scrabble(substring) * 3;
        console.log(specialScore);
    }
  }


console.log(dealingWithBrackets('{d}o{g}'))