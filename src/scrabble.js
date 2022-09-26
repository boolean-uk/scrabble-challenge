function scrabble(word) {
  //  Declare an object that shows all letters and their assigned numerical values.
  const alphabet = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
  }
  // #2 Write a guard function that will return the value '0' when input is null/not a previously stated character.

  if (word == null || undefined) {
    return 0
  }

  let sum = 0
  let i = 0

  // #3 Create a variable that will contain the declared word and;
  //  -put all characters in lower case
  //  -divide it into an array.
  word = word.toLowerCase()

  // #4 Use a for loop to go through the array, and assign each item its assigned numerical value.
  for (i = 0; i < word.length; i++) {
    // #5 Calculate the sum of all items in array or return 0 if it is empty.
    sum += alphabet[word[i]] || 0
  }
  // #5 Return the sum of items in the array.
  return sum
}

module.exports = scrabble
