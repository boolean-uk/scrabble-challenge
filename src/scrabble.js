// Each letter has a numerical value. Write code that takes a word and return the total numerical sum of each letter.

// Psudocode
// 1.) Create an array with all letters
// 2.) Create function with loads of if statements to get numerical value. e.g if B (index 1 in above array) return 3. 
// 3.) Store this data somewhere (object maybe?)
// 4.) Create a function that takes a string as an argument
// 5.) For loop within function that loops round the length of the string
// 6.) Within the for loop translate each index of the string to it's numerical value (how??? - Maybe function from point 2 (index[i]) *Need to think of scope here*
// 7.) Store these values in array
// 8.) Loop around array to add
// 9.) Return value 

const lettersArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function scrabble(userString) {
    if (userString === null) {
        return 0
    } else {

    const str = userString.toUpperCase()
    let value = []
    let finalSum = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            value.push(1)
        } else if (str[i] === 'L' || str[i] === 'N' || str[i] === 'R' || str[i] === 'S' || str[i] === 'T') {
            value.push(1)
        } else if (str[i] === 'D' || str[i] === 'G') {
            value.push(2)
        } else if (str[i] === 'B' || str[i] === 'C' || str[i] === 'M' || str[i] === 'P' ) {
            value.push(3) 
        } else if (str[i] === 'F' || str[i] === 'H' || str[i] === 'V' || str[i] === 'W' || str[i] === 'Y') {
            value.push(4)
        } else if (str[i] === 'K') {
            value.push(5)
        } else if (str[i] === 'J' || str[i] === 'X') {
            value.push(8)
        } else if (str[i] === 'Q' || str[i] === 'Z') {
            value.push(10)
        } else {
            value.push(0)
        }
    }

    for (j = 0; j < value.length; j++) {
        finalSum += value[j]
    }

    console.log(`your word was ${userString}, you scored ${finalSum} points!`)
    return finalSum
}
}

scrabble('chicken nuggets')

module.exports = scrabble
