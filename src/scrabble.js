let score = 0

function findValues(word) {
    let value1 = 0
    // console.log(`what is i: ${i}`)
    let comparisonLetter = word.charAt(i)
    
    if (comparisonLetter === 'A'||comparisonLetter === 'E'||comparisonLetter === 'I'||comparisonLetter === 'O'||comparisonLetter === 'U'||comparisonLetter === 'L'||
    comparisonLetter === 'N'||comparisonLetter === 'R'||comparisonLetter === 'S'||comparisonLetter === 'T') {
        value1 = 1
        // console.log(`what is i: ${comparisonLetter}`)  
    }
    else if (comparisonLetter == 'D'||comparisonLetter == 'G'){
        value1 = 2
    }        
    else if (comparisonLetter == 'B'||comparisonLetter == 'C'||comparisonLetter == 'M'||comparisonLetter == 'P'){
        value1 = 3
    }
    else if (comparisonLetter == 'F'||comparisonLetter == 'H'||comparisonLetter == 'V'||comparisonLetter == 'W'||comparisonLetter == 'Y'){
        value1 = 4
    }
    else if (comparisonLetter == 'K'){
        value1 = 5
    }
    else if (comparisonLetter == 'J'||comparisonLetter == 'X') {
        value1 = 8
    }
    else if (comparisonLetter == 'Q'||comparisonLetter == 'Z'){
        value1 = 10
    }
    
    return score += value1
}

function scrabble(str) {
    if (str === null||str === " \t\n" ){
        return 0
    }
    if (str === ''){
        return 0
    }
    let word = str.toUpperCase()
    for (i = 0; i <= word.length; i++){
      findValues(word)
    } 
    let finalScore = score
    score = 0
    return finalScore
    }

// console.log(scrabble('a'))

module.exports = scrabble
