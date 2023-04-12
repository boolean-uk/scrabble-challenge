function scrabble(word) {
  let totalScore = 0
  if (word === undefined || word === null || word === ' \t\n') return 0
  const arrWord = word.split('')
  faultCheck(arrWord)
  for (let i = 0; i < arrWord.length; i++) {
    if (isSpecial(arrWord[i]) === 0) {
      totalScore += getScore(arrWord[i])
    }
  }
  return totalScore
}
function getScore(character) {
  if (character === undefined || character === null) return 0
  if ('AEIOULNRST'.includes(character.toUpperCase())) {
    return 1
  } else if ('DG'.includes(character.toUpperCase())) {
    return 2
  } else if ('BCMP'.includes(character.toUpperCase())) {
    return 3
  } else if ('FHVWY'.includes(character.toUpperCase())) {
    return 4
  } else if (character.toUpperCase() === 'K') {
    return 5
  } else if ('JX'.includes(character.toUpperCase())) {
    return 8
  } else if ('QZ'.includes(character.toUpperCase())) {
    return 10
  }
}
function isSpecial(symbol) {
  // { is 1, } is 2, [ is 3 and ] is 4
  if (symbol === '{') {
    return 1
  } else if (symbol === '}') {
    return 2
  } else if (symbol === '[') {
    return 3
  } else if (symbol === ']') {
    return 4
  } else {
    return 0
  }
}
function faultCheck(arr) {
  console.log('checked')
  if (arr.includes('|')) return 0
  if (arr.includes('{') && !arr.includes('}')) return 0
  if (arr.includes('}') && !arr.includes('{')) return 0
  if (arr.includes('[') && !arr.includes(']')) return 0
  if (arr.includes(']') && !arr.includes('[')) return 0
}
console.log(scrabble('Balls|'))
