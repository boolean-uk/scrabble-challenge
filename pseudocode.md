# Pseudocode

Add the steps you need to take to implement the requirements for Scrabble Challenge

## 1. Making function `findWordScore`

- [x] Object `letterScores` detailing values of each letter eg:
  - `{ A: 1, B: 3, C: 3, ... Z: 10}`

- [ ] Function `findLetterScore`
  - [ ] Parameter: (`a`)
  - [ ] Uppercase the input
    - [ ] Guard clause:
      - [ ] if Uppercased character is not in `letterScores`, throw an error and highlight the offending character
  - [ ] Reference uppercased input in `letterScores`
  - [ ] Return: `1`
- [x] Function `tallyScore`
  - [x] Parameter: (`[1, 3, 3]`)
  - [x] `Array.reduce()` looks to sum an array of numbers
  - [x] Return: `7`
- [x] Function `stringToArray`
  - [x] Parameter: (`abc`)
  - [x] `String.split('')` will separate a string into an array with each character being a separate element in the array:
  - [x] Return: `['a', 'b', 'c']`
- [ ] Function ~~`findWordScore`~~ `scrabble`
  - [ ] Parameter: (`abc`)
  - [x] Guard clause:
    - [x] input is of type string
  - [x] Convert String to stringArray using `stringToArray`
    - [x] `['a', 'b', 'c']`
  - [ ] Invoke `.map()` on stringArray using `findLetterScore` to create numArray
    - [ ] `[1, 2, 3]`
  - [ ] Parse numArray into `tallyScore` to return totalScore
    - [ ] `7`
  - [ ] Return: `7`

## 2. Extensions

### `findLetterScore` will need to be refactored

- [x] const `MULTIPLE`, defaulted to `1`
- [x] Object `scoreMultiplier` detailing what the score multiplier should be set to:

```js
  {
    {: 2,
    }: 1,
    [: 3,
    ]: 1
  }
```

- [ ] Function `findLetterScore`
- [ ] Add Guard Clause
  - [ ] Check to see if input is a key found in `scoreMultiplier`
- [x] Function `scoreMultiplicatorizer`
  - [x] Parameter: `[` OR `a`
  - [x] If input is a key found in `scoreMultiplier`
    - [x] set `MULTIPLE` to matching value
  - [x] Else keep `MULTIPLE` the same

Changes above should pass both extensions
