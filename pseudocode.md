# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge

```
1.Mapping of letters to their Scrabble values

2.Define a function called scrabble(word) that takes a string as an argument.

3.Loop over each character in the word.
 a. Check if the character is "{"
  -set letter modifier 2 (double letter score )
  -increment the index to point to the nexr character
  -get the letter at the current index
  - Increment score 
  -Increment index to skip to the closing brace "}"
 b. Check if the character is "["
 set letter modifier 3 (triple letter score )
  -increment the index to point to the next character
  -get the letter at the current index
  - Increment score 
  -Increment index to skip to the closing brace "]"
c.Check if the character is "(":
-Set word_multiplier to 2.
d.Check if the character is "<":
-Set word_multiplier to 3.
e. Otherwise add the regular letter score

4.Return the total score multiplied by the world multiplier:
return score * word_multiplier
5. call the function scrabble

...etc
```
