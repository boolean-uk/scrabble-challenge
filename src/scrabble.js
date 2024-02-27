function scrabble(word) {
  // Define my letter values.
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
  // Convert the word to lowercase, so there is no case incensitivity.
  const lowercaseWord = word ? word.toLowerCase() : ''

  // Calculate the score.
  let score = 0
  for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i]

    // Check if the letter is in the letterValues object
    // eslint-disable-next-line no-prototype-builtins
    if (letterValues.hasOwnProperty(letter)) {
      score += letterValues[letter]
    }
  }
  return score
}

// const word = 'cabbage'
// const score = calculateScore(word)
// console.log(`The Scrabble score for "${word}" is ${score} points.`)
module.exports = scrabble
