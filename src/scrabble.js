function scrabble(word) {
  if (
    !word ||
    !/^[a-zA-Z]+$/.test(word) ||
    ['null', 'nil', 'none'].includes(word.toLowerCase())
  ) {
    return 0
  }

  const letterValues = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
  }

  let totalScore = 0
  let wordMultiplier = 1
  let letterMultiplier = 1

  for (const char of word.toLowerCase()) {
    if (char === '{') {
      letterMultiplier = 2
    } else if (char === '}') {
      letterMultiplier = 1
    } else if (char === '[') {
      wordMultiplier = 3
    } else if (char === ']') {
      wordMultiplier = 1
    } else {
      const letterScore = letterValues[char] || 0
      totalScore += letterScore * letterMultiplier
    }
  }

  return totalScore * wordMultiplier
}

console.log(scrabble('hello')) // Should return 8
console.log(scrabble('')) // Should return 0
console.log(scrabble(' \t\n')) // Should return 0
console.log(scrabble(null)) // Should return 0
console.log(scrabble('f')) // Should return 4
console.log(scrabble('street')) // Should return 6
console.log(scrabble('quirky')) // Should return 22
console.log(scrabble('OXYPHENBUTAZONE')) // Should return 41

module.exports = scrabble
