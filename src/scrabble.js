function scrabble(givenLetters) {
  if (givenLetters === undefined || givenLetters === null) {
    return 0
  } else {
    let letters = givenLetters.toLowerCase()
    let slicedLetters = ''
    let counter = 0
    let wordMultiplier = 1
    const point1Letters = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
    const point2Letters = ['d', 'g']
    const point3Letters = ['b', 'c', 'm', 'p']
    const point4Letters = ['f', 'h', 'v', 'w', 'y']
    const point5Letters = ['k']
    const point8Letters = ['j', 'x']
    const point10Letters = ['q', 'z']
// wordmultiplier
    if (
      letters[0] === '{' &&
      letters[letters.length - 1] === '}' &&
      letters[2] !== '}'
    ) {
      wordMultiplier = 2
      slicedLetters = letters.slice(1, -1)
      console.log(slicedLetters)
      if (
        slicedLetters[0] === '[' &&
        slicedLetters[slicedLetters.length - 1] === ']' &&
        slicedLetters[2] !== ']'
      ) {
        wordMultiplier = wordMultiplier * 3
        slicedLetters = slicedLetters.slice(1, -1)
        console.log(slicedLetters)
      }
    } else if (
      letters[0] === '[' &&
      letters[letters.length - 1] === ']' &&
      letters[2] !== ']'
    ) {
      wordMultiplier = 3
      slicedLetters = letters.slice(1, -1)
      if (
        slicedLetters[0] === '{' &&
        slicedLetters[slicedLetters.length - 1] === '}' &&
        slicedLetters[2] !== '}'
      ) {
        wordMultiplier = wordMultiplier * 2
        slicedLetters = slicedLetters.slice(1, -1)
      }
    }
// normal loop
    for (let i = 0; i < letters.length; i++){
      if (letters[i] === '|' || letters[i] === '|') {
        return 0
      } let letterWorth = 1
      if (letters[i - 1] === '{' && letters[i + 1] === '}') {
        letterWorth = 2
      } else if (
        (letters[i - 1] === '{' && letters[i + 1] !== '}') ||
        (letters[i - 1] !== '{' && letters[i + 1] === '}')
      ) {
        return 0
      }
// letter worth [
      if (letters[i - 1] === '[' && letters[i + 1] === ']') {
        letterWorth = 3
      } else if (
        (letters[i - 1] === '[' && letters[i + 1] !== ']') ||
        (letters[i - 1] !== '[' && letters[i + 1] === ']')
      ) {
        return 0
      }
// loop slicedletters letters times letterworth
      if (point1Letters.includes(letters[i])) {
        counter = counter + 1 * letterWorth
      } else if (point2Letters.includes(letters[i])) {
        counter = counter + 2 * letterWorth
      } else if (point3Letters.includes(letters[i])) {
        counter = counter + 3 * letterWorth
      } else if (point4Letters.includes(letters[i])) {
        counter = counter + 4 * letterWorth
      } else if (point5Letters.includes(letters[i])) {
        counter = counter + 5 * letterWorth
      } else if (point8Letters.includes(letters[i])) {
        counter = counter + 8 * letterWorth
      } else if (point10Letters.includes(letters[i])) {
        counter = counter + 10 * letterWorth
      } else {
        counter = counter
      }

    }







// start loop sliced letters
    for (let i = 0; i < slicedLetters.length; i++) {
      if (slicedLetters[i] === '|' || slicedLetters[i] === '|') {
        return 0
      } 
// letter worth {
      let letterWorth = 1
      if (slicedLetters[i - 1] === '{' && slicedLetters[i + 1] === '}') {
        letterWorth = 2
      } else if (
        (slicedLetters[i - 1] === '{' && slicedLetters[i + 1] !== '}') ||
        (slicedLetters[i - 1] !== '{' && slicedLetters[i + 1] === '}')
      ) {
        return 0
      }
// letter worth [
      if (slicedLetters[i - 1] === '[' && slicedLetters[i + 1] === ']') {
        letterWorth = 3
      } else if (
        (slicedLetters[i - 1] === '[' && slicedLetters[i + 1] !== ']') ||
        (slicedLetters[i - 1] !== '[' && slicedLetters[i + 1] === ']')
      ) {
        return 0
      }
// loop slicedletters letters times letterworth
      if (point1Letters.includes(slicedLetters[i])) {
        counter = counter + 1 * letterWorth
      } else if (point2Letters.includes(slicedLetters[i])) {
        counter = counter + 2 * letterWorth
      } else if (point3Letters.includes(slicedLetters[i])) {
        counter = counter + 3 * letterWorth
      } else if (point4Letters.includes(slicedLetters[i])) {
        counter = counter + 4 * letterWorth
      } else if (point5Letters.includes(slicedLetters[i])) {
        counter = counter + 5 * letterWorth
      } else if (point8Letters.includes(slicedLetters[i])) {
        counter = counter + 8 * letterWorth
      } else if (point10Letters.includes(slicedLetters[i])) {
        counter = counter + 10 * letterWorth
      } else {
        counter = counter
      }

    }
    counter = counter * wordMultiplier
    console.log(counter);
    return counter
  }
}

scrabble('d[o]g')

module.exports = scrabble
