/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
function scrabble(word) {
  // write code here

  function isValidWord(givenWord) {
    if (typeof givenWord !== 'string') return false

    const openDouble = (givenWord.match(/{/g) || []).length
    const closeDouble = (givenWord.match(/}/g) || []).length

    const openTriple = (givenWord.match(/\[/g) || []).length
    const closeTriple = (givenWord.match(/]/g) || []).length

    if (openDouble !== closeDouble || openTriple !== closeTriple) return false

    if (/[^A-Za-z{}\[\]]/.test(givenWord)) return false

    return true
  }

  if (!isValidWord(word)) {
    return 0
  }

  const tablePoints = {
    lettersPoints: [
      { letter: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], points: 1 },
      { letter: ['D', 'G'], points: 2 },
      { letter: ['B', 'C', 'M', 'P'], points: 3 },
      { letter: ['F', 'H', 'V', 'W', 'Y'], points: 4 },
      { letter: ['K'], points: 5 },
      { letter: ['J', 'X'], points: 8 },
      { letter: ['Q', 'Z'], points: 10 }
    ]
  }

  function wordCalculation(word) {
    let finalScore = 0
    if (typeof word !== 'string') return 0

    word = word.trim()
    if (word.length === 0) return 0

    if (word.includes('{')) {
      // eslint-disable-next-line prettier/prettier
      if ((word.match(/\{/g) || []).length > 1 && (word.match(/\}/g) || []).length > 1) {
        const chars = word.split('')
        let finalScore = 0; let inside = 0; let outside = 0
        for (let i = 0; i < chars.length; i++) {
          if (chars[i] === '{') {
            i++
            while (chars[i] !== '}' && i < chars.length) {
              inside += calculateSingleScore(chars[i])
              i++
            }
          } else {
            outside += calculateSingleScore(chars[i])
          }
        }
        finalScore = outside + inside * 2
        return finalScore
      } else {
        const parts = word.split(/[{}]/)
        const outside = parts[0] + (parts[2] || '')
        const inside = parts[1]
        finalScore = calculateDouble(outside, inside)
      }
      if (/^\[[A-Za-z{}]+\]$/.test(word)) finalScore *= 3
      return finalScore
    } else if (word.includes('[')) {
      // eslint-disable-next-line prettier/prettier
      if ((word.match(/\[/g) || []).length > 1 && (word.match(/\]/g) || []).length > 1) {
        const chars = word.split('')
        let finalScore = 0; let inside = 0; let outside = 0
        for (let i = 0; i < chars.length; i++) {
          if (chars[i] === '[') {
            i++
            while (chars[i] !== ']' && i < chars.length) {
              inside += calculateSingleScore(chars[i])
              i++
            }
          } else {
            outside += calculateSingleScore(chars[i])
          }
        }
        finalScore = outside + inside * 2
        return finalScore
      } else {
        const parts = word.split(/[\[\]]/)
        const outside = parts[0] + (parts[2] || '')
        const inside = parts[1]
        finalScore = calculateTriple(outside, inside)
      }
      if (/^\{[\[A-Za-z]+\}\]$/.test(word)) finalScore *= 2
      return finalScore
    } else {
      return calculateSingleScore(word)
    }
  }

  function calculateSingleScore(word) {
    let score = 0
    for (const char of word.toUpperCase()) {
      for (const item of tablePoints.lettersPoints) {
        if (item.letter.includes(char)) {
          score += item.points
          break
        }
      }
    }
    return score
  }

  function calculateDouble(word1, word2) {
    return calculateSingleScore(word1) + wordCalculation(word2) * 2
  }

  function calculateTriple(word1, word2) {
    return calculateSingleScore(word1) + wordCalculation(word2) * 3
  }

  return wordCalculation(word)
}

module.exports = scrabble
