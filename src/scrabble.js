const doubleArray = []
const tripleArray = []
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

function scrabble(word) {
  let score = 0
  const check = wordCheck(word) // this function checks that the word only has acceptable characters
  console.log(check) // this displays whether the word is valid
  if (check === true) {
    word = word.toUpperCase()
    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      // console.log(letter) // this shows the individual letters been checked
      score += scoring(letter)
    }
    if (doubleArray.length !== 0) {
      console.log(doubleArray)
      for (let i = 0; i < doubleArray.length; i++) {
        const letter = doubleArray[i].toUpperCase()
        score += scoring(letter) * 2
      }
    }
    if (tripleArray.length !== 0) {
      console.log(tripleArray)
      for (let i = 0; i < tripleArray.length; i++) {
        const letter = tripleArray[i].toUpperCase()
        score += scoring(letter) * 3
      }
    }
  }
  return score
}

function scoring(letter) {
  const l = letter
  if (
    l === 'A' ||
    l === 'E' ||
    l === 'I' ||
    l === 'O' ||
    l === 'U' ||
    l === 'L' ||
    l === 'N' ||
    l === 'R' ||
    l === 'S' ||
    l === 'T'
  ) {
    return 1
  } else if (l === 'D' || l === 'G') {
    return 2
  } else if (l === 'B' || l === 'C' || l === 'M' || l === 'P') {
    return 3
  } else if (l === 'F' || l === 'H' || l === 'V' || l === 'W' || l === 'Y') {
    return 4
  } else if (l === 'K') {
    return 5
  } else if (l === 'J' || l === 'X') {
    return 8
  } else if (l === 'Q' || l === 'Z') {
    return 10
  }
}

function wordCheck(word) {
  if (typeof word !== 'string') {
    return false
  } else {
    for (let i = 0; i < word.length; i++) {
      const character = word[i]
      const c = character.toUpperCase()
      if (alphabet.includes(c) === true) {
        continue
      } else return false
    }
    return true
  }
}

console.log(scrabble('aa'))

// else if (c === '{'){
//   console.log(word.indexOf('{'))
//   const secondBraketIndex = word.indexOf('}')

//   if (secondBraketIndex === -1) {
//       return false
//     }

// else {
//   console.log(i)
//     const n = secondBraketIndex - i // number of bonus letters position
//     word.slice(word[i], 1) // removes first braket
//     // for (let k = 0; k < n; k++) {
//     //   doubleArray.push(word.slice(word[i], 1)) // removes letter from word and adds to double array
//     // }
//     word.slice(word[i], 1) // removes second braket
//     i--
//     console.log(i)

// create function to filter brakets

// input a word and have its letters evaluated for a value
// output value

// have each letter scanned using a for loop
// use if to add letter for whatever it is equilent to e.g. 1
// create arrays for each?
// index through each position

// for loop then if to add

// ++work on if statemnts needed
// const score1 = "A, E, I, O, U, L, N, R, S, T"
// if (score1.indexOf(l) === true){
//     console.log(l)
//     return 1
// }

module.exports = scrabble
