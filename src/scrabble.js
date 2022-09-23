const letterValue = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4,
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 3,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z': 10 
}

function scrabble(word) {
    let total = 0
if (word === null){
    return 0
} else if (word === ''){
    return 0
} else if (word){
    const upperCaseword = word.toUpperCase().split('')
    for (let i = 0; i <upperCaseword.length; i++) {
        total += letterValue[upperCaseword[i]]
    }
}
return total
}

console.log(scrabble('cabbage'))
module.exports = scrabble
  