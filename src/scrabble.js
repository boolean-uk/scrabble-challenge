function scrabble(word) {
  // initiate the variable scrabbleScore. It will keep track of the scores obtained for each letter as we iterate through the word
  let scrabbleScore = 0
  // iterate through the word (could use an for loop, could try to use .forEach() provided it works on strings - need to check)
  // if the word is an empty string, return 0 points (and do not bother running the rest of the code)
  if (word === null) {
    return 0
  }
  for (let i = 0; i < word.length; i++) { 
    // check each individual letter against the various if criterias below
    // if the letter is A, E, I, O, U, L, N, R, S, or T, value = 1
    if (
      word[i] === 'a' ||
      word[i] === 'e' ||
      word[i] === 'i' ||
      word[i] === 'o' ||
      word[i] === 'u' ||
      word[i] === 'l' ||
      word[i] === 'r' ||
      word[i] === 's' ||
      word[i] === 't'
    ) {
      scrabbleScore += 1
    }
    // if the letter is D or G value = 2
    if (word[i] === 'd' || word[i] === 'g') {
      scrabbleScore += 2
    }
    // if the letter is B, C, M, P, value = 3
    if (
      word[i] === 'b' ||
      word[i] === 'c' ||
      word[i] === 'm' ||
      word[i] === 'p'
    ) {
      scrabbleScore += 3
    }
    // if the letter is F, H, V, W, Y, value = 4
    if (
      word[i] === 'f' ||
      word[i] === 'h' ||
      word[i] === 'v' ||
      word[i] === 'w' ||
      word[i] === 'y'
    ) {
      scrabbleScore += 4
    }
    // if the letter is K, value = 5
    if (word[i] === 'k') {
      scrabbleScore += 5
    }
    // if the letter is J or X, value = 8
    if (word[i] === 'j' || word[i] === 'x') {
      scrabbleScore += 8
    }
    // if the letter is Q or Z, value = 10
    if (word[i] === 'q' || word[i] === 'z') {
      scrabbleScore += 10
    }
  }
  return scrabbleScore
}

module.exports = scrabble
