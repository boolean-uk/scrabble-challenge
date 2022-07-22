const alphabet = { a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8,
                   k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t:1 ,
                   u: 1, v: 4, w: 4, z: 10, y: 4, x: 8}

const specialChar = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/

function scrabble(str) {
  if (str === '' || str === null || specialChar.test(str)) {
    return 0
  }
  const alphabetKeys = Object.keys(alphabet)
  const alphabetValues = Object.values(alphabet)
  let total = 0
  str = str.toLowerCase()
  str = str.split('')

  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    for (let j = 0; j < alphabetKeys.length; j++) {
      if (letter === alphabetKeys[j]) {
        total += alphabetValues[j]
      }
    }
  }
  return total
}

console.log(scrabble('cat'))

module.exports = scrabble
