Initial Work flow:

Calculate value of all valid characters in string
   Variable object that includes key values pairings of "letter: score"
   Function that uses a for loop to find the value of just the letters
   Use if statement to check if each character exists within letter value object

Check for double, triple or six times word score
   One function for each check
   Compare first and last character for double/triple word score. {} for double, [] for triple
   Compare 1st, 2nd, last and last-1 character for six times word score
   Write to a word multiplier variable depending on which function is true

Check for double & triple letter scores
   Use a for loop
   Check for {} or [] and the i and i+2 positions (i.e. brackets with one character in between)
   For double {} add letter value again
   For [] add letter value * 2
   Write result to double/triple letter variable

Scrabble function
   Check for null entries and exit at that point if found
   Add base score variable, double/triple letter variable and multiply by word multiplier variable

Invalid strings:

Check for incomplete brackets
   Count number of curly and square brackets, should be multiple of 2 if valid

Check for invalid characters
   Use regex to check string using test function
   Needs to fail if it detects anything other than {}, [], or letters

Record result
   Check in scrabble function if either of these functions fail