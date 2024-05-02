# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge

```
1.english 
.input = "string"
.Output= valueOfLetter

2. function of scrabble contains 7 object with arrays of property letters and and those letter have values of numbers if you give variable of 'A' it returns 1 and else false 
and  i will do all seven object 
after getting the values of strings make sum and return sum.

for loop to search and value of a character and if it finds the character return the value of string```

function = scrabble, takes = string
repeat until i is greater or equal to string.length, increase i by 1 every time this is run (
    add to array: i'th character of the string
)
repeat for the length of the array (
    if index i is one of A, E, I, O, U, L, N, R, S, T: add 1 point to the total
    if index i is one of D, G: add 2 points to the total
    if index i is one of B, C, M, P: add 3 points to the total
    if index i is one of K: add 5 points to the total
    if index i is one of J, X: add 8 points to the total
    if index i is one of Q, Z: add 10 points to the total
    go to next index
)
return total

3.

...etc
```
