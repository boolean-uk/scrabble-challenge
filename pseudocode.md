# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge


### with extension

```ps
Declare variable currentMulti
Declare variable isValid
Declare variable curlyBracketCounter
Declare variable squareBracketCounter
Declare constant letterValues as an object with key-value pairs
Declare constant brackets as an array of strings

Function scrabble with parameter givenString
    If givenString is falsy, return 0
    Set currentMulti to 1
    Set isValid to true
    Set curlyBracketCounter to 0
    Set squareBracketCounter to 0
    Set score to 0

    For each character in givenString
        Convert the character to uppercase and assign it to the variable letter

        If letter is included in the brackets array, call the calculateMultiplier function with letter as the argument
        Call the checkValidity function with letter as the argument

        If isValid is falsy, return 0

        If letterValues object has a property with a key of letter, add letterValues[letter] multiplied by currentMulti to the score variable

    If curlyBracketCounter is greater than 0 or squareBracketCounter is greater than 0, return 0

    Return the score variable

Function calculateMultiplier with parameter letter
    If letter is '{', multiply currentMulti by 2 and increment curlyBracketCounter
    Else If letter is '[', multiply currentMulti by 3 and increment squareBracketCounter
    Else If letter is '}', and curlyBracketCounter is 0, set isValid to false
    Else If letter is '}', divide currentMulti by 2 and decrement curlyBracketCounter
    Else If letter is ']', and squareBracketCounter is 0, set isValid to false
    Else If letter is ']', divide currentMulti by 3 and decrement squareBracketCounter

Function checkValidity with parameter letter
    If letter is included in the brackets array or letterValues object has a property with a key of letter, and isValid is truth, set isValid to true
    Else, set isValid to false
```
