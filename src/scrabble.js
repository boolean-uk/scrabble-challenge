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
      if (scrabbleArr[j] === 'a') {
        output += 1
      }

      if (scrabbleArr[j] === 'e') {
        output += 1
      }

      if (scrabbleArr[j] === 'i') {
        output += 1
      }

      if (scrabbleArr[j] === 'o') {
        output += 1
      }

      if (scrabbleArr[j] === 'u') {
        output += 1
      }

      if (scrabbleArr[j] === 'l') {
        output += 1
      }

      if (scrabbleArr[j] === 'n') {
        output += 1
      }

      if (scrabbleArr[j] === 'r') {
        output += 1
      }

      if (scrabbleArr[j] === 's') {
        output += 1
      }

      if (scrabbleArr[j] === 't') {
        output += 1
      }

      if (scrabbleArr[j] === 'd') {
        output += 2
      }

      if (scrabbleArr[j] === 'g') {
        output += 2
      }

      if (scrabbleArr[j] === 'b') {
        output += 3
      }

      if (scrabbleArr[j] === 'c') {
        output += 3
      }

      if (scrabbleArr[j] === 'm') {
        output += 3
      }

      if (scrabbleArr[j] === 'p') {
        output += 3
      }

      if (scrabbleArr[j] === 'f') {
        output += 4
      }

      if (scrabbleArr[j] === 'h') {
        output += 4
      }

      if (scrabbleArr[j] === 'v') {
        output += 4
      }

      if (scrabbleArr[j] === 'w') {
        output += 4
      }

      if (scrabbleArr[j] === 'y') {
        output += 4
      }

      if (scrabbleArr[j] === 'k') {
        output += 5
      }

      if (scrabbleArr[j] === 'j') {
        output += 8
      }

      if (scrabbleArr[j] === 'x') {
        output += 8
      }

      if (scrabbleArr[j] === 'q') {
        output += 10
      }

      if (scrabbleArr[j] === 'z') {
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
