function scrabble() {

}

// 1 - have the scores for different letters stored
const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const twoPoints = ['D', 'G' ]
const threePoints = ['B', 'C', 'M', 'P'] 
const fourPoints = ['F', 'H', 'V', 'W', 'Y']
const fivePoints = ['K']
const eightPoints = ['J', 'X' ]
const tenPoints = ['Q', 'Z']

const allPointsArrays = [onePoint, twoPoints, threePoints, fourPoints, fivePoints, eightPoints, tenPoints]

valueOnePoint = 1
valueTwoPoints = 2
valueThreePoints = 3
valueFourPoints = 4
valueFivePoints = 5
valueEightPoints = 8
valueTenPoints = 10

const allValues = [
    valueOnePoint, valueTwoPoints, 
    valueThreePoints, valueFourPoints, 
    valueFivePoints, valueEightPoints, 
    valueTenPoints]

let score = 0

// write a function that loops through all the points arrays and compares each letter to it
    // if you find a letter in an array, add corresponding points to score
comparePoints = (numPoints, correspondingPoints) => {
    for (i = 0; i <= numPoints.length; i++) {
        if (numPoints[i] === eachLetter[j]) {
            console.log('found')
            score += correspondingPoints
        } else {
            console.log('not found')
        }
    }
    console.log('points comparison added to score?', score)
    return score
}

// 2 - read a given word as a sequence of letters
const word = 'ex'
const givenWord = word.toLocaleUpperCase()
const givenLetters = givenWord.split('')
console.log(givenLetters)

// 3 - loop through the array of givenLetters
for (i = 0; i <= givenLetters.length-1; i++) {
    eachLetter = givenLetters[i]
    console.log('each letter -', eachLetter)
    console.log('score before -', score)
    // loop through all the points and assoc. points value arrays
    for (j = 0; j <= eachLetter.length-1; j++) {
        console.log('letter looking for -', eachLetter)
        comparePoints(onePoint, valueOnePoint)
        comparePoints(twoPoints, valueTwoPoints)
        comparePoints(threePoints, valueThreePoints)
        comparePoints(fourPoints, valueFourPoints)
        comparePoints(fivePoints, valueFivePoints)
        comparePoints(eightPoints, valueEightPoints)
        comparePoints(tenPoints, valueTenPoints)
    }

    console.log('score after -'. score)
}




module.exports = scrabble
