// make a function that will have an input of a string
// this function needs to return a number so it will require a counter
// this function will have to go to each letter of the input and update this counter to a certain amount
// this function will require to see if the input has any of the following letters regardless of its case

function scrabble(input) {
  let counter = 0
  if (input === null || input.length === 0) {
    return counter
  }
  for (let i = 0; i < input.length; i++) {
    const eachLetter = input[i]
    if (
      eachLetter === `a` ||
      eachLetter === `A` ||
      eachLetter === `e` ||
      eachLetter === `E` ||
      eachLetter === `i` ||
      eachLetter === `I` ||
      eachLetter === `o` ||
      eachLetter === `O` ||
      eachLetter === `u` ||
      eachLetter === `U` ||
      eachLetter === `l` ||
      eachLetter === `L` ||
      eachLetter === `n` ||
      eachLetter === `N` ||
      eachLetter === `r` ||
      eachLetter === `R` ||
      eachLetter === `s` ||
      eachLetter === `S` ||
      eachLetter === `t` ||
      eachLetter === `T`
    ) {
      counter += 1
    } else if (
      eachLetter === `d` ||
      eachLetter === `D` ||
      eachLetter === `g` ||
      eachLetter === `G`
    ) {
      counter += 2
    } else if (
      eachLetter === `b` ||
      eachLetter === `B` ||
      eachLetter === `c` ||
      eachLetter === `C` ||
      eachLetter === `m` ||
      eachLetter === `M` ||
      eachLetter === `p` ||
      eachLetter === `P`
    ) {
      counter += 3
    } else if (
      eachLetter === `f` ||
      eachLetter === `F` ||
      eachLetter === `h` ||
      eachLetter === `H` ||
      eachLetter === `v` ||
      eachLetter === `V` ||
      eachLetter === `w` ||
      eachLetter === `W` ||
      eachLetter === `y` ||
      eachLetter === `Y`
    ) {
      counter += 4
    } else if (eachLetter === `k` || eachLetter === `K`) {
      counter += 5
    } else if (
      eachLetter === `j` ||
      eachLetter === `J` ||
      eachLetter === `x` ||
      eachLetter === `X`
    ) {
      counter += 8
    } else if (
      eachLetter === `q` ||
      eachLetter === `Q` ||
      eachLetter === `z` ||
      eachLetter === `Z`
    ) {
      counter += 10
    } else {
      counter = 0
    }
  }
  return counter
}
console.log(scrabble('quirky'))

module.exports = scrabble
