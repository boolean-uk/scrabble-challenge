# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge

TO MEET THE EXTENDED CRITERIA

Miscelleanous
```
I'd probably be better of storing the letters in arrays (one for each score that can be obtained), and use that, rather than writing lengthy if statements
```

Double and Triple Letter
```
0. take in a word as a parameter and iterate through it
1. find {} or [] if they are included in word
2. if {} is found, double the letterScore
3. if [] is found, triple the letterScore
4. return these values
5. add them to to the scores obtained for the rest of the word 
6. return wordScore
```
```
function scrabble (word) {
  // takes in a string, iterates through it, iterates through the arrays of letters, finds the letterScore for each letter within word, adds them to the wordScore variable, and returns wordScore
}
function detectCurlyBraces() {
  // iterates through a string, and, if it detects curly braces, returns the letters contained within
}

function detectBrackets() {
  // iterates through a string, and, if it detects brackets, returns the letters contained within
}

function doubleScore() {
  // takes in the letters extracted by detectCurlyBraces, and returns letterValue * 2
}

function tripleScore() {
  // takes in the letters extracted by detectCurlyBraces, and returns letterValue * 3
}
```

```
0. take in a word as a parameter and iterate through it
1. find {} or [] if they are included in word
2. if {} is found, double the wordScore
3. if [] is found, triple the wordScore
6. return wordScore
```
Concise Code
```
```
