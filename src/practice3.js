function dealingWithBrackets2(string) {
  let doublesubstring = ''
  let substring1 = ''
  for (let i = 0; i <= string.length; i++) {
    console.log(string[i])
    if (string[i] === '{') {
      console.log('found {')
      const startIndex = string.indexOf('{')
      const endIndex = string.indexOf('}')
      const newString = string.substring(startIndex + 1, endIndex)
      doublesubstring += newString
      console.log('doublesubstring =', doublesubstring)
    } else if (string[i] !== '{' && string[i] !== '}') {
      substring1 += string[i]
      console.log('substring1 =', substring1)
    } else {
      return 0
    }
  }
  return doublesubstring
}

console.log(dealingWithBrackets2('{d}o{g}'))
