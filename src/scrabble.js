// Declare the class:
class Scrabble {
  // Write your implementation here
  constructor(letters) {
    this.letters = letters;
  }

  score(valueOFLetter) {
    // let total to 0
    // Do a for loop for each character of this.letters
    // add value of each letter to total
    // finally return total
    return 0;
  }

  valueOFLetter(character) {
    if ("AEIOULNRST".indexOf(character) !== -1) {
      return 1;
    }
    if ("DG".indexOf(character) !== -1) {
      return 2;
    }

    if (((char = A), E, I, O, U, L, N, R, S, T)) return 1;
    else {
      if (((char = D), G)) return 2;
      else {
        if (((char = B), C, M, P)) return 3;
        else {
          if (((char = F), H, V, W, Y)) return 4;
          else {
            if ((char = K)) return 5;
            else {
              if (((char = J), X)) return 8;
              else {
                if (((char = Q), Z)) return 10;
              }
            }
          }
        }
      }
    }
  }
}

module.exports = Scrabble;
