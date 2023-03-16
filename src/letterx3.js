const letterTripler = (word) => {
  word = word.toUpperCase()
  let sum = 0
  let arr = word.split('')
  for (let i = 0; i < word.length; i++) {
    let num = i
    if (arr[num] === '[' && arr[num + 2] === ']') {
      num = arr.indexOf('[') + 1
      if (
        arr[num] === 'A' ||
        arr[num] === 'E' ||
        arr[num] === 'I' ||
        arr[num] === 'O' ||
        arr[num] === 'U' ||
        arr[num] === 'L' ||
        arr[num] === 'N' ||
        arr[num] === 'R' ||
        arr[num] === 'S' ||
        arr[num] === 'T'
      ) {
        sum += 1
      }
      if (arr[num] === 'D' || arr[num] === 'G') {
        sum += 2
      }
      if (
        arr[num] === 'B' ||
        arr[num] === 'C' ||
        arr[num] === 'M' ||
        arr[num] === 'P'
      ) {
        sum += 3
      }
      if (
        arr[num] === 'F' ||
        arr[num] === 'H' ||
        arr[num] === 'V' ||
        arr[num] === 'W' ||
        arr[num] === 'Y'
      ) {
        sum += 4
      }
      if (arr[num] === 'K') {
        sum += 5
      }
      if (arr[num] === 'J' || arr[num] === 'X') {
        sum += 8
      }
      if (arr[num] === 'Q' || arr[num] === 'Z') {
        sum += 10
      }
      arr.splice(num - 1, 1)
      arr.splice(num, 1)
    }
  }
  return sum * 2
}

module.exports = letterTripler
