class Scrabble {
  constructor (word) {
    this.word = word
    this.points = 0
  }

  // first find out if the string is empty string, whitepsace or null, then score 0.
  score () {
    if (
      this.word === '' ||
      this.word === ' ' ||
      this.word === ' \t\n' ||
      this.word === null
    ) {
      this.points += 0
      return 0
    }

    // I use for loop on the string to score each letter on each iteration
    for (let i = 0; i < this.word.length; i++) {
      // thise are the letters in the corresponting arrays (based on the points value), stored in a variable
      const pointOne = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
      const pointTwo = ['d', 'g']
      const pointThree = ['b', 'c', 'm', 'p']
      const pointFour = ['f', 'h', 'v', 'w', 'y']
      const pointFive = ['k']
      const pointEight = ['j', 'x']
      const pointTen = ['q', 'z']
      // i declared variables for the double/triple points, it can be either True or False
      let doublePoints = false
      let triplePoints = false
      // if the actual character in the string in this actual iteration of the loop is "{" or "[" => then double points will switch to True AND i++ so we jump on the next letter in the string and use IF statements to find out if that letter is TRUE, FALSE or else.
      if (this.word[i] === '{') {
        doublePoints = true
        i++
      }
      // if the character is "}" or "]" then double points will swithc to FALSE therefore the letter after this character only worth single points.
      if (this.word[i] === '}') {
        doublePoints = false
      }

      if (this.word[i] === '[') {
        triplePoints = true
        i++
      }

      if (this.word[i] === ']') {
        triplePoints = false
      }

      if (
        pointOne.includes(this.word[i]) ||
        pointOne.includes(this.word[i].toLowerCase())
      ) {
        if (doublePoints === true) {
          this.points += 1 * 2
        } else if (triplePoints === true) {
          this.points += 1 * 3
        } else {
          this.points += 1
        }
      } else if (
        pointTwo.includes(this.word[i]) ||
        pointTwo.includes(this.word[i].toLowerCase())
      ) {
        if (doublePoints === true) {
          this.points += 2 * 2
        } else if (triplePoints === true) {
          this.points += 2 * 3
        } else {
          this.points += 2
        }
      } else if (
        pointThree.includes(this.word[i]) ||
        pointThree.includes(this.word[i].toLowerCase())
      ) {
        if (doublePoints === true) {
          this.points += 3 * 2
        } else if (triplePoints === true) {
          this.points += 3 * 3
        } else {
          this.points += 3
        }
      } else if (
        pointFour.includes(this.word[i]) ||
        pointFour.includes(this.word[i].toLowerCase())
      ) {
        if (doublePoints === true) {
          this.points += 4 * 2
        } else if (triplePoints === true) {
          this.points += 4 * 3
        } else {
          this.points += 4
        }
      } else if (
        pointFive.includes(this.word[i]) ||
        pointFive.includes(this.word[i].toLowerCase())
      ) {
        if (doublePoints === true) {
          this.points += 5 * 2
        } else if (triplePoints === true) {
          this.points += 5 * 3
        } else {
          this.points += 5
        }
      } else if (
        pointEight.includes(this.word[i]) ||
        pointEight.includes(this.word[i].toLowerCase())
      ) {
        if (doublePoints === true) {
          this.points += 8 * 2
        } else if (triplePoints === true) {
          this.points += 8 * 3
        } else {
          this.points += 8
        }
      } else if (
        pointTen.includes(this.word[i]) ||
        pointTen.includes(this.word[i].toLowerCase())
      ) {
        if (doublePoints === true) {
          this.points += 10 * 2
        } else if (triplePoints === true) {
          this.points += 10 * 3
        } else {
          this.points += 10
        }
      }
    }
    return this.points
  }
}

module.exports = Scrabble
