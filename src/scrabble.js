// | Letter                        | Value  |
// | ----                          |  ----  |
// | A, E, I, O, U, L, N, R, S, T  |     1  |
// | D, G                          |     2  |
// | B, C, M, P                    |     3  |
// | F, H, V, W, Y                 |     4  |
// | K                             |     5  |
// | J, X                          |     8  |
// | Q, Z                          |     10 |

// function scrabble() {

// }

// module.exports = scrabble
// eslint-disable-next-line no-unused-vars
// For input if write null we need to get 0
function scrabble(word) {
  // eslint-disable-next-line use-isnan, valid-typeof
  if (typeof word !== 'string' || word === '' || word === ' \t\n') {
    return 0
  }
  // Define an object to map each letter to its corresponding score
  const letterScores = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  // Initialize a variable to store the total score
  let score = 0

  // Loop over each letter in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase()
    // Convert the letter to uppercase for case-insensitivity
    console.log(letter)
    const number = letterScores[letter] // Look up the score for this letter in the letterScores object, or 0 if not found
    score += number // score = score + number// Add the letter's score to the total score
  }

  // Return the total score
  return score
}
console.log(scrabble('spiderman'))
module.exports = scrabble
