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

        let arrOfLetters = this.input.split("").map(letter => {
          if (letter === "{") letter = "}*"
          if (letter === "[") letter = "]%"
          return letter
        })
    
        if (arrOfLetters.includes("]")) arrOfLetters = arrOfLetters.join("").split("]")
        if (arrOfLetters.includes("}")) arrOfLetters = arrOfLetters.join("").split("}")
    
        const isDouble = arrOfLetters.join("").includes("*")
        const isTriple = arrOfLetters.join("").includes("%")
    
        let doubleArr, tripleArr
    
        if (isDouble) doubleArr = arrOfLetters.map(x => x.split(""))
        if (isTriple) tripleArr = arrOfLetters.map(x => x.split(""))
    
        const getScore = arr => {
          let score = 0
          arr.map(letter => {
            const allCaps = letter.toUpperCase()
            if (this.value1.includes(allCaps)) score ++
            if (this.value2.includes(allCaps)) score += 2
            if (this.value3.includes(allCaps)) score += 3
            if (this.value4.includes(allCaps)) score += 4
            if (this.value5.includes(allCaps)) score += 5
            if (this.value8.includes(allCaps)) score += 8
            if (this.value10.includes(allCaps)) score += 10
          })
          return score
        }
    
        if (isDouble) {
          totalScore = doubleArr.map(x => {
            return x.includes("*") ? getScore(x) * 2 : getScore(x)
          }).reduce((a, b) => a + b)
        } else if (isTriple) {
          totalScore = tripleArr.map(x => {
            return x.includes("%") ? getScore(x) * 3 : getScore(x)
          }).reduce((a, b) => a + b)
        } else {
          totalScore = getScore(arrOfLetters)
        }

      }
    
    return totalScore
    
  }
}

module.exports = Scrabble
