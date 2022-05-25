const pointsChart = [
  { point: 1, letters: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'] },
  { point: 2, letters: ['d', 'g'] },
  { point: 3, letters: ['b', 'c', 'm', 'p'] },
  { point: 4, letters: ['f', 'h', 'v', 'w', 'y'] },
  { point: 5, letters: ['k'] },
  { point: 8, letters: ['j', 'x'] },
  { point: 10, letters: ['q', 'z'] }
]

class Scrabble {
  constructor (word) {
    this.word = word
    this.points = 0
  }

  // used a loof to extract the point value from the pointsChart above. stored the point value in a variable.
  scoreForLetter (letter) {
    for (let i = 0; i < pointsChart.length; i++) {
      if (pointsChart[i].letters.includes(letter.toLowerCase())) {
        return pointsChart[i].point
      }
    }
  }

  // first i check for empty strings and white spaces.
  score () {
    if (
      this.word === '' ||
      this.word === ' ' ||
      this.word === ' \t\n' ||
      this.word === null
    ) {
      return 0
    }
    // loop for the letters in the given word and each letter is given a point, using the scoreForLetter variable from above.
    for (let i = 0; i < this.word.length; i++) {
      this.points += this.scoreForLetter(this.word[i])
    }
    return this.points
  }
}

module.exports = Scrabble
