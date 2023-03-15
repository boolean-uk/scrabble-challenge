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
