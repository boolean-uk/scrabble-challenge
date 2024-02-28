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
  let letterMultipliersArray2 = word
    .match(/{([a-z])}/g)
  console.log(letterMultipliersArray2)
  if(Array.isArray(letterMultipliersArray2)) {
    letterMultipliersArray2 = letterMultipliersArray2.map((match) => match[1])
  }
 




  // const letterMultipliersArray3 = word
  //   .match(/\[([a-z])\]/g)
  //   .map((match) => match[1])
  // console.log(letterMultipliersArray3)

  const lowercaseWord = word ? word.toLowerCase() : ''

  let score = 0

  for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i]
    let letterScore = letterValues[letter] || 0

    // Check for letter multipliers
    // eslint-disable-next-line no-prototype-builtins
    if (letterMultipliersArray2.includes(letter)) {
      letterScore *= 2
    }

    score += letterScore
  }

  // Apply word multipliers
  // for (let i = 0; i < lowercaseWord.length; i++) {
  //   const letter = lowercaseWord[i]
  //   // eslint-disable-next-line no-prototype-builtins
  //   if (wordMultipliers.hasOwnProperty(letter)) {
  //     score *= wordMultipliers[letter]
  //     // Assuming the word multiplier applies only once, remove the letter after applying
  //     delete wordMultipliers[letter]
  //   }
  // }

  return score
}
console.log(scrabble('d{o}[g]'))

module.exports = scrabble
