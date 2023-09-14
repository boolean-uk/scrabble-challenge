const scrabble = (myWord) => {
  const wordValues = {
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
  if (
    myWord === '' ||
    myWord === '\t\n' ||
    myWord === null ||
    myWord === undefined
  ) {
    return 0
  } else {
    let wordpoint = 0
    const splitedWords = myWord.toLowerCase().split('')
    for (let i = 0; i < splitedWords.length; i++) {
      const singleLetter = splitedWords[i]
      if (wordValues[singleLetter]) {
        const valueOfLetter = wordValues[singleLetter]
        wordpoint = wordpoint + valueOfLetter
      }
    }
    return wordpoint
  }
}
console.log(scrabble('OXYPHENBUTAZONe'))
module.exports = scrabble
