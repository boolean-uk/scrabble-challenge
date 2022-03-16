// Create a point system by declaring an object that stores the values
// create constructor function and class by declaring them, its already instantiated in the spec file
// create for loop variable that goes through each letter and looks back at the point system to give it a score
// the input should match cases in the point-system so target the input and make it all lower-cases
// Declare a for loop variable and create a method
// Set a default multiplier and reassign the multiplier for doubleOrTriple scores

const Pointsystem = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

class Scrabble {
  // Write your implementation here

  constructor (word) {
    this.word = word
  }

  score () {
    if (this.word === null) {
      return 0
    }

    let multiplier = 1
    let totalpoints = 0

    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word.toLowerCase()[i]

      if (letter === '{') {
        multiplier = 2
      } else if (letter === '}') {
        multiplier = 1
      } else if (letter === '[') {
        multiplier = 3
      } else if (letter === ']') {
        multiplier = 1
      } else {
        const letterscore = Pointsystem[letter] || 0

        totalpoints += letterscore * multiplier
      }
    }
    return totalpoints
  }
}

module.exports = Scrabble
