Plain English Description - Core
======

Create a function that when given a word is able to split those into indivdual characters, compare that against a score list, create a total of those numbers and finally return that total.
For example baggage would be split and give the values of: 3, 1, 2, 2, 1, 2 and 1 which would then total to 12 which would then be returned.

Plain English Description - Extension
------

**1.** Check if the argument contains {} or [] around certain characters, if they do, double or triple (respectively) the value of those characters, and add tests in the spec file to check this.

**2.** Similarly to the first step, check if the entire word is within brackets to also double/triple the value of the entire string, and once again add tests in the spec file for these.

**3.** Split the function into multiple smaller functions, possibly to help increase readability using [this](https://github.com/ryanmcdermott/clean-code-javascript#functions)
