function scrabble(word) {
  // write code here
  // check for right type of input

  if (typeof word !== "string" || word === null || word === undefined || word.length === 0 || !!word.match(/[^A-Za-z\[\]\{\}]/)) return 0

  // console.log(word, word.match(/[^A-Za-z\[\]\{\}]/))

  // set up values
  const charValue = {
    A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
  }

  const charFactor = {
    current: 1
  }

  charFactorChangeTrigger = (char, index) => {
    // the whole "change the factor can't apply at the beginning nor end, otherwise it's double benefits with the word factor
    if (!!char.match(/[\[\]\{\}]/) && index !== 0 && index !== charArr.length-1) {
      switch (char) {
        case "{":
          updateCharFactor(2)
          break;
        case "[":
          updateCharFactor(3)
          break;
        case "}":
        case "]":
          updateCharFactor(charFactor.previous)
          break;
      }
      // console.log("char factor change due to", char, charFactor.previous, "->", charFactor.current)
    }
    return 0 // this is just so it will do its thing but doesn't affect the addition
  }

  updateCharFactor = (newFactor) => {
    charFactor.previous = charFactor.current;
    charFactor.current = newFactor
  }

  // determine the word factor
  wordFactor = (word) => {
    if (word[0] === "{" && word[word.length-1]=== "}") {
      return 2
    } else if(word[0] === "[" && word[word.length-1]=== "]") {
      return 3
    } else {
      return 1
    }
  }

  // function to get the value of a character after vetting it is a letter
  getValue = (char) => (!!char.match(/[^A-Za-z]/) ? 0 : charValue[char.toUpperCase()])

  // make the word an array
  let wordValue = 0
  word.length > 0 ? charArr = word.split("") : wordValue = 0

  // loop through all characters and add their values to WordValue, check for need of change 
  charArr.length > 0 ? charArr.forEach((char, index) => wordValue += (charFactorChangeTrigger(char, index) + getValue(char)) * charFactor.current) : wordValue = 0
  
  // if there's funny business with the brakets the current factor, at the very end, will NOT be 1. if it is, return the actual wordvalue (additionally enhanced with the word multiplier if applicable). otherwise: too damn bad
  // console.log(wordValue * wordFactor(word))
  return charFactor.current === 1 ? wordValue * wordFactor(word) : 0
}

module.exports = scrabble