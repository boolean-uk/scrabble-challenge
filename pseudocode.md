# Pseudocode

#### Add the steps you need to take to implement the requirements for Scrabble Challenge

```
1.
function scrabble(word),
Declares a function named scrabble that accepts one parameter, word, which is expected to be a string representing the word for which the score is to be calculated
2.
if (!word || !word.trim()) { return 0; } 
checks if the input word is either not provided (null or undefined), empty, or contains only whitespace. If any of these conditions are true, the function returns a score of 0 immediately. 
3.
The scores constant is an object that serves as a dictionary, mapping each uppercase letter to its corresponding Scrabble score. This includes:
A score of 1 for common letters like A, E, I, etc.

4.
for (let char of word.trim().toUpperCase()) { ... } uses a for...of loop to iterate over each character in the word after trimming any leading/trailing whitespace and converting it to uppercase (to match the keys in the scores dictionary).

5.
if (scores[char]) { total_score += scores[char]; } inside the loop, the function checks if the current character (char) exists in the scores dictionary. If it does, the value associated with that key in the dictionary is added to total_score. This step ensures that only valid Scrabble letters contribute to the score and ignores any other characters (like punctuation or numbers).

6.

'return total_score;' concludes the function by returning the accumulated score for the word. 


