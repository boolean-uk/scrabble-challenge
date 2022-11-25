
//Core Scrabble: nailed it
let newWordArr = []
let sum = 0

function scrabble(str) {
    if (str === null) {
        return 0
    }
    let newWord = str.toUpperCase()

    for (let i = 0; i < newWord.length; i++) {
        if ( newWord[i] === 'A' || newWord[i] === 'E' || newWord[i] === 'I' || newWord[i] === 'O' || newWord[i] === 'U'
            || newWord[i] === 'L' || newWord[i] === 'N' || newWord[i] === 'R' || newWord[i] === 'S' || newWord[i] === 'T') {
            newWordArr.push(1)
        } else if (newWord[i] === 'D' || newWord[i] === 'G') {
            newWordArr.push(2)
        } else if (newWord[i] === 'B' || newWord[i] === 'C' || newWord[i] === 'M' || newWord[i] === 'P') {
            newWordArr.push(3)
        } else if (newWord[i] === 'F' || newWord[i] === 'H' || newWord[i] === 'V' || newWord[i] === 'W' || newWord[i] === 'Y') {
            newWordArr.push(4)
        } else if (newWord[i] === 'K') {
            newWordArr.push(5)
        } else if (newWord[i] === 'J' || newWord[i] === 'X') {
            newWordArr.push(8)
        } else if (newWord[i] === 'Q' || newWord[i] === 'Z') {
            newWordArr.push(10)
        } 
        
        else {
            return 0
        }


    }
    //console.log(newWordArr)

    for (j = 0; j < newWordArr.length; j++) {
        sum += newWordArr[j]
        // console.log('inside internal loop', sum)
    }

    //console.log('outside internal loop', sum)
    return sum
}

//Attempt 1 for extension: a separate function to combine wiht the first one
function doubTrip(scrabble()) {
    let Word = str

    //double points
    for (let i = 0; i < Word.length; i++) {
        if (Word[i] === '{A}' || Word[i] === '{E}' || Word[i] === '{I}' || Word[i] === '{O}' || Word[i] === '{U}' || Word[i] === '{L}' || Word[i] === '{N}' || Word[i] === '{R}' || Word[i] === '{S}' || Word[i] === '{T}') {
            newWordArr.push(1 * 2)
        } else if (Word[i] === '{D}' || Word[i] === '{G}') {
            newWordArr.push(2 * 2)
        } else if (Word[i] === '{B}' || Word[i] === '{C}' || Word[i] === '{M}' || Word[i] === '{P}') {
            newWordArr.push(3 * 2)
        } else if (Word[i] === '{F}' || Word[i] === '{H}' || Word[i] === '{V}' || Word[i] === '{W}' || Word[i] === '{Y}') {
            newWordArr.push(4 * 2)
        } else if (Word[i] === '{K}') {
            newWordArr.push(5 * 2)
        } else if (newWord[i] === '{J}' || Word[i] === '{X}') {
            newWordArr.push(8 * 2)
        } else if (Word[i] === '{Q}' || Word[i] === '{Z}') {
            newWordArr.push(10 * 2)
        }
        //triple points
        else if (Word[i] === '[A]' || Word[i] === '[E]' || Word[i] === '[I]' || Word[i] === '[O]' || Word[i] === '[U]' || Word[i] === '[L]' || Word[i] === '[N]' || Word[i] === '{R}' || Word[i] === '[S]' || Word[i] === '[T]') {
            newWordArr.push(1 * 3)
        } else if (Word[i] === '[D]' || Word[i] === '[G]') {
            newWordArr.push(2 * 3)
        } else if (Word[i] === '[B]' || Word[i] === '[C]' || Word[i] === '[M]' || Word[i] === '[P]') {
            newWordArr.push(3 * 3)
        } else if (Word[i] === '[F]' || Word[i] === '[H]' || Word[i] === '[V]' || Word[i] === '[W]' || Word[i] === '[Y]') {
            newWordArr.push(4 * 3)
        } else if (Word[i] === '[K]') {
            newWordArr.push(5 * 3)
        } else if (Word[i] === '[J]' || Word[i] === '[X]') {
            newWordArr.push(8 * 3)
        } else if (Word[i] === '[Q]' || Word[i] === '[Z]') {
            newWordArr.push(10 * 3)
        }
    }
}


// Attempt 35(?)
// Tried to make an object and use this in the code, but so far, no good
const doublePointLetter = {
2: '{A}' || '{E}' || '{I}' || '{O}' || '{U}'|| '{L}'|| '{N}' || '{R}' || '{S}' || '{T}' ,
4: '{D}' || '{G}',
6: '{B}' || '{C}' || '{M}' || '{P}',
8: '{F}' || '{H}' || '{V}' || '{W}' || '{Y}',
10: '{K}',
16: '{J}' || '{X}',
20: '{Q}' || '{Z}'
}

