class Scrabble {
  constructor (word) {
    this.word = word
  }

  scoreLoop (string) {
    let num = 0
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[^A-Z{}[]]/i)) {
        return 0
      }
      if (string[i].match(/[AEIOULNRST]/i)) {
        num++
      }
      if (string[i].match(/[DG]/i)) {
        num += 2
      }
      if (string[i].match(/[BCMP]/i)) {
        num += 3
      }
      if (string[i].match(/[FHVWY]/i)) {
        num += 4
      }
      if (string[i].match(/[K]/i)) {
        num += 5
      }
      if (string[i].match(/[JX]/i)) {
        num += 8
      }
      if (string[i].match(/[QZ]/i)) {
        num += 10
      }
    }
    return num
  }

  scoreMain () {
    if (this.word == null) {
      return 0
    }

    const wordTrimmed = this.word.trim()

    return this.scoreLoop(wordTrimmed)
  }

  scoreDoubleLetter () {
    if (this.word == null) {
      return 0
    }

    if (this.word.indexOf('{') === -1 && this.word.indexOf('}') === -1) {
      return 0
    }

    let letterArray = []

    for (let i = 0; i<this.word.length;i++) {
      if (this.word[i + 2] !== undefined) {
        if (this.word[i] === '{' && this.word[i+2] === '}') {
          letterArray.push(this.word[i+1])
        }
      }
    }

    if(letterArray.length === 0) {
      return 0
    }

    let score = 0

    if (letterArray.length > 0) {
      for (let j = 0; j<letterArray.length; j++) {
        score+=this.scoreLoop(letterArray[j])
      }
    }
    return score
  }

  scoreTripleLetter () {
    if (this.word == null) {
      return 0
    }

    if (this.word.indexOf('[') === -1 && this.word.indexOf(']') === -1) {
      return 0
    }

    let letterArray = []

    for (let i = 0; i<this.word.length;i++) {
      if (this.word[i + 2] !== undefined) {
        if (this.word[i] === '[' && this.word[i+2] === ']') {
          letterArray.push(this.word[i+1])
        }
      }
    }

    if(letterArray.length === 0) {
      return 0
    }

    let score = 0

    if (letterArray.length > 0) {
      for (let j = 0; j<letterArray.length; j++) {
        score+=(this.scoreLoop(letterArray[j]) * 2)
      }
    }
    return score
  }

  scoreDoubleOrTripleWord () {
    if (this.word == null) {
      return 0
    }
    if (this.word.indexOf('{') === 0 && this.word.indexOf('}') === this.word.length - 1 && this.word.length !== 3) {
      return 2
    }
    if (this.word.indexOf('[') === 0 && this.word.indexOf(']') === this.word.length - 1 && this.word.length !== 3) {
      return 3
    }
    return 1
  }

  score () {
    return (this.scoreMain() + this.scoreDoubleLetter() + this.scoreTripleLetter()) * (this.scoreDoubleOrTripleWord())
  }
}

module.exports = Scrabble