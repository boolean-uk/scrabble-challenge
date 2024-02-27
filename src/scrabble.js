function scrabble(word) {
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
  const letterMultipliers = {
    o: 2
  }
  const wordMultipliers = {
    o: 3
  }
  const lowercaseWord = word ? word.toLowerCase() : ''

  let score = 0

  for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i]
    let letterScore = letterValues[letter] || 0
    // eslint-disable-next-line no-prototype-builtins
    if (letterMultipliers.hasOwnProperty(letter)) {
      letterScore *= letterMultipliers[letter]
    }

    score += letterScore
  }

  for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i]
    // eslint-disable-next-line no-prototype-builtins
    if (wordMultipliers.hasOwnProperty(letter)) {
      score *= wordMultipliers[letter]
      delete wordMultipliers[letter]
    }
  }

  return score
}

module.exports = scrabble
