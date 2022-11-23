PLAIN ENGLISH OF THE PROBLEM

Given a word (in string format!) calculate the value the whole word would give in a game of Scrabble

PSUEDOCODE

(NOTE: I may make arrays for all the letters as opposed to having so many OR arguments in the if statements. If I do then the below if statements will check if the letter is contained in the associated arrays)

function that takes a letter and returns the value of it
    let value equal zero
    change letter to upper case or lower case (depends on how I type the letters in the if statements, probably going with upper case just like Scrabble)
    if letter is A, E, I, O, U, L, N, R, S, T
        return value equals 1
    else if letter is D or G
        return value equals 2
    else if letter is B, C, M, P
        return value equals 3
    else if letter is F, H, V, W, Y
        return value equals 4
    else if letter is K
        return value equals 5
    else if letter is J or X
        return value equals 8
    else if letter is Q or Z
        return value equals 10
    else
        return


function that takes a string and returns the total score for it
    let score equal zero
    if statement that checks if the input is a string
        if it's not it should return 0
    for loop  
        takes the index of the string and runs the first function to give the value of each index of the string
        add value to score
    return score