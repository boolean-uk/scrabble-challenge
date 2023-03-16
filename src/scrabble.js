const letterValues = {
  _: 0,
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

function scrabble(anyWord) {
  if (
    typeof anyWord !== `string` ||
    anyWord === '_' ||
    anyWord === null ||
    anyWord === undefined
  )
    return 0
  const word = anyWord.toLowerCase()

  let preScore = 0

  for (let i = 0; i < word.length; i++) {
    const basicScore = letterValues[word[i]]

    if (basicScore > 0) {
      preScore += basicScore
    }
  }
  return preScore
}
const anyWord = `S_percalafragilistic`
console.log(
  `The word ` + anyWord + ` will award you ` + scrabble(anyWord) + ` points!!`
)

module.exports = scrabble
