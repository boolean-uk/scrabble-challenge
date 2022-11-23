const arrayToSum = (array) => {
    let sum = 0
    array.forEach(element => sum += element)
    return sum
}

const arrayToNumbers = (array) => {
    const datasheet = require('./datasheet.js').datasheet
    const values = array.map( element => datasheet[element])
    return values
}

const stringToArray = (word) => {
    const letters = []
    word.toLowerCase().split('').forEach(element => {
        letters.push(element)
    });
    return letters
}

const scrabble = (word) => {
    if (word === null) {
        return 0
    } else if (typeof word === 'string'){
        const arrayOfLetters = stringToArray(word)
        // console.log(`Array of Letters: ${arrayOfLetters}`)
        const arrayOfValues = arrayToNumbers(arrayOfLetters)
        // console.log(`Array of Values: ${arrayOfValues}`)
        const sum = arrayToSum(arrayOfValues)
        // console.log(`The total Value of the word: ${sum}`)
        return sum
    }
}

module.exports = scrabble
