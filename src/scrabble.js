class Scrabble {

  constructor(input) {
    this.input = input
    this.value1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
    this.value2 = ["D", "G"]
    this.value3 = ["B", "C", "M", "P"]
    this.value4 = ["F", "H", "V", "W", "Y"]
    this.value5 = ["K"]
    this.value8 = ["J", "X"]
    this.value10 = ["Q", "Z"]
  }

  score() {
    let totalScore = 0

    if (this.input === null) {
      totalScore = 0
    } else {
      this.input.split("").map(letter => {
        const allCaps = letter.toUpperCase()
        if (this.value1.includes(allCaps)) totalScore ++
        if (this.value2.includes(allCaps)) totalScore += 2
        if (this.value3.includes(allCaps)) totalScore += 3
        if (this.value4.includes(allCaps)) totalScore += 4
        if (this.value5.includes(allCaps)) totalScore += 5
        if (this.value8.includes(allCaps)) totalScore += 8
        if (this.value10.includes(allCaps)) totalScore += 10
        return 
      })
    }
    
    return totalScore
    
  }
}

module.exports = Scrabble
