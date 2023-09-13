const scrabble = (word) => {
  let output = 0
  const scrabbleArr = []

  function checkString(string) {
    return /^[0-9]*$/.test(string)
  }

  const stringContainsNum = checkString(word)

  if (typeof word === 'string' && stringContainsNum === false) {
    for (let i = 0; i < word.length; i++) {
      scrabbleArr.push(word[i].toLowerCase())
    }

    for (let j = 0; j < scrabbleArr.length; j++) {
      if (
        scrabbleArr[j] === 'a' ||
        scrabbleArr[j] === 'e' ||
        scrabbleArr[j] === 'i' ||
        scrabbleArr[j] === 'o' ||
        scrabbleArr[j] === 'u' ||
        scrabbleArr[j] === 'l' ||
        scrabbleArr[j] === 'n' ||
        scrabbleArr[j] === 'r' ||
        scrabbleArr[j] === 's' ||
        scrabbleArr[j] === 't'
      ) {
        output += 1
      }

      if (scrabbleArr[j] === 'd' || scrabbleArr[j] === 'g') {
        output += 2
      }

      if (
        scrabbleArr[j] === 'b' ||
        scrabbleArr[j] === 'c' ||
        scrabbleArr[j] === 'm' ||
        scrabbleArr[j] === 'p'
      ) {
        output += 3
      }

      if (
        scrabbleArr[j] === 'f' ||
        scrabbleArr[j] === 'h' ||
        scrabbleArr[j] === 'v' ||
        scrabbleArr[j] === 'w' ||
        scrabbleArr[j] === 'y'
      ) {
        output += 4
      }

      if (scrabbleArr[j] === 'k') {
        output += 5
      }

      if (scrabbleArr[j] === 'j' || scrabbleArr[j] === 'x') {
        output += 8
      }

      if (scrabbleArr[j] === 'q' || scrabbleArr[j] === 'z') {
        output += 10
      }
    }
  } else if (stringContainsNum === true) {
    console.log(
      "Error: Please input a valid WORD! Example: 'Animal', 'Rhinoceros', 'Drink' etc.."
    )
  }
  return output
}

console.log(scrabble(' \t\n'))
module.exports = scrabble
