scrabble('{Pint}')

function scrabble(word) {
  // Catching the cheeky null value first
  if (word === null) {
    console.log('Why would you enter null?')
    return 0
  }
  // If it's not null we move on
  else {
    const wordUpperCase = word.toUpperCase() // Coverting the given word to upper case
    const wordSplit = wordUpperCase.split('') // Splitting the given word letter by letter
    console.log(`Your letters are the following: ${wordSplit}`) // Displaying the letters to the user
    let points = 0 // Setting up initial points tally at 0
    for (const i of wordSplit) {
      // Awarding points
      if (
        // letters for 1 point below
        i === 'A' ||
        i === 'E' ||
        i === 'I' ||
        i === 'O' ||
        i === 'U' ||
        i === 'L' ||
        i === 'N' ||
        i === 'R' ||
        i === 'S' ||
        i === 'T'
      ) {
        points += 1
      } else if (
        // letters for 2 points below
        i === 'D' ||
        i === 'G'
      ) {
        points += 2
      } else if (
        // letters for 3 points below
        i === 'B' ||
        i === 'C' ||
        i === 'M' ||
        i === 'P'
      ) {
        points += 3
      } else if (
        // letters for 4 points below
        i === 'F' ||
        i === 'H' ||
        i === 'V' ||
        i === 'W' ||
        i === 'Y'
      ) {
        points += 4
      } else if (
        // letters for 5 points below
        i === 'K'
      ) {
        points += 5
      } else if (
        // letters for 8 points below
        i === 'J' ||
        i === 'X'
      ) {
        points += 8
      } else if (
        // letters for 10 points below
        i === 'Q' ||
        i === 'Z'
      ) {
        points += 10
      }
    }
    if (word[0] === '{') {
      console.log('Double word!')
      points *= 2
    } else if (word[0] === '[') {
      console.log('Triple word!')
      points *= 3
    }
    console.log(`This gives you ${points} points in Scrabble!`)
    return points;
  }
}

module.exports = scrabble