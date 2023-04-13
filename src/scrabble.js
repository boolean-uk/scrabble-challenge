function scrabble(word) {
  let totalScore = 0
  // First we exclude the exclusions
  if (word === undefined || word === null || word === ' \t\n') return 0

  // Then we turn the word into an array
  const arrWord = word.split('')

  if (arrWord.includes('|')) return 0
  if (arrWord.includes('{') && !arrWord.includes('}')) return 0
  if (arrWord.includes('}') && !arrWord.includes('{')) return 0
  if (arrWord.includes('[') && !arrWord.includes(']')) return 0
  if (arrWord.includes(']') && !arrWord.includes('[')) return 0

  for (let i = 0; i < arrWord.length; i++) {
    if (arrWord[i] === '{') {
      i++
      if (arrWord[i] === '[') {
        i++
        while (arrWord[i] !== ']') {
          totalScore += getScore(arrWord[i]) * 3
          i++
        }
        i++
      }
      while (arrWord[i] !== '}') {
        totalScore += getScore(arrWord[i])
        i++
        if (i > arrWord.length) {
          return 0
        }
      }
      totalScore *= 2
    } else if (arrWord[i] === '[') {
      i++
      if (arrWord[i] === '{') {
        i++
        while (arrWord[i] !== '}') {
          totalScore += getScore(arrWord[i]) * 2
          i++
          if (i > arrWord.length) {
            return 0
          }
        }
      }
      while (arrWord[i] !== undefined || arrWord[i] !== ']') {
        totalScore += getScore(arrWord[i])
        i++
        if (i > arrWord.length) {
          return 0
        }
      }
      totalScore *= 3
    } else {
      totalScore += getScore(arrWord[i])
    }
  }
  return totalScore
}
// function scrabble(word) {
//   let totalScore = 0
//   let tempScore1 = 0
//   let tempScore2 = 0
//   if (word === undefined || word === null || word === ' \t\n') return 0
//   const arrWord = word.split('')
//   if (arrWord.includes('|')) return 0
//   if (arrWord.includes('{') && !arrWord.includes('}')) return 0
//   if (arrWord.includes('}') && !arrWord.includes('{')) return 0
//   if (arrWord.includes('[') && !arrWord.includes(']')) return 0
//   if (arrWord.includes(']') && !arrWord.includes('[')) return 0
//   for (let i = 0; i < arrWord.length; i++) {
//     if (isSpecial(arrWord[i]) === 0) {
//       totalScore += getScore(arrWord[i])
//     } else if (isSpecial(arrWord[i] === 1)) {
//       tempScore1 = 0
//       i++
//       while (arrWord[i] !== '}') {
//         if (i >= arrWord.length) return 0
//         if (isSpecial(arrWord[i]) === 3) {
//           tempScore2 = 0
//           i++
//           while (isSpecial(arrWord[i]) !== 4) {
//             if (i >= arrWord.length) return 0
//             tempScore2 += getScore(arrWord[i])
//             i++
//           }
//           tempScore1 += tempScore2 * 3
//         } else {
//           tempScore1 += getScore(arrWord[i])
//         }
//       }
//       totalScore += tempScore1 * 2
//     } else if (isSpecial(arrWord[i] === 3)) {
//       tempScore1 = 0
//       i++
//       while (arrWord[i] !== ']') {
//         if (i >= arrWord.length) return 0
//         if (isSpecial(arrWord[i]) === 1) {
//           tempScore2 = 0
//           i++
//           while (isSpecial(arrWord[i]) !== 2) {
//             if (i >= arrWord.length) return 0
//             tempScore2 += getScore(arrWord[i])
//             i++
//           }
//           tempScore1 += tempScore2 * 2
//         } else {
//           tempScore1 += getScore(arrWord[i])
//         }
//         totalScore += tempScore1 * 3
//       }
//     }
//   }
//   return totalScore
// }
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
// function isSpecial(symbol) {
//   // { is 1, } is 2, [ is 3 and ] is 4
//   if (symbol === '{') {
//     return 1
//   } else if (symbol === '}') {
//     return 2
//   } else if (symbol === '[') {
//     return 3
//   } else if (symbol === ']') {
//     return 4
//   } else {
//     return 0
//   }
// }
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
