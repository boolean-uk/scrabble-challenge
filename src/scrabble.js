function scrabble(word) {
  if (!word || typeof word !== 'string' || word.trim() === '') return 0

  if (/[^a-zA-Z{}\[\]]/.test(word)) return 0

  const stack = []
  const pairs = { '{': '}', '[': ']' }

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (char === '{' || char === '[') {
      stack.push(char)
    } else if (char === '}' || char === ']') {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return 0
      }
    }
  }

  if (stack.length > 0) return 0

  const scores = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  // Parse and calculate the score
  let totalScore = 0
  const currentMultiplier = 1
  const globalMultiplier = 1

  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (char === '{' || char === '[') {
      const multiplierType = char === '{' ? 2 : 3
      const endChar = char === '{' ? '}' : ']'
      const endIndex = word.indexOf(endChar, i + 1)

      if (endIndex === -1) return 0

      const subWord = word.substring(i + 1, endIndex)
      const subScore = scrabble(subWord) * multiplierType
      totalScore += subScore

      i = endIndex
    } else if (scores[char.toUpperCase()]) {
      totalScore += scores[char.toUpperCase()] * currentMultiplier
    }
  }

  return totalScore * globalMultiplier
}
console.log(scrabble(''))
console.log(scrabble(' \t\n'))
console.log(scrabble(null))
console.log(scrabble('a'))
console.log(scrabble('f'))
console.log(scrabble('street'))
console.log(scrabble('quirky'))
console.log(scrabble('OXYPHENBUTAZONE'))
console.log(scrabble('{dog}'))
console.log(scrabble('[dog]'))
console.log(scrabble('d{o}g'))
console.log(scrabble('d[o]g'))
console.log(scrabble('{[d]og}'))
console.log(scrabble('[{dog}]'))
console.log(scrabble('{d}o{g}'))
console.log(scrabble('{dog'))
console.log(scrabble('dog}'))
console.log(scrabble('do}g'))
console.log(scrabble('d{og'))
console.log(scrabble('|d|og'))

module.exports = scrabble
