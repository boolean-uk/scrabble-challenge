const Pointsystem = {
  1: ['A' , 'a', 'E' , 'e', 'I', 'i', 'O','o', 'U','u', 'L','l', 'N','n', 'R','r', 'S','s', 'T','t'],
  2: ['D','d', 'G','g'],
  3: ['B','b', 'C','c', 'M','m', 'P','p'],
  4: ['F','f', 'H','h', 'V','v', 'W','w', 'Y','y'],
  5: ['K','k'],
  8: ['J','j', 'X','x'],
  10: ['Q','q', 'Z','z']
};

const letterScores = {
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

console.log (letterScores)

// Added lowercases to see if it would work assuming the program was case sensitive

class Scrabble {
  // Write your implementation here

  constructor (word) {
    this.word = word
  }

  score() {

    // const Totalscore 
    // const Pointsystem = this.word.split('')
    if (this.word === null) {
      return 0
    }

    
    // Each individual letter (charAt) in the word is given point and added
    // Return 0 if nothing is run
    let totalpoints = 0
    for (var i = 0; i < this.word.length; i++) {
      totalpoints += letterScores[this.word.toLowerCase().charAt(i)] || 0;
    }
    
    console.log(totalpoints)
    return totalpoints
    
    
    /* EXTENSION STARTS */


    /* PSEUDOCODE FOR NEXT OBJECTIVE STARTS */

// At default multiplier should be declared and assigned to 1
// Multiplier should be reassigned to 2 when a curly open bracket is detected
// The multiplier should be reassigned to 1 when a curly closed bracket is detected
// Multiplier should be assigned to 3 when open bracket is detected and reassigned to 1 when closing square bracket is detected
// The totalscores for the values inside will change due to the multipliers declared
// the totalscores at default (without the brackets) will not change

    /* PSEUDOCODE FOR NEXT OBJECTIVE ENDS */

    // DoubleOrTriple = []

    // if (this.word === '{' {DoubleOrTriple.push(Double)})
    // console.log (DoubleOrTriple)
    // else if (this.word === '[' {DoubleOrTriple.push(triple)})
    // console.log (DoubleOrTriple)
    // if DoubleOrTriple = Double 
    // return totalpoints += Pointsystem[this.word[i]] * 2

    
    
    /* EXTENSION ENDS */


  }

}

module.exports = Scrabble
