
const lettersScore = {
  'a': 1,
  'b': 3,
  'c': 3,
  'd': 2,
  'e': 1,
  'f': 4,
  'g': 2,
  'h': 4,
  'i': 1,
  'j': 8,
  'k': 5,
  'l': 1,
  'm': 3,
  'n': 1,
  'o': 1,
  'p': 3,
  'q': 10,
  'r': 1,
  's': 1,
  't': 1,
  'u': 1,
  'v': 4,
  'w': 4,
  'x': 8,
  'y': 4,
  'z': 10
}

// Declare the class:
class Scrabble {
  // Write your implementation here
  constructor (letters) {
    this.letters = letters
  }

  score () {
    // let total to 0
    let totalScore = 0
    if (this.letters === null) {
      return totalScore
    }
    const letters = this.letters.toLowerCase() 

    // Do a for loop for each character of this.letters
    for (let i = 0; i < letters.length; ++i) {
      // add value of each letter to total
      totalScore += lettersScore[letters.charAt(i)] || 0;
      // finally return total
    } 
    return totalScore 
  }
}

// Previous work before Ed's introduction to tackle the task

//   valueOFLetter (character) {
//     if ('AEIOULNRST'.indexOf(character) !== -1) {
//       return 1
//     }
//     if ('DG'.indexOf(character) !== -1) {
//       return 2
//     }

//     if (char = AEIOULNRST) return 1
//     else {
//       if (((char = D), G)) return 2
//       else {
//         if (((char = B), C, M, P)) return 3
//         else {
//           if (((char = F), H, V, W, Y)) return 4
//           else {
//             if ((char = K)) return 5
//             else {
//               if (((char = J), X)) return 8
//               else {
//                 if (((char = Q), Z)) return 10
//   }
// }
//           }
//         }
//       }
//     }
//   }
// }


module.exports = Scrabble
