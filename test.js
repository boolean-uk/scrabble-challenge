function scrabble(givenWord) {
  if (typeof givenWord === 'string') {
    givenWord = givenWord.toUpperCase()
  } else {
    return 0
  }

  const letterArray = []
  const onePointers = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  const twoPointers = ['D', 'G']
  const threePointers = ['B', 'C', 'M', 'P']
  const fourPointers = ['F', 'H', 'V', 'W', 'Y']
  const fivePointers = ['K']
  const eightPointers = ['J', 'X']
  const tenPointers = ['Q', 'Z']

  let totalPoints = 0

  for (let i = 0; i < givenWord.length; i++) {
    letterArray[i] = givenWord.charAt(i)
  }

  for (let i = 0; i < letterArray.length; i++) {
    if (onePointers.includes(letterArray[i])) {
      totalPoints++
    }
    if (twoPointers.includes(letterArray[i])) {
      totalPoints += 2
    }
    if (threePointers.includes(letterArray[i])) {
      totalPoints += 3
    }
    if (fourPointers.includes(letterArray[i])) {
      totalPoints += 4
    }
    if (fivePointers.includes(letterArray[i])) {
      totalPoints += 5
    }
    if (eightPointers.includes(letterArray[i])) {
      totalPoints += 8
    }
    if (tenPointers.includes(letterArray[i])) {
      totalPoints += 10
    }
  }

  console.log(totalPoints)
  console.log(letterArray)
  return totalPoints
}
console.log(scrabble('OXYPHENBUTAZONE'))
