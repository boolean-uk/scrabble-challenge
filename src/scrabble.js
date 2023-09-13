function scrabble(word) {
  // write code here
  // check for right type of input

  if (typeof word !== "string" || word === null || word === undefined || word.length === 0) return 0

  // set up values
  const charValue = {
    A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
  }

  // function to get the value of a character after vetting it is a letter
  getValue = (char) => !!char.match(/[^A-Za-z]/) ? 0 : charValue[char.toUpperCase()]

  // make the word an array
  let wordValue = 0
  word.length > 0 ? charArr = word.split("") : wordValue = 0

  // loop through all characters and add their values to wordvalue
  charArr.length > 0 ? charArr.forEach((char, index) => wordValue += getValue(char)) : wordValue = 0
  
  return wordValue
}

module.exports = scrabble