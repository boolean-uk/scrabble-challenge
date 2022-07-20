const wordValues = {
    '_': 0,
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
}

let score = 0

function scrabble(word) {
    const wordArray = convertWordToArray(word)
    for( let letter of wordArray ) { score += wordValues[letter] }
    return finalResultAndReset()
}

function finalResultAndReset() {
    let wordScore = score
    score = 0
    return wordScore
}

function convertWordToArray(word) {
    if ( word === null) { return ['_'] }
    // if ( word.indexOf(' ') != -1 ) { return word.replaceAll(' ', '_')}
    if ( word.length === 1 ) { return [ `${word.toUpperCase()}` ] }
    
    let upperCaseWord = word.toUpperCase()
    
    return upperCaseWord.split('')
}

module.exports = scrabble
