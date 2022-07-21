// function scrabble(word) {
//     if (word === null) {
//         word = ''
//     }
//     word = word.toLowerCase()
//     let score = 0
//     let onePoint = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"]
//     let twoPoint = ["d", "g"]
//     let threePoint = ["b", "c", "m", "p"]
//     let fourPoint = ["f", "h", "v", "w", "y"]
//     let fivePoint = ["k"]
//     let eightPoint = ["j", "x"]
//     let tenPoint = ["q", "z"]

//     for (let i=0; i < word.length; i++) {
//         if (onePoint.includes(word[i])) {
//             score += 1
//         } else if (twoPoint.includes(word[i])) {
//             score += 2
//         } else if (threePoint.includes(word[i])) {
//             score += 3
//         } else if (fourPoint.includes(word[i])) {
//             score += 4
//         } else if (fivePoint.includes(word[i])) {
//             score += 5
//         } else if (eightPoint.includes(word[i])) {
//             score += 8
//         } else if (tenPoint.includes(word[i])) {
//             score += 10
//         } else {
//             score += 0
//         }
//     }
//     return score
// }


const scoreValue = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z']
  }
  let multiplier = 1

function scrabble(word) {
  if (word === null || word === '' || word === " \t\n") {return 0}
  word = word.toLowerCase()
  let score = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "{") {multiplier = 2}
        if (word[i] === "[") {multiplier = 3}
        if (word[i] === "}" || word[i] === "]") {multiplier = 1}
        for (const j in scoreValue) {
            if (scoreValue[j].includes(word[i])) {
                // console.log("letter " + word[i] + " J is " + j)
                score += parseInt(j, 10)*multiplier
            }
        }
    }
//   return console.log(word + " vale " +score)
    return score
}

scrabble("a")
scrabble("f")
scrabble("hello world and")
scrabble("street")
scrabble("Xi{lofo}no")
scrabble("{incorreggibile}")
scrabble("so[qqua]dro")
scrabble("pr[ecipitev]oli{ssimevolment}e")

module.exports = scrabble
