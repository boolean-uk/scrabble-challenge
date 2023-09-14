const { letters } = require('./letter.js')

const scrabble = (word) => {
  let output = 0
  let mulitplier = 1
  // Arrays to test for valid input
  const checkerArr = []
  const checkerArr2 = []

  // Checking for any number in input
  function checkString(string) {
    return /^[0-9]*$/.test(string)
  }

  const stringContainsNum = checkString(word)

  // Multiple checks for valid input
  if (
    typeof word === 'string' &&
    stringContainsNum === false &&
    /^[a-zA-Z{}[\]]*$/.test(word)
  ) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase()

      // Checking for ({,[), if true then multiplier applied
      // Adds check to checkerArr until next iteration
      // If the accompanying (},]) are present, check is removed &
      // resets multiplier to 1
      // If check is still there, input is invalid and Line 66 returns false
      if (letter === '{') {
        mulitplier *= 2
        checkerArr.push('}')
      } else if (letter === '}') {
        mulitplier /= 2
        checkerArr.pop()
      } else if (letter === '[') {
        mulitplier *= 3
        checkerArr.push(']')
      } else if (letter === ']') {
        mulitplier /= 3
        checkerArr.pop()
      } else {
        for (const key in letters) {
          if (key.includes(letter)) {
            output += letters[key] * mulitplier
            break
          }
        }
      }
    }

    // Checking if there's a lonely ] or }
    for (const idx of word) {
      if (idx === '{' || idx === '[') {
        checkerArr2.push(idx)
      } else if (idx === '}' && checkerArr2.pop() !== '{') {
        console.log('Error: Input incorrect, please open AND close {} or []')
        output = 0
      } else if (idx === ']' && checkerArr2.pop() !== '[') {
        console.log('Error: Input incorrect, please open AND close {} or []')
        output = 0
      }
    }
  } else {
    console.log(
      "Error: Please input a valid WORD! Example: 'Animal', 'Rhinoceros', 'Drink' etc.."
    )
  }
  // Checking if checkerArr is empty, if not guard clause activates
  if (checkerArr.length === 0) {
    return output
  } else {
    console.log('Error: Input incorrect, please open AND close {} or []')
    return (output = 0)
  }
}

console.log(scrabble('hel}p'))

module.exports = scrabble
