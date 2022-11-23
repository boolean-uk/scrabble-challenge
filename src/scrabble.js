const getLetterScore = (letter, multiplier) => {
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

    if(letterScoreTable[letter.toUpperCase()] != undefined)
        return letterScoreTable[letter.toUpperCase()] * multiplier;
    else
        return 0;
}


function scrabble(word) {
    let wordScore = 0
    let multiplier = 1
    if(word === null)
    {   return 0}
    for(let i=0; i< word.length; i++)
    {
        switch (word[i]) {
            case `{`:
                multiplier *= 2
                break;
            case `}`:
                multiplier /= 2
                break;
            case `[`:
                multiplier *= 3
                break;
            case `]`:
                multiplier /= 3
                break;
        
            default:
                break;
        }
        if(multiplier < 1)
            multiplier = 1
        wordScore += getLetterScore(word[i], multiplier)
    }
    return wordScore
}

console.log(scrabble('st[r]{e}et')) // should return 9

console.log(scrabble('[quirky]')) // should return 22

console.log(scrabble('OXYPHENBUTAZONE')) // should return 41

module.exports = scrabble
