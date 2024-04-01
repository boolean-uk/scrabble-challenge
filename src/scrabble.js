const scoreLibrary = [
  { letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], score: 1 },
  { letters: ['D', 'G'], score: 2 },
  { letters: ['B', 'C', 'M', 'P'], score: 3 },
  { letters: ['F', 'H', 'V', 'W', 'Y'], score: 4 },
  { letters: ['K'], score: 5 },
  { letters: ['J', 'X'], score: 8 },
  { letters: ['Q', 'Z'], score: 10 }
]

const scrabble = (str = '') => {
  if (typeof str !== 'string') return 0

  let scores = 0

  const splitStr = str.split('')

  if (
    (splitStr.includes('{') && splitStr.includes('}')) ||
    (splitStr.includes('[') && splitStr.includes(']')) ||
    /^[A-Z]*$/.test(str.toUpperCase())
  ) {
    let newStr = str

    // MULTIPLE BRACKETS
    if (
      splitStr.includes('{') &&
      splitStr.includes('}') &&
      splitStr.includes('[') &&
      splitStr.includes(']')
    ) {
      let curlyBrackets = str.toUpperCase().match(/{([^}]+)}/g)[0]
      let squareBrackets = str.toUpperCase().match(/\[(.*?)\]/g)[0]

      if (curlyBrackets.length > squareBrackets.length) {
        curlyBrackets = curlyBrackets.replace(squareBrackets, '')

        squareBrackets
          .slice(0, -1)
          .slice(1)
          .split('')
          .forEach((item) => {
            item.split('').forEach((value) => {
              scoreLibrary.forEach((scoreItem) => {
                if (scoreItem.letters.includes(value)) {
                  scores += scoreItem.score * 3
                }
              })
            })
          })

        scores = scores * 2

        curlyBrackets
          .slice(0, -1)
          .slice(1)
          .split('')
          .forEach((item) => {
            console.log('square', item)
            item.split('').forEach((value) => {
              scoreLibrary.forEach((scoreItem) => {
                if (scoreItem.letters.includes(value))
                  scores += scoreItem.score * 2
              })
            })
          })
      } else {
        squareBrackets = squareBrackets.replace(curlyBrackets, '')

        curlyBrackets
          .slice(0, -1)
          .slice(1)
          .split('')
          .forEach((item) => {
            item.split('').forEach((value) => {
              scoreLibrary.forEach((scoreItem) => {
                if (scoreItem.letters.includes(value)) {
                  scores += scoreItem.score * 2
                }
              })
            })
          })

        scores = scores * 3

        squareBrackets
          .slice(0, -1)
          .slice(1)
          .split('')
          .forEach((item) => {
            console.log('square', item)
            item.split('').forEach((value) => {
              scoreLibrary.forEach((scoreItem) => {
                if (scoreItem.letters.includes(value))
                  scores += scoreItem.score * 3
              })
            })
          })
      }

      return scores
    }

    // CURLY BRACKETS
    if (splitStr.includes('{') && splitStr.includes('}')) {
      const curlyBrackets = str.toUpperCase().match(/{([^}]+)}/g)

      curlyBrackets
        .map((item) => {
          newStr = newStr.toUpperCase().replace(item, '')

          return item.slice(0, -1).slice(1)
        })
        .forEach((item) => {
          item.split('').forEach((value) => {
            scoreLibrary.forEach((scoreItem) => {
              if (scoreItem.letters.includes(value)) {
                scores += scoreItem.score * 2
              }
            })
          })
        })
    }

    // SQUARE BRACKETS
    if (splitStr.includes('[') && splitStr.includes(']')) {
      const squareBrackets = str.toUpperCase().match(/\[(.*?)\]/g)

      squareBrackets
        .map((item) => {
          newStr = newStr.toUpperCase().replace(item, '')

          return item.slice(0, -1).slice(1)
        })
        .forEach((item) => {
          item.split('').forEach((value) => {
            scoreLibrary.forEach((scoreItem) => {
              if (scoreItem.letters.includes(value)) {
                scores += scoreItem.score * 3
              }
            })
          })
        })
    }

    // NO BRACKETS
    if (/^[A-Z]*$/.test(newStr.toUpperCase())) {
      const strLetters = newStr.toUpperCase().split('')

      strLetters.forEach((item) => {
        scoreLibrary.forEach((scoreItem) => {
          if (scoreItem.letters.includes(item)) {
            scores += scoreItem.score
          }
        })
      })
    }
  } else {
    return 0
  }

  return scores
}

module.exports = scrabble
