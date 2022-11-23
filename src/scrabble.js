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

// function scrabble(string)
// {
//    var letterCheck = /^[A-Za-z]+$/;
//    if(string.match(letterCheck)) {
//     const toPoints = (string) => {
//         const word = string.toUpperCase()
//         let sum = 0
//         for (let i = 0; i < string.length; i++) {
//             let current = word[i]
//             sum += values[current]
//         }
//         return sum
//     }
//     toPoints(string)
//    } else {
//     console.log('test4')
//    }
// } 

const scrabble = (string) => {
    const word = string.toUpperCase()
    let sum = 0
    for (let i = 0; i < string.length; i++) {
        let current = word[i]
        sum += values[current]
    }
    return sum
}

console.log(scrabble('test'))
module.exports = scrabble
