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
  ['[', 3],
  [']', 3],
  ['{', 2],
  ['}', 2]
]);


function scrabble(input) {
  let points = 0
  let multiplier = 1

  if (!input) return points


  for (let c = 0; c < input.length; c++) {
    let char = input[c].toUpperCase();
    if (char === '[' || char === '{') {
      multiplier *= pointsMap.get(char)
    } else if (char === ']' || char === '}') {
      multiplier /= pointsMap.get(char)
    } else {
      //let charPoints = pointsMap.get(char) * multiplier || 0
      let charPoints = pointsMap.get(char)

      if (!charPoints) {
        return 0
      }
      points += charPoints * multiplier
    }
  }

  //multiplier should be 1 at the end, to ensure every opening bracket has a closing one
  return multiplier === 1 ? points : 0


  // for (let c = 0; c < input.length; c++) {
  //   let charPoints = pointsMap.get(input[c].toUpperCase()) || 0
  //   points += charPoints
  // }

  //return points

}

module.exports = scrabble
