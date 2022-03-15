// PSEUDO CODE
// 1. You want an object and arrays inside it with all the given letters/alphabets with their own scores.
// 2. A class, constructor and this.word
// 3. You want 2 or 3 paragraphs about if not a string (!= this.word), (this.word = ('\t) || this.word = ('/n)). For all of these 3 return 0.
// 4. A loop that generates all the letters/alphabets
// 5. return a number based on what happened inside the loop. So return += score.

const letters = {
    value1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    value2 = ["D", "G"];
    value3 = ["B", "C", "M", "P"];
    value4 = ["F", "H", "V", "W", "Y"];
    value5 = ["K"];
    value8 = ["J", "X"];
    value10 = ["Q", "Z"];
}

class Scrabble {
    constructor (word) {
        this.word = word;
    }

    score () {

    if (!= this.word)
    return 0

    if (this.word = ('\t' || this.word = ('/n'))) 
    return 0

    for (let i = 0; i < this.word; i++)
    this.word[i];

    score += letters;
}
}