let newWordArr = []
let sum = 0

function scrabble(str) {
    if (str === null) {
        return 0
    }
    let newWord = str.toUpperCase()

    for (let i = 0; i < newWord.length; i++) {

        //double points... put these first to try accommodate for scope but my code is ignoring this part
        if (newWord[i] === '{A}' || newWord[i] === '{E}' || newWord[i] === '{I}' || newWord[i] === '{O}' || newWord[i] === '{U}' || newWord[i] === '{L}' || newWord[i] === '{N}' || newWord[i] === '{R}' || newWord[i] === '{S}' || newWord[i] === '{T}') {
            newWordArr.push(2)
        } else if (newWord[i] === '{D}' || newWord[i] === '{G}') {
            newWordArr.push(4)
        } else if (newWord[i] === '{B}' || newWord[i] === '{C}' || newWord[i] === '{M}' || newWord[i] === '{P}') {
            newWordArr.push(6)
        } else if (newWord[i] === '{F}' || newWord[i] === '{H}' || newWord[i] === '{V}' || newWord[i] === '{W}' || newWord[i] === '{Y}') {
            newWordArr.push(8)
        } else if (newWord[i] === '{K}') {
            newWordArr.push(10)
        } else if (newWord[i] === '{J}' || newWord[i] === '{X}') {
            newWordArr.push(12)
        } else if (newWord[i] === '{Q}' || newWord[i] === '{Z}') {
            newWordArr.push(20)
        }
        //triple points: This part is also being ignored rn. not sure why
        else if (newWord[i] === '[A]' || newWord[i] === '[E]' || newWord[i] === '[I]' || newWord[i] === '[O]' || newWord[i] === '[U]' || newWord[i] === '[L]' || newWord[i] === '[N]' || newWord[i] === '{R}' || newWord[i] === '[S]' || newWord[i] === '[T]') {
            newWordArr.push(3)
        } else if (newWord[i] === '[D]' || newWord[i] === '[G]') {
            newWordArr.push(6)
        } else if (newWord[i] === '[B]' || newWord[i] === '[C]' || newWord[i] === '[M]' || newWord[i] === '[P]') {
            newWordArr.push(9)
        } else if (newWord[i] === '[F]' || newWord[i] === '[H]' || newWord[i] === '[V]' || newWord[i] === '[W]' || newWord[i] === '[Y]') {
            newWordArr.push(12)
        } else if (newWord[i] === '[K]') {
            newWordArr.push(15)
        } else if (newWord[i] === '[J]' || newWord[i] === '[X]') {
            newWordArr.push(18)
        } else if (newWord[i] === '[Q]' || newWord[i] === '[Z]') {
            newWordArr.push(30)
        }
        //normal points: code goes straight to this and this part works well
        else if (newWord[i] === 'A' || newWord[i] === 'E' || newWord[i] === 'I' || newWord[i] === 'O' || newWord[i] === 'U'
            || newWord[i] === 'L' || newWord[i] === 'N' || newWord[i] === 'R' || newWord[i] === 'S' || newWord[i] === 'T') {
            newWordArr.push(1)
        } else if (newWord[i] === 'D' || newWord[i] === 'G') {
            newWordArr.push(2)
        } else if (newWord[i] === 'B' || newWord[i] === 'C' || newWord[i] === 'M' || newWord[i] === 'P') {
            newWordArr.push(3)
        } else if (newWord[i] === 'F' || newWord[i] === 'H' || newWord[i] === 'V' || newWord[i] === 'W' || newWord[i] === 'Y') {
            newWordArr.push(4)
        } else if (newWord[i] === 'K') {
            newWordArr.push(5)
        } else if (newWord[i] === 'J' || newWord[i] === 'X') {
            newWordArr.push(8)
        } else if (newWord[i] === 'Q' || newWord[i] === 'Z') {
            newWordArr.push(10)
        }
        anything else 
        else {
            return 0
        }


    }
    //console.log(newWordArr)

    for (j = 0; j < newWordArr.length; j++) {
        sum += newWordArr[j]
    }

    return sum
}

console.log(scrabble('d{o}g')) //should = more than 5

// Pseudo code for Whole word
// 1. make a function for double word: if '${[word]}' or '${{word}}'... x sum*2 (or *3)... gotta figure out the syntax

// clean code:
// tried to start building functions separately for the extensions but it hasn't worked so far... defs a later problem
module.exports = scrabble