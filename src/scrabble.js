const getLetterScore = (letter) => {
    const letterScoreTable = {
        ...Object.fromEntries(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].map(key => [key, 1])),
        D: 2,
        G: 2,
        ...Object.fromEntries(['B', 'C', 'M', 'P'].map(key => [key, 3])),
        ...Object.fromEntries(['F', 'H', 'V', 'W', 'Y'].map(key => [key, 4])),
        K: 5,
        J: 8,
        X: 8,
        Q: 10,
        Z: 10
    }
    console.log(letter)
    console.log(letter.toUpperCase())

    if()
    return letterScoreTable[letter.toUpperCase()];
}


function scrabble(word) {
    let wordScore = 0
    if(word === null)
    {   return 0}
    for(let i=0; i< word.length; i++)
    {
        wordScore += getLetterScore(word[i])
    }
    return wordScore
}

//console.log(scrabble('')) // should return 0

console.log(scrabble(" \t\n")) // should return 0

/*console.log(scrabble(null)) // should return 0

console.log(scrabble('a')) // should return 1

console.log(scrabble('f')) // should return 4

console.log(scrabble('street')) // should return 6

console.log(scrabble('quirky')) // should return 22

console.log(scrabble('OXYPHENBUTAZONE')) // should return 41*/

module.exports = scrabble
