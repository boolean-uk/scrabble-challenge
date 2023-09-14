const {
  charFactor,
  resetCharFactor,
  getValue,
  charFactorChangeTrigger
} = require('./constants')

function scrabble(word) {
  resetCharFactor()

  if (!!word === false || !!word.match(/[^A-Za-z\[\]\{\}]/g)) return 0
  
  let wordValue = 0
  word.length > 0 ? charArr = word.split("") : wordValue = 0

  charArr.length > 0 ? charArr.forEach((char) => wordValue += (charFactorChangeTrigger(char) + getValue(char)) * charFactor.current) : wordValue = 0

  return (charFactor.current === 1 && charFactor.valid === true) ? wordValue : 0
}

module.exports = scrabble