// //nested loop
// for (j = 0; j <= eachLetter.length-1; j++) {
//     for (k = 0; k <= onePoint.length-1; k++){
//           if (onePoint[k] === eachLetter[j]) {
//     score += 1
//     console.log('was a letter in onePoint? ', score)

//     // write a function that loops through the points arrays
// comparePoints = (numPoints) => {
//     for (i = 0; i <= numPoints.length; i++) {
//         if (numPoints[i] === eachLetter[j]) {
//             score += 1
//         }
//     }
//     console.log('points comparison added to score?', score)
//     return score
// }

// // function to compare all arrays
// compareAllPointsArrays = () => {
//     for (p = 0; p <= allPointsArrays; p++) {
//     comparePoints(allPointsArrays, allValues)
//     }
// }

// const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
// const guess = 'I'

// console.log(onePoint.includes(guess))

// comparePoints = (numPoints, correspondingPoints) => {
//     for (i = 0; i <= numPoints.length; i++) {
//         if (numPoints[i] === eachLetter[j]) {
//             console.log('found')
//             score += correspondingPoints
//         } else {
//             console.log('not found')
//         }
//     }
//     console.log('points comparison added to score?', score)
//     return score
// }

// const allPointsArrays = [onePoint, twoPoints, threePoints, fourPoints, fivePoints, eightPoints, tenPoints]
// const allValues = [valueOnePoint, valueTwoPoints, valueThreePoints, valueFourPoints, valueFivePoints, valueEightPoints, valueTenPoints]

// write a function that loops through all the points arrays and compares each letter to it
// if you find a letter in an array, add corresponding points to score
// comparePoints = (numPoints, correspondingPoints) => {
//     for (i = 0; i <= numPoints.length; i++) {
//         if (numPoints[i] === eachLetter[j]) {
//             console.log('found', i)
//             score += correspondingPoints
//         // } else {
//         //     console.log('not found')
//         }
//     }
// }

// loop through all the points and assoc. points value arrays
// for (j = 0; j <= givenLetters.length-1; j++) {
//     // console.log('letter looking for -', eachLetter)
//     console.log('j = ', j)
//     console.log('letter looking for', givenLetters[j])
//     comparePoints(onePoint, valueOnePoint)
//     comparePoints(twoPoints, valueTwoPoints)
//     comparePoints(threePoints, valueThreePoints)
//     comparePoints(fourPoints, valueFourPoints)
//     comparePoints(fivePoints, valueFivePoints)
//     comparePoints(eightPoints, valueEightPoints)
//     comparePoints(tenPoints, valueTenPoints)
//     console.log('current score after all comparisons -', score)
// }

function twoArgs(string1, number1) {
  return string1.toUpperCase() + '!'.repeat(number1)
}

console.log(twoArgs('Hello', 7))
