Given a word, compute the scrabble score for that word.

##### Letter Values

You'll need these:

| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

--- Plain English ---

1 - have the scores for different letters stored
2 - read a given word as a sequence of letters
3 - compare each letter with its score
4 - sum the scores assigned for each letter
5 - output the score for the given word

--- Pseudo Code ---

1 - have the scores for different letters stored
    --> some form of array for letters and scores
        --> separate by score? valueOne = [A, E, I ...]

2 - read a given word as a sequence of letters
    a --> could split string into array of letters
        --> loop through array and convert letter into number score

3 - loop through the array of givenLetters
    --> for loop that looks at each letter

4 - compare each letter with its score
    --> lots of if statements?
        --> comparing stored point value with given word
           if (givenLetter is in onePoint - add 1 to score)
              if (givenLetter is in twoPoint - add 2 to score)
                  etc...

5 - sum the scores assigned for each letter
    --> += the assigned scores as it finds them

6 - output the score for the given word
    --> return the final score for word
        --> string interpolate the word and its score:
            (`the word ${given} scores ${returned score} points!)


## Extended Acceptance Criteria

For some of the extended criteria, you may need to look up functions and techniques you have not used before.

### Double and Triple Letter
Your solution should support the ability to define specific letters as double and triple score. Letters that count as double are enclosed in a pair of curly brackets `{}` - for example, the letter `o` would be defined as a double letter in in the word dog like this: `d{o}g`. Triple letters are enclosed in a set of square brackets - for example: `d[o]g`. Your solution should detect these brackets and apply the correct score modifications. You should add tests for this functionality to the spec file.

### Double or Triple Word
Similar to above, your solution should support the ability to define double and triple word scores. To indicate a double word score, the submitted word will be enclose in a pair of curly brackets (for example `{dog}`), and for triple word score a pair of square brackets (`[dog]`). Your solution should detect these brackets and apply the correct score modifications. You should add tests for this functionality to the spec file.

--- Plain English ---

1 - if there is a double word score declared, double the score output
2 - if there is a triple word score declared, triple the score output
3 - if there is a double letter score declared, double the associated letter score
4 - if there is a triple letter score declared, triple the associated letter score

--- Pseudo Code ---

1 - a function that will multiply 1x, 2x or 3x
    --> will recieve with a letter or word score and output the mofified value

2 - if there is a double word score declared, double the score output
    --> double word recognise start { && end }

3 - if there is a triple word score declared, triple the score output
    --> triple word recognise start [ && end ] 

4 - if there is a double letter score declared, double the associated letter score
    --> check each letter for {} 
        --> ensure open and closed included

5 - if there is a triple letter score declared, triple the associated letter score
   --> check each letter for [] 
        --> ensure open and closed included