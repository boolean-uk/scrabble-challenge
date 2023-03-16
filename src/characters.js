const allowed = (word) => {
  word = word.toUpperCase()
  let sum = 0
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === '{' ||
      word[i] === '}' ||
      word[i] === '[' ||
      word[i] === ']' ||
      word[i] === 'A' ||
      word[i] === 'B' ||
      word[i] === 'C' ||
      word[i] === 'D' ||
      word[i] === 'E' ||
      word[i] === 'F' ||
      word[i] === 'G' ||
      word[i] === 'H' ||
      word[i] === 'I' ||
      word[i] === 'J' ||
      word[i] === 'K' ||
      word[i] === 'L' ||
      word[i] === 'M' ||
      word[i] === 'N' ||
      word[i] === 'O' ||
      word[i] === 'P' ||
      word[i] === 'Q' ||
      word[i] === 'R' ||
      word[i] === 'S' ||
      word[i] === 'T' ||
      word[i] === 'U' ||
      word[i] === 'V' ||
      word[i] === 'W' ||
      word[i] === 'X' ||
      word[i] === 'Y' ||
      word[i] === 'Z'
    ) {
      sum += sum
    } else {
      return false
    }
  }
  return sum
}

module.exports = allowed
