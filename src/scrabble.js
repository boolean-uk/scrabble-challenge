function valueOfLetter(char) {
  char = char.toUpperCase().charAt(0)
  const letters = [
    [],
    ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    ['D', 'G'],
    ['B', 'C', 'M', 'P'],
    ['F', 'H', 'V', 'W', 'Y'],
    ['K'],
    [],
    [],
    ['J', 'X'],
    [],
    ['Q', 'Z']
  ]

  for (let value = 1; value < letters.length; value++) {
    if (letters[value].includes(char)) {
      return value
    }
  }
  return 0
}

function valueOfWord(word) {
  let value = 0
  if (word) {
    for (let i = 0; i < word.length; i++) {
      value += valueOfLetter(word.charAt(i))
    }
  }
  return value
}

// TODO: extended criteria

function scrabble(word) {
  // write code here
  return valueOfWord(word)
}

module.exports = scrabble
