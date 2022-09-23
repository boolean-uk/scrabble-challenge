Pseudocode - Core
======

**1.** Create an array that stores each letter with a value, for example: a, e, i, o u: 1

**2.** Create a function that allows a string input

**3.** If the input isn't a string return 0, can use if statement or || 0

**4.** Split the string into indivdual characters and force every instance to be lowercase

**5.** Use a forEach to reassign the characters based on the values array, return 0 if a character isn't a letter for example: '@'

**6.** Total the values and return said total

Pseudocode - Extensions
------

Extension 1:

**1.** Before the letters are split - before step 4 in core - check if there's brackets - be it {} or [] - within the string

**2.** Store the letters that were within the brackets as a separate array

**3.** Multiply the separated letter's values by 2/3 before adding them to the total, and returning the total once both the original and core values are totaled

Extension 2:

**1.** Check if either brackets are at the start and end of the string **NOTE:** Need to change testing on line 13 and 26, as it checks if brackets are at the start and end, then ignores the string if so, code likely needs merging with this

**2.** Check if there are brackets embedded in the string too, if so run ext. 1

**3.** If the criteria in step 1 is correct, then double/triple the values assigned from the values array

**4.** Sum the values from step 2 and 3, then return total
