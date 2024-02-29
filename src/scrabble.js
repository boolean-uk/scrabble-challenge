function hasInvalidMultiplier(word) {
  let openingBraceCount = 0
  let closingBraceCount = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{') {
      openingBraceCount++
    }
    if (word[i] === '}') {
      closingBraceCount++
    }
  }
  if (openingBraceCount === closingBraceCount) {
    return false
  } else {
    return true
  }
}
function scrabble(word) {
  if ((word === null)) {
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

  if (hasInvalidMultiplier(word)) {
    return 0
  }
  if (!/^[a-zA-Z{}[\]]*$/g.test(word)) {
    return 0
  }

  let letterMultipliersArray2 = word.match(/{([a-z])}/g)
  console.log(letterMultipliersArray2)
  if (Array.isArray(letterMultipliersArray2)) {
    letterMultipliersArray2 = letterMultipliersArray2.map((match) => match[1])
  }

  let letterMultipliersArray3 = word.match(/\[([a-z])\]/g)

  if (Array.isArray(letterMultipliersArray3)) {
    letterMultipliersArray3 = letterMultipliersArray3.map((match) => match[1])
  }
  console.log(letterMultipliersArray3)

  const lowercaseWord = word ? word.toLowerCase() : ''

  let score = 0

  for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i]
    let letterScore = letterValues[letter] || 0

    // eslint-disable-next-line no-prototype-builtins
    if (
      Array.isArray(letterMultipliersArray2) &&
      letterMultipliersArray2.includes(letter)
    ) {
      letterScore *= 2
    }
    if (
      Array.isArray(letterMultipliersArray3) &&
      letterMultipliersArray3.includes(letter)
    ) {
      letterScore *= 3
    }

    score += letterScore
  }
  if (
    word.startsWith('{') &&
    word.includes('}') &&
    word.indexOf('}') !== word.length - 1
  ) {
    return score
  }
  const wordWithoutCurlyB = word.replace(/{|}/g, '')
  const wordWithoutArrayB = word.replace(/\[|\]/g, '')

  if (wordWithoutArrayB.startsWith('{') && wordWithoutArrayB.endsWith('}')) {
    score *= 2
  }
  if (wordWithoutCurlyB.startsWith('[') && wordWithoutCurlyB.endsWith(']')) {
    score *= 3
  }

  return score
}

console.log(hasInvalidMultiplier('d{o}[g}]'))

module.exports = scrabble
