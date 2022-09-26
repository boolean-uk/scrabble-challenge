# Pseudocode

INPUT - word
OUTPUT - score

1. Create const object scoreTable to store letters and values

2. Build my function with one parameter - word
3. Set a new variable upperCasedString to hold word capitalised and splits it into array.

4. Loop thouth the upperCasedString and return points into a new variable totalPoints with =+. totalPoints declared as let and set to 0.

5. Add conditions if character not in scoreTable object,score it at 0.

6. return totalPoints

Extension
Double points Word function

1. Create a function with same parameter word.
2. Add condition if first charachter in the word is '{' and the last charachter is '}' return scrabble() times 2
3. otherwise leave points as is in scrabble function.

Tripple points Word function
Absolutly same princible, just checking for [] and if true return scrabble times 3.
