const pointsMap = new Map([
  ['A', 1],
  ['B', 3],
  ['C', 3],
  ['D', 2],
  ['E', 1],
  ['F', 4],
  ['G', 2],
  ['H', 4],
  ['I', 1],
  ['J', 8],
  ['K', 5],
  ['L', 1],
  ['M', 3],
  ['N', 1],
  ['O', 1],
  ['P', 3],
  ['Q', 10],
  ['R', 1],
  ['S', 1],
  ['T', 1],
  ['U', 1],
  ['V', 4],
  ['W', 4],
  ['X', 8],
  ['Y', 4],
  ['Z', 10],
]);

const multiplierMap = new Map([
  ['[', 3],
  [']', 3],
  ['{', 2],
  ['}', 2]
]);

const getMultiplier = (char, currentMultiplier) => {
  let multiplier = currentMultiplier || 1
  if (char === '[' || char === '{') {
    multiplier *= multiplierMap.get(char)
  } else if (char === ']' || char === '}') {
    multiplier /= multiplierMap.get(char)
  }

  return multiplier
}

function scrabble(input) {
  let points = 0
  let multiplier = 1

  if (!input) return points


  for (let c = 0; c < input.length; c++) {
    let char = input[c].toUpperCase();
    if (multiplierMap.has(char))
      multiplier = getMultiplier(char, multiplier)
    else {
      let charPoints = pointsMap.get(char)

      //if the character is not valid return 0
      if (!charPoints) {
        return 0
      }
      points += charPoints * multiplier
    }


  }

  //multiplier should be 1 at the end, to ensure every opening bracket has a closing one
  return multiplier === 1 ? points : 0

}


module.exports = scrabble
