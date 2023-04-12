function scrabble(word) {
  const letterValue = [
    ['AEIOULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10]
  ]
  // is the word that's given = null
  if (word === null) {
    return 0
  }
  let result = 0
  // find out what is the lenght of the word
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < letterValue.length; j++) {
      // use the letters from index 0 in the arrays and change them toUppercase
      if (letterValue[j][0].includes(word[i].toUpperCase())) {
        // call the value of each array in the const letterValue
        result = result + letterValue[j][1]
      }
    }
    // find if any word contains a special character that is differend than specified
    const specialCharacters = '[{}]AEIOULNRSTDGBCMPFHVWYKJXQZ'
    for (let k = 0; k < letterValue.length; k++) {
      if (specialCharacters.includes(word[k].toUpperCase()) === false){
        return 0
      }
    }
  }
  return result
}

//console.log(scrabble(' '))
// console.log(scrabble("\t\n"))
// console.log(scrabble(null))
//console.log(scrabble('a'))
//console.log(scrabble('f'))
//console.log(scrabble('street'))
//console.log(scrabble('quirky'))
//console.log(scrabble('OXYPHENBUTAZONE'))
module.exports = scrabble
