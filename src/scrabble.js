'use strict';

const letterValues = {
  a: 1, e: 1, i: 1, o: 1, u: 1,
  l: 1, n: 1, r: 1, s: 1, t: 1,
  d: 2, g: 2,
  b: 3, c: 3, m: 3, p: 3,
  f: 4, h: 4, v: 4, w: 4, y: 4,
  k: 5,
  j: 8, x: 8,
  q: 10, z: 10
};

function calculateWordScore(generatedWord) {
  const lowerCaseString = generatedWord.toLowerCase();
  let eachWordScore = 0;

  for (let i = 0; i < lowerCaseString.length; i++) {
    const letterScore = letterValues[lowerCaseString[i]];
    if (letterScore >= 1) eachWordScore += letterScore;
  }

  return eachWordScore;
}

function isDoubleWord(generatedWord) {
  return (generatedWord[0] === '{' && generatedWord[generatedWord.length - 1] === '}');
}

function isTripleWord(generatedWord) {
  return (generatedWord[0] === '[' && generatedWord[generatedWord.length - 1] === ']');
}

function isDoubleAndTripleWord(generatedWord) {
  const start = generatedWord[0];
  const end = generatedWord[generatedWord.length - 1];

  return (
    (start === '{' && end === '}' && generatedWord[1] === '[' && generatedWord[generatedWord.length - 2] === ']') ||
    (start === '[' && end === ']' && generatedWord[1] === '{' && generatedWord[generatedWord.length - 2] === '}')
  );
}

function hasEndLetterMultipliers(generatedWord) {
  const start = generatedWord[0];
  const end = generatedWord[generatedWord.length - 1];

  return (
    (start === '{' && generatedWord[2] === '}' && end === '{' && generatedWord[generatedWord.length - 2] === '}') ||
    (start === '[' && generatedWord[2] === ']' && end === '[' && generatedWord[generatedWord.length - 2] === ']') ||
    (start === '[' && generatedWord[2] === ']' && end === '{' && generatedWord[generatedWord.length - 2] === '}') ||
    (start === '{' && generatedWord[2] === '}' && end === '[' && generatedWord[generatedWord.length - 2] === ']')
  );
}

function calculateWordMultiplier(generatedWord) {
  if (isDoubleWord(generatedWord)) return 2;
  if (isTripleWord(generatedWord)) return 3;
  if (isDoubleAndTripleWord(generatedWord)) return 6;
  if (hasEndLetterMultipliers(generatedWord)) return 1;

  return 1;
}

function calculateLetterMultiplier(generatedWord) {
  let additionalLetterScore = 0;
  const lowerCaseString = generatedWord.toLowerCase();

  for (let i = 0; i < generatedWord.length; i++) {
    if (generatedWord[i] === '{' && generatedWord[i + 2] === '}') {
      additionalLetterScore += letterValues[lowerCaseString[i + 1]];
    }
  }

  for (let i = 0; i < generatedWord.length; i++) {
    if (generatedWord[i] === '[' && generatedWord[i + 2] === ']') {
      additionalLetterScore += letterValues[lowerCaseString[i + 1]] * 2;
    }
  }

  return additionalLetterScore;
}

function hasIncompleteBrackets(generatedWord) {
  let flowerBracketOpen = 0;
  let flowerBracketClosed = 0;
  let squareBracketOpen = 0;
  let squareBracketClosed = 0;

  for (let i = 0; i < generatedWord.length; i++) {
    if (generatedWord[i] === '{') flowerBracketOpen += 1;
    if (generatedWord[i] === '}') flowerBracketClosed += 1;
    if (generatedWord[i] === '[') squareBracketOpen += 1;
    if (generatedWord[i] === ']') squareBracketClosed += 1;
  }

  return (flowerBracketOpen !== flowerBracketClosed) || (squareBracketOpen !== squareBracketClosed);
}

function hasInvalidCharacters(generatedWord) {
  const lowerCaseString = generatedWord.toLowerCase();
  return /[^[\]{}a-z]/g.test(lowerCaseString);
}

function isWordInvalid(generatedWord) {
  return hasIncompleteBrackets(generatedWord) || hasInvalidCharacters(generatedWord);
}

function scrabble(generatedWord) {
  if (generatedWord === null) return 0;

  let combinedScore = calculateWordScore(generatedWord);
  combinedScore += calculateLetterMultiplier(generatedWord);
  combinedScore *= calculateWordMultiplier(generatedWord);

  if (isWordInvalid(generatedWord)) return 0;
  else return combinedScore;
}

module.exports = scrabble;
 