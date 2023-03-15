// 1 - have the scores for different letters stored
const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const twoPoints = ['D', 'G' ]
const threePoints = ['B', 'C', 'M', 'P'] 
const fourPoints = ['F', 'H', 'V', 'W', 'Y']
const fivePoints = ['K']
const eightPoints = ['J', 'X' ]
const tenPoints = ['Q', 'Z']

valueOnePoint = 1
valueTwoPoints = 2
valueThreePoints = 3
valueFourPoints = 4
valueFivePoints = 5
valueEightPoints = 8
valueTenPoints = 10

let score = 0

function scrabble(word) {

// 2 - read a given word as a sequence of letters
const givenWord = word.toLocaleUpperCase()
const givenLetters = givenWord.split('')

// 3 - loop through the array of givenLetters
for (i = 0; i <= givenLetters.length-1; i++) {
    eachLetter = givenLetters[i]

// 4 - compare each letter with its score
// 5 - sum the scores assigned for each letter
    if (onePoint.includes(eachLetter)) {
        score += valueOnePoint
    } else if (twoPoints.includes(eachLetter)) {
        score += valueTwoPoints
    }  else if (threePoints.includes(eachLetter)) {
        score += valueThreePoints
    }  else if (fourPoints.includes(eachLetter)) {
        score += valueFourPoints
    }  else if (fivePoints.includes(eachLetter)) {
        score += valueFivePoints
    } else if (eightPoints.includes(eachLetter)) {
        score += valueEightPoints
    } else if (tenPoints.includes(eachLetter)) {
        score += valueTenPoints
    } else {
        score = 0
        console.log('invalid word given')
    }
}
return `The Scrabble score for the word '${word}' is ${score} points.`
}

// 6 - output the score for the given word
console.log(scrabble('example'))

module.exports = scrabble
