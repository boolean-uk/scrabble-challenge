# Scrabble challenge pseudocode

## Inputs

- string, or
- null

## Steps

### Step 1

Map out letters and points value in an object outside of the scrabble function to make sure it's a global variable

### Step 2

Go inside the scrabble function

### Step 3

Create guard condition for null

- If input equals null
- Return the number 0

### Step 4

Create initial points tally at 0 with a new variable equalling the number zero. We will keep adding points to this throughout the function.

### Step 5

Convert the input string into something we can iterate on better.

- Convert the input word to uppercase to make sure we are ok with capitalization
- Update our letters and points value object in step 1 to capital letters
- Split the word to a new array

### Step 6

Iterate through all the elements of the array with a for loop

- Try to use the for...of magic from python and see if it works

### Step 7

Inside the for loop, create a function that awards points for each letter by incrementing our empty points tally variable created on [Step 4].

- Inside the function we take one letter at a time
- We create a new variable that takes the value from the object created in step one
- We create a default value of 0 with the || condition when assigning the value to the new variable
- Then we return the varible

### Step 8

TODO: we do some extra magic for the extensions

### Step 9 

We return the points tally
