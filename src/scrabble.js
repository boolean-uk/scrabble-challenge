// SCRABBLE: I have a loop running over the inputted characters, and if the CURRENT character is found inside the Obj props. then do something.
// Input and output are respectively 'CHARACTERS' and 'POINTS'(of the CHARACTERS input as integer)
// create an object with Alphabet letters referencing to their respective points

const pointRef = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

function scrabble(characters) {
  // check that it returns 0 for every input that is not a 'string'
  if (typeof characters !== 'string') {
    return 0
  }

  // transform input to uppercase if it is not and split the string
  const input = characters.toUpperCase().split('')

  let result = 0
  // Iterate over each input letter and return 0 if the Object's properties above don't include one of the input's letters
  // return in result the sum of result and the values of each Obj. properties that include input[i] in the loop.
  for (let i = 0; i < input.length; i++) {
    if (!Object.keys(pointRef).includes(input[i])) {
      return 0
    }
    result += pointRef[input[i]]
  }
  return result
}
console.log(scrabble('street'))

module.exports = scrabble
