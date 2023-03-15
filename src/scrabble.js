function scrabble(word) {
  let count = 0
  if (typeof word === 'string') {
    const scrabbleArray = []
    for (let i = 0; i < word.length; i++) {
      scrabbleArray.push(word.toLowerCase()[i])
      console.log(scrabbleArray)
    }

    for (let k = 0; k <= scrabbleArray.length; k++) {
      if (
        scrabbleArray[k] === 'a' ||
        scrabbleArray[k] === 'e' ||
        scrabbleArray[k] === 'i' ||
        scrabbleArray[k] === 'o' ||
        scrabbleArray[k] === 'l' ||
        scrabbleArray[k] === 'n' ||
        scrabbleArray[k] === 'r' ||
        scrabbleArray[k] === 'u' ||
        scrabbleArray[k] === 's' ||
        scrabbleArray[k] === 't'
      ) {
        count += 1
      }
      if (scrabbleArray[k] === 'd' || scrabbleArray[k] === 'g') {
        count += 2
      }
      if (
        scrabbleArray[k] === 'b' ||
        scrabbleArray[k] === 'c' ||
        scrabbleArray[k] === 'm' ||
        scrabbleArray[k] === 'p'
      ) {
        count += 3
      }
      if (
        scrabbleArray[k] === 'f' ||
        scrabbleArray[k] === 'h' ||
        scrabbleArray[k] === 'v' ||
        scrabbleArray[k] === 'w' ||
        scrabbleArray[k] === 'y'
      ) {
        count += 4
      }
      if (scrabbleArray[k] === 'k') {
        count += 5
      }
      if (scrabbleArray[k] === 'j' || scrabbleArray[k] === 'x') {
        count += 8
      }
      if (scrabbleArray[k] === 'q' || scrabbleArray[k] === 'z') {
        count += 10
      }
    }
    return count
  } else return count
}

module.exports = scrabble
