# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge

```
1.
array = ["A1", "B3", "C3", "D2", ...(letterpointsformat)]

points = 0

2.
function scrabble(word given){
    for (every char in word.length) {
        let charx = char.toUpperCase()
        for (find charx in the array){
            //if characters match then add the int that is found next to the letter. eg. 'A1' (a adds 1 point)
            points += array[i].charAt(1)
            break
        }
    }

    return points
}

3. at the start of the function add if statement that checks if word is null-empty-whitespace and returns 0
