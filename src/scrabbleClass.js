const scoreDict = {
  score1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  score2: ['D', 'G'],
  score3: ['B', 'C', 'M', 'P'],
  score4: ['F', 'H', 'V', 'W', 'Y'],
  score5: ['K'],
  score8: ['J', 'X'],
  score10: ['Q', 'Z']
}

class Scrabble {
  constructor(str) {
    this.str = str
  }
}

console.log(Scrabble('Lu[ci]ano'))
