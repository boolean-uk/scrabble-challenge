# Pseudocode

## First Step - function valueOfLetter(char)

``` language
1. Create a function that calculates the value of the
   letter 
2. The function will have a parameter of 1 letter string
   type
3. The parameter needs to be reassigned to itself in 
   uppercase and use charAt(0) just incase more letters
   were included as argument
4. the character will also have an array with with arrays 
   of letters each group of letters. The index of the array
   will represent the points of the letters of the array in
   that index. Some indexes will have an empty array
5. Iterate through the array
6. Using a control flow willl check if the above arrays
   include the letter 
   and if they do, the function will return the appropriate points (it may
   also be a result variable)
6. In case of an innapropriate input will return 0
```

## Second Step - function valueOfWord(word)

``` language
1. Will have a scabble word as a parameter.
2. Will have a value variable initialized as 0
3. Will iterate through each letter of the word and call
   the function
   valueOfLetter for each letter.
4. There might be a need to check if it is an accepted
   letter-word
5. Increment the value variable by the return of the
   valueOflLetter function

```

## Third Step - Extended Criteria

### Writing down thoughts

``` language
1.   So I must check if a string starts contains one of the 
     characters "{[" and check if there is the appropriate 
     closingcharacter "]}" after 2 indexes.
2.   If that is true, then multiply the value returned from 
     valueOfLetter() by the corresponding value. 
2.1. Do I need to remove the chars "{[]}" or can I pass them
     in the function too? What Is better down the road?
3.   Can I add some functionality in a function to reuse it in
     the next step? I will start by writing and then refactor it.
```

### multiplyLetterValue

``` language


```
