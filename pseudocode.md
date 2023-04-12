# Pseudocode

### For core exercise

1. Write a function which gets an input from parameters.

2. Check the input is correct and if not will return 0.

3. Then in a loop I will pass each letter in the inputted word and calculate the score which will be added to a sum. Based on the following table :

    | Letter                        | Value  |
    | ----                          |  ----  |
    | A, E, I, O, U, L, N, R, S, T  |     1  |
    | D, G                          |     2  |
    | B, C, M, P                    |     3  |
    | F, H, V, W, Y                 |     4  |
    | K                             |     5  |
    | J, X                          |     8  |
    | Q, Z                          |     10 |

4. And lastly I will print a message with the word and how much it scored.

### For extension

Comments: Apparently my regex aprouch actually makes the extension to be lot more diffuclt so I reimplemented the program to something maybe.. more expandable(?).

How I imlpemented regex for the core:

```js
const inputRegex = /[^a-zA-Z]/g
const letterValue1 = /[a,e,i,o,u,l,n,r,s,t]/i
const letterValue2 = /[d,g]/i
const letterValue3 = /[b,c,m,p]/i
const letterValue4 = /[f,h,v,w,y]/i
const letterValue5 = /[k]/i
const letterValue8 = /[j,x]/i
const letterValue10 = /[q,z]/i

function scrabble(word) {
  let sum = 0

  if (word === null) {
    return 0
  } else if (inputRegex.test(word)) {
    return 0
  } else {
    for (let i = 0; i < word.length; i++) {
      if (letterValue1.test(word[i])) {
        sum += 1
      } else if (letterValue2.test(word[i])) {
        sum += 2
      } else if (letterValue3.test(word[i])) {
        sum += 3
      } else if (letterValue4.test(word[i])) {
        sum += 4
      } else if (letterValue5.test(word[i])) {
        sum += 5
      } else if (letterValue8.test(word[i])) {
        sum += 8
      } else if (letterValue10.test(word[i])) {
        sum += 10
      }
    }

    // return 'Word: "' + word + '" scores: ' + sum
    return sum
  }
}

// console.log(scrabble('cabbage'))

module.exports = scrabble
```

1. Break each step to different function, first checkInput() to check for wrong inputs.
2. Then it's easy to check if the word will score double or triple score with doubleTripleWord() function and return the value of the multiplier.
3. Then I will clear the input of any outer symbols if it has a multiplier.
4. 