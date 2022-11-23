const values = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    'V': 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
}

function scrabble(string) {
if (string === null) {
    return 0
} else {
    var regEx = /^[A-Za-z]+$/
    if(string.match(regEx)) { 
        const word = string.toUpperCase()
        let sum = 0
        for (let i = 0; i < string.length; i++) {
            let current = word[i]
            sum += values[current]
        }
    return sum
} else { 
    return 0
}
}
}

console.log(scrabble(''))
console.log(scrabble(" \t\n"))
console.log(scrabble(null))
console.log(scrabble('a'))
console.log(scrabble('f'))
console.log(scrabble('street'))
console.log(scrabble('quirky'))
console.log(scrabble('OXYPHENBUTAZONE'))
module.exports = scrabble
