// if null get it to ignore my "to upperCase" to pass the final spec

function scrabble(str) {
    if (str === null) {
        return 0
    }
    let newWord = str.toUpperCase()
    let newWordArr = []
    let sum = 0



    for (let i = 0; i < newWord.length; i++) {
        if (newWord[i] === 'A' || newWord[i] === 'E' || newWord[i] === 'I' || newWord[i] === 'O' || newWord[i] === 'U' || newWord[i] === 'L' || newWord[i] === 'N' || newWord[i] === 'R' || newWord[i] === 'S' || newWord[i] === 'T') {
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
        } else {
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



console.log(scrabble('DOG')) //should = 5


module.exports = scrabble