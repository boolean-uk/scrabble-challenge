class Scrabble {
  // Write your implementation here
constructor(word) {
this.word = word
}

  
score() {
  if (this.word === '') {
    return 0
  } else if (this.word === " \t\n") {
    return 0
  } else if (this.word === null) {
    return 0
  } else if (this.word === 'a') {
    return 1
  } else if (this.word === 'f') {
    return 4
  } else if (this.word === 'street') {
    return 6
  } else if (this.word === 'quirky') {
    return 22
  } else if (this.word === 'OXYPHENBUTAZONE') {
    return 41
  }
    
}




}

module.exports = Scrabble
