function scrabble(word) {
  let totalScore = 0
  // First we exclude the exclusions
  if (word === undefined || word === null || word === ' \t\n') return 0
  // Then we turn the word into an array
  const arrWord = word.split('')
  if (arrWord.includes('|')) return 0
  for (let i = 0; i < arrWord.length; i++) {
    if (arrWord[i] === '}' || arrWord[i] === ']') return 0
    if (arrWord[i] === '{') {
      if (!arrWord.includes('}')) {
        return 0
      }
      i++
      if (arrWord[i] === '[') {
        if (!arrWord.includes(']')) {
          return 0
        }
        i++
        while (arrWord[i] !== ']' || arrWord[i] !== undefined) {
          totalScore += getScore(arrWord[i]) * 3
          i++
        }
        i++
      } else if (arrWord[i] === ']' || arrWord[i] === '{') return 0
      while (arrWord[i] !== undefined || arrWord[i] !== '}') {
        totalScore += getScore(arrWord[i])
        i++
      }
      totalScore *= 2
    } else if (arrWord[i] === '[') {
      i++
      if (!arrWord.includes(']')) {
        return 0
      }
      if (arrWord[i] === '{') {
        if (!arrWord.includes('}')) return 0
        i++
        while (arrWord[i] !== '}') {
          totalScore += getScore(arrWord[i]) * 2
          i++
        }
        i++
      }
      if (arrWord[i] === '}' || arrWord[i] === '[') {
        return 0
      }
      while (arrWord[i] !== undefined && arrWord[i] !== ']') {
        totalScore += getScore(arrWord[i])
        i++
      }
      totalScore *= 3
    } else {
      totalScore += getScore(arrWord[i])
    }
  }
  return totalScore
}
function getScore(character) {
  if (character === undefined || character === null) return 0
  if ('AEIOULNRST'.includes(character.toUpperCase())) {
    return 1
  } else if ('DG'.includes(character.toUpperCase())) {
    return 2
  } else if ('BCMP'.includes(character.toUpperCase())) {
    return 3
  } else if ('FHVWY'.includes(character.toUpperCase())) {
    return 4
  } else if (character.toUpperCase() === 'K') {
    return 5
  } else if ('JX'.includes(character.toUpperCase())) {
    return 8
  } else if ('QZ'.includes(character.toUpperCase())) {
    return 10
  }
}

module.exports = scrabble

// while (arrWord[i] !== '}') {
//   if (i >= arrWord.length) {
//     console.log('Wrong use of {')
//     return 0
//   } else {
//     totalScore += getScore(arrWord[i]) * 2
//   }
// }

// i++
//       while (arrWord[i] !== ']') {
//         if (i >= arrWord.length) {
//           console.log('Wrong use of ]')
//           return 0
//         } else {
//           totalScore += getScore(arrWord[i]) * 3
//         }
//       }
