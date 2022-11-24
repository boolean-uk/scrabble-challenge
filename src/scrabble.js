function scrabble(str) {
  let counter = 0 // must be local to restart and redefine back to 0 when finished otherwise global scope will add it up
  if (!str || str.length === 0) {
    return 0
  }
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u' ||
      str[i] === 'l' ||
      str[i] === 'n' ||
      str[i] === 'r' ||
      str[i] === 's' ||
      str[i] === 't' ||
      str[i] === 'A' ||
      str[i] === 'E' ||
      str[i] === 'I' ||
      str[i] === 'O' ||
      str[i] === 'U' ||
      str[i] === 'L' ||
      str[i] === 'N' ||
      str[i] === 'R' ||
      str[i] === 'S' ||
      str[i] === 'T'
    ) {
      counter++
    } else if (
      str[i] === 'd' ||
      str[i] === 'g' ||
      str[i] === 'D' ||
      str[i] === 'G'
    ) {
      counter += 2
    } else if (
      str[i] === 'b' ||
      str[i] === 'c' ||
      str[i] === 'm' ||
      str[i] === 'p' ||
      str[i] === 'B' ||
      str[i] === 'C' ||
      str[i] === 'M' ||
      str[i] === 'P'
    ) {
      counter += 3
    } else if (
      str[i] === 'f' ||
      str[i] === 'h' ||
      str[i] === 'v' ||
      str[i] === 'w' ||
      str[i] === 'y' ||
      str[i] === 'F' ||
      str[i] === 'H' ||
      str[i] === 'V' ||
      str[i] === 'W' ||
      str[i] === 'Y'
    ) {
      counter += 4
    } else if (str[i] === 'k' || str[i] === 'K') {
      counter += 5
    } else if (
      str[i] === 'j' ||
      str[i] === 'x' ||
      str[i] === 'J' ||
      str[i] === 'X'
    ) {
      counter += 8
    } else if (
      str[i] === 'q' ||
      str[i] === 'z' ||
      str[i] === 'Q' ||
      str[i] === 'Z'
    ) {
      counter += 10
    } else return 0
  }
  return counter
}
console.log(scrabble('cabbage'))
module.exports = scrabble
