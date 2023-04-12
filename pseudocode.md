# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge

```
1.
the enterd value should be .lowercase so there is no conflict if the enterd value is in capital letters 

const scrabbleLowercase = ''
givenString.lowercase = scrabbleLowercase
2.
the code should loop through the given string and at each position it should check what letter it is, first the letters with 1 point then 2 points etc then if the letter is included it should add the amount of points to a counter

this by having an array with each letters for the different amount of points

const point1Letters = ['a', 'e', etc]
const point2Letters = ['d', 'g']
etc

now the loop can check if each letter is included per array

for (let i =0; i < givenString.length; i++){
    if (point1Letters.includes givenstring[i] ){
        counter++
    } else if (point2Letters.includes givenstring[i] ){
        counter + 2
    } etc
}

3.

if the givenString = undifined or null the function should return 0

if (givenLetters === undefined || givenLetters === null) {
    return 0
}

Extensions
4. double or tripple letter
if the code encounters an '{' it should check if there is a } in the given letters
and then double the worth of those letters

