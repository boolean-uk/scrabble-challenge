/**
 * Functions Needed
 *  Convert string to lower case to remove case variants
 *  Check if entered word is a string
 *  --> check in base scrabble function, exit if not a string
 *  Calculate base score for string
 *  --> for loop, count up through word and total values as you go
 *  --> use a variable > 0 to just count letters that exist in our declared list
 *  Check if double word, triple word or both
 *  --> double or triple
 *      --> check first and last characters for {} or []
 *  --> double and triple
 *      --> check first/last and first+1/last-1 for {} and []
    --> pass function = true if conditions met
    --> depending on true states, assign a value to a multiplier
 *  Check for double & triple letters
 *  --> Search string for {} or []
 *  --> Write additional points to a variable
 *  Check for incompleted sets of brackets within string
 *  --> for loop to check for odd number of brackets
 *  Check if any non-letter or bracket characters are within string
 *  --> regex
 * 
 *  BREAK EACH LITTLE STEP DOWN IN TO ITS OWN FUNCTION FO
* R CLARITY OF CODE
 */