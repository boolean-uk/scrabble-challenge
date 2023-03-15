const scoreVaules = {
    // Corresponding alphabet to letter score values
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
    Z: 10,


}

// console.log(scoreVaules) // Testing Purpose

function scrabble(word) {
    if (word === null) {
        return 0;
    }
    word = word.trim().toLowerCase();
    if (!word) {
        return 0;
    }
    let s = 0; // score count 
    for (let i = 0; i < word.length; i++ ){
        letterr = word[i].toUpperCase();
         s += parseInt(scoreVaules[letterr]);

    }
    return (s);

}

console.log(scrabble("OXYPHENBUTAZONE"));

console.log(scrabble("OzYPHENaUTAZONE"));


scrabble('') // should return 0

scrabble(" \t\n") // should return 0

scrabble(null) // should return 0

scrabble('a') // should return 1

scrabble('f') // should return 4

scrabble('NaN') // should return 41

scrabble('street') // should return 6

scrabble('quirky') // should return 22

scrabble('OXYPHENBUTAZONE') // should return 41


module.exports = scrabble