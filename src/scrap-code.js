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

const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const guess = 'I'

console.log(onePoint.includes(guess))

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
