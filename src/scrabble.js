const wordValues = {
    _: 0,
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
    const wordArray = sanitizeAndConvert(word)
    for (let letter of wordArray) { score += wordValues[letter] }
    return outputFinalResultAndReset(score)
}

function outputFinalResultAndReset(finalScore) {
    score = 0
    return finalScore
}

function sanitizeAndConvert(word) {
    if (word === null) { return ['_'] }
    const wordCheckedForMultples = checkForMultiples(word);
    const sanitizedWord = wordCheckedForMultples.toUpperCase().replace(' ', '_').replace('\t', '_').replace('\n', '_')
    if (sanitizedWord.length === 1) { return [`${sanitizedWord}`] }
    return sanitizedWord.split('')
}

// Extended Acceptance Criteria - Double and triple letters and words

// Find position of CURLY BRACES IN word, double the next letter, remove curly braces from word and return word.
// Find position of SQUARE BRACKETS IN word, triple the next letter, remove square brackets from word and return word.

// Find and remove the CURLY BRACES AROUND word and return word twice.
// Find and remove the SQUARE BRACKETS AROUND word and return word three times.

function checkForMultiples(word) {
    if(word[0] === '{' && word[word.length - 1] === '}') {
        let doubleWordRemovedControlCharacters = word.toUpperCase().replace('{', '').replace('}', '')
        return doubleWordRemovedControlCharacters + doubleWordRemovedControlCharacters
    }
    if(word[0] === '[' && word[word.length - 1] === ']') {
        let tripleWordRemovedControlCharacters = word.toUpperCase().replace('[', '').replace(']', '')
        return tripleWordRemovedControlCharacters + tripleWordRemovedControlCharacters + tripleWordRemovedControlCharacters
    }
    if(word.indexOf('{') !== -1) {
        const position = word.indexOf('{') + 1
        let letterToMultiply = word.slice(position, position + 1)
        letterToMultiply += letterToMultiply
        let expandedWord = [word.slice(0, position), letterToMultiply, word.slice(position)].join('');
        return expandedWord.toUpperCase().replace('{', '').replace('}', '')
    }
    if(word.indexOf('[') !== -1) {
        const position = word.indexOf('[') + 1
        let letterToMultiply = word.slice(position, position + 1)
        letterToMultiply = letterToMultiply + letterToMultiply + letterToMultiply
        let expandedWord = [word.slice(0, position), letterToMultiply, word.slice(position)].join('');
        return expandedWord.toUpperCase().replace('[', '').replace(']', '')
    }
    return word
}

module.exports = scrabble
