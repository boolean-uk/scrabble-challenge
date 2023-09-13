const {LETTERSCORES, MULTIPLE, SCOREMULTIPLIER} = require('./constants')

const stringToArray = (wordString) => {
  return wordString.split('')
}

const findLetterScore = (character) => {

}

const tallyScore = (numArray) => {
  return numArray.reduce((acc, val) => acc + val)
}


const scoreMultiplicatorizer = (character) => {

}

const scrabble = () => {
  // write code here
}

module.exports = {
  scrabble,
  findLetterScore,
  tallyScore,
  stringToArray,
  scoreMultiplicatorizer
}
