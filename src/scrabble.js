function scrabble(word) {
  // initiate the variable scrabbleScore. It will keep track of the scores obtained for each letter as we iterate through the word - need to use let and not const as its value will be reassigned with each iteration of the for loop
  let scrabbleScore = 0
  // if the word is an empty string, return 0 points (and do not bother running the rest of the code)
  if (word === null) {
    return scrabbleScore
  }
  // if the word it not all in lowercase, some if statements will fail. Therefore, we need .toLowerCase()
  const lowerCaseWord = word.toLowerCase()
  // iterate through the word (could use an for loop, could try to use .forEach() provided it works on strings - need to check)
  // check each individual letter against the various if criterias below
  for (let i = 0; i < word.length; i++) {
    // if the letter is A, E, I, O, U, L, N, R, S, or T, value = 1
    if (
      lowerCaseWord[i] === 'a' ||
      lowerCaseWord[i] === 'e' ||
      lowerCaseWord[i] === 'i' ||
      lowerCaseWord[i] === 'o' ||
      lowerCaseWord[i] === 'u' ||
      lowerCaseWord[i] === 'l' ||
      lowerCaseWord[i] === 'n' ||
      lowerCaseWord[i] === 'r' ||
      lowerCaseWord[i] === 's' ||
      lowerCaseWord[i] === 't'
    ) {
      scrabbleScore += 1
    }
    // if the letter is D or G value = 2
    if (lowerCaseWord[i] === 'd' || lowerCaseWord[i] === 'g') {
      scrabbleScore += 2
    }
    // if the letter is B, C, M, P, value = 3
    if (
      lowerCaseWord[i] === 'b' ||
      lowerCaseWord[i] === 'c' ||
      lowerCaseWord[i] === 'm' ||
      lowerCaseWord[i] === 'p'
    ) {
      scrabbleScore += 3
    }
    // if the letter is F, H, V, W, Y, value = 4
    if (
      lowerCaseWord[i] === 'f' ||
      lowerCaseWord[i] === 'h' ||
      lowerCaseWord[i] === 'v' ||
      lowerCaseWord[i] === 'w' ||
      lowerCaseWord[i] === 'y'
    ) {
      scrabbleScore += 4
    }
    // if the letter is K, value = 5
    if (lowerCaseWord[i] === 'k') {
      scrabbleScore += 5
    }
    // if the letter is J or X, value = 8
    if (lowerCaseWord[i] === 'j' || lowerCaseWord[i] === 'x') {
      scrabbleScore += 8
    }
    // if the letter is Q or Z, value = 10
    if (lowerCaseWord[i] === 'q' || lowerCaseWord[i] === 'z') {
      scrabbleScore += 10
    }
  }
  return scrabbleScore
}

// not sure if this is the most elegant solution, but it seems to be a solution

module.exports = scrabble
