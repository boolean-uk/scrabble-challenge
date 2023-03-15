function scrabble(word) {
  let score = 0
  const check = wordCheck(word)
  console.log(check) // this displays whether the word is valid
  // the wordCheck function checks that the word only has acceptable characters
  if (check === true) {
    word = word.toUpperCase()
    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      console.log(letter) // this shows the individual letters been checked
      score += scoring(letter)
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
  if (typeof word === 'string') {
    for (let i = 0; i < word.length; i++) {
      const character = word[i]
      const c = character.toUpperCase()
      if (
        c === 'A' ||
        c === 'E' ||
        c === 'I' ||
        c === 'O' ||
        c === 'U' ||
        c === 'L' ||
        c === 'N' ||
        c === 'R' ||
        c === 'S' ||
        c === 'T' ||
        c === 'D' ||
        c === 'G' ||
        c === 'B' ||
        c === 'C' ||
        c === 'M' ||
        c === 'P' ||
        c === 'F' ||
        c === 'H' ||
        c === 'V' ||
        c === 'W' ||
        c === 'Y' ||
        c === 'K' ||
        c === 'J' ||
        c === 'X' ||
        c === 'Q' ||
        c === 'Z'
      ) {
        continue
      } else {
        return false
      }
    }
    return true
  } else {
    return false
  }
}

// console.log(scrabble(null))
// console.log(scrabble('hi'))
// console.log(scrabble(' '))
// console.log(scrabble(' /\d?'))
console.log(scrabble('sdfgfsgsfdghs'))

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
