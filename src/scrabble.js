function hasInvalidMultiplier(word) {
  // creating variables to count how many brackets are in the word string:
  let openingBraceCount = 0
  let closingBraceCount = 0
  let openingSquareCount = 0
  let closingSquareCount = 0
  // looping through the letters and adding to the count if it finds one:
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '{') {
      openingBraceCount++
    }
    if (word[i] === ']') {
      closingBraceCount++
    }
    if (word[i] === '[') {
      openingSquareCount++
    }
    if (word[i] === ']') {
      closingSquareCount++
    }
  }
  // vhecking if total number of each brackets are the same:
  if (
    openingBraceCount === closingBraceCount &&
    openingSquareCount === closingSquareCount
  ) {
    return false
  } else {
    return true
  }
}
function scrabble(word) {
  // if word is null, return 0:
  if (word === null) {
    return 0
  }
  // declare our letter values:
  const letterValues = {
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
  // if the string has a invalid multiplier, return 0:
  if (hasInvalidMultiplier(word)) {
    return 0
  }
  // using regex to check if it has the right characters only, then finishes. from beginning to the end:
  if (!/^[a-zA-Z{}[\]]*$/g.test(word)) {
    return 0
  }
  // using regular expression (regex), to put everything inside an array: (results into a array.)
  let letterMultipliersArray2 = word.match(/{([a-zA-Z])}/g)
  console.log(letterMultipliersArray2)
  // checking if the variable is an array, if it is use .map to change it to the capture group (capture group removes the brackets from the results:)
  if (Array.isArray(letterMultipliersArray2)) {
    letterMultipliersArray2 = letterMultipliersArray2.map((match) => match[1])
  }
  // same as above, but for *3 instead of *2:
  let letterMultipliersArray3 = word.match(/\[([a-zA-Z])\]/g)
  // same as line 63:
  if (Array.isArray(letterMultipliersArray3)) {
    letterMultipliersArray3 = letterMultipliersArray3.map((match) => match[1])
  }
  console.log(letterMultipliersArray3)
  // creating a variable, that makes everything in the string .toLowerCase:
  const lowercaseWord = word ? word.toLowerCase() : ''

  let score = 0
  // created a loop to go through each charecter of the string:
  for (let i = 0; i < lowercaseWord.length; i++) {
    const letter = lowercaseWord[i]
    let letterScore = letterValues[letter] || 0

    // checking if variable is an array & checking if it includes the letter we are looping through, then * our letterScore (score for the individual letter) by 2:
    if (
      Array.isArray(letterMultipliersArray2) &&
      letterMultipliersArray2.includes(letter)
    ) {
      letterScore *= 2
    }

    // same as line 83, just for *3:
    if (
      Array.isArray(letterMultipliersArray3) &&
      letterMultipliersArray3.includes(letter)
    ) {
      letterScore *= 3
    }
    // adding letter score onto score:
    score += letterScore
  }
  // checking if the string starts with an open { bracket, includes a closing } bracket. Checking if the first closing bracket isn't at the end. If all are true, then return the score without calculating the word multipliers:
  if (
    word.startsWith('{') &&
    word.includes('}') &&
    word.indexOf('}') !== word.length - 1
  ) {
    return score
  }
  // we are stripping the {} out of the string using .replace, the same for the next variable also:
  const wordWithoutCurlyB = word.replace(/{|}/g, '')
  const wordWithoutArrayB = word.replace(/\[|\]/g, '')
  // checking if the variable starts and ends with {}, if it does. times the entire score *2:
  if (wordWithoutArrayB.startsWith('{') && wordWithoutArrayB.endsWith('}')) {
    score *= 2
  }
  // checking if the variable starts and ends with [], if it does. times the entire score *3:
  if (wordWithoutCurlyB.startsWith('[') && wordWithoutCurlyB.endsWith(']')) {
    score *= 3
  }

  return score
}

module.exports = scrabble
