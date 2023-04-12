/* eslint-disable no-unreachable-loop */
// function dobleMultipliers(letter, index, lengthWord, counter) {
//   if (letter === '{') {
//     // check first if there are triple letters
//     index += 1 // add a position to the array
//     // eslint-disable-next-line no-unmodified-loop-condition
//     while (letter !== '}') {
//       if (index === lengthWord) {
//         counter = 0
//         return counter
//       }
//       if (
//         letter === 'a' ||
//         letter === 'e' ||
//         letter === 'i' ||
//         letter === 'o' ||
//         letter === 'u' ||
//         letter === 'l' ||
//         letter === 'n' ||
//         letter === 'r' ||
//         letter === 's' ||
//         letter === 't'
//       ) {
//         counter += 1 * 2
//       } else if (letter === 'd' || letter === 'g') {
//         counter += 2 * 2
//       } else if (
//         letter === 'b' ||
//         letter === 'c' ||
//         letter === 'm' ||
//         letter === 'p'
//       ) {
//         counter += 3 * 2
//       } else if (
//         letter === 'f' ||
//         letter === 'h' ||
//         letter === 'v' ||
//         letter === 'w' ||
//         letter === 'y'
//       ) {
//         counter += 4 * 2
//       } else if (letter === 'k') {
//         counter += 5 * 2
//       } else if (letter === 'j' || letter === 'x') {
//         counter += 8 * 2
//       } else if (letter=== 'q' || letter === 'z') {
//         counter += 10 * 2
//       }
//       index++
//     }
//     // add another position to the array to see if the brackets are closed
//     if (letter === '}') {
//       index += 1 // add another position to the array as we wont jump to the for loop
//     }

// }
// }

// function tripleMultipliers(letter, index, length, counter) {
//   if (letter === '[') {
//   // check first if there are triple letters
//   index += 1 // add a position to the array
//   while (letter !== ']') {
//     if (i === arrayWord.length) {
//       counter = 0
//       return counter
//     }
//     if (
//       letter === 'a' ||
//       letter === 'e' ||
//       letter === 'i' ||
//       letter === 'o' ||
//       letter === 'u' ||
//       letter === 'l' ||
//       letter === 'n' ||
//       letter === 'r' ||
//       letter === 's' ||
//       letter === 't'
//     ) {
//       counter += 1 * 3
//     }
//     if (letter === 'd' || letter === 'g') {
//       counter += 2 * 3
//     }
//     if (
//       letter === 'b' ||
//       letter === 'c' ||
//       letter === 'm' ||
//       letter === 'p'
//     ) {
//       counter += 3 * 3
//     }
//     if (
//       letter === 'f' ||
//       letter === 'h' ||
//       letter === 'v' ||
//       letter === 'w' ||
//       letter === 'y'
//     ) {
//       counter += 4 * 3
//     }
//     if (letter === 'k') {
//       counter += 5 * 3
//     }
//     if (letter === 'j' || letter === 'x') {
//       counter += 8 * 3
//     }
//     if (letter === 'q' || letter === 'z') {
//       counter += 10 * 3
//     }
//     index += 1 // add another position to the array to see if the brackets are closed
//   }
//   if (letter === ']') {
//     index += 1 // add another position to the array as we wont jump to the for loop
//   }
//   }
// }

function scrabble(word1) {
  let counter = 0

  if (word1 === null) {
    return counter
  }
  if (word1 === ' \t\n') {
    return counter
  }
  const word = word1.toLowerCase()
  const arrayWord = String(word).split('')
  let i = 0
  for (i; i <= arrayWord.length; ++i) {
    //  dobleMultipliers(arrayWord[i], i, arrayWord.length, counter)
    //  tripleMultipliers(arrayWord[i], i, arrayWord.length, counter)
    if (arrayWord[i] === '{') {
      
      // check first if there are triple letters
      i += 1 // add a position to the array
      while (arrayWord[i] !== '}') {
        
        if (i === arrayWord.length) {
          
          counter = 0
          return counter
        } else if (arrayWord[i] === '[') {
          // check first if there are triple letters
          i += 1 // add a position to the array
          while (arrayWord[i] !== ']') {
            if (i === arrayWord.length) {
              counter = 0
              return counter
            }
            if (
              arrayWord[i] === 'a' ||
              arrayWord[i] === 'e' ||
              arrayWord[i] === 'i' ||
              arrayWord[i] === 'o' ||
              arrayWord[i] === 'u' ||
              arrayWord[i] === 'l' ||
              arrayWord[i] === 'n' ||
              arrayWord[i] === 'r' ||
              arrayWord[i] === 's' ||
              arrayWord[i] === 't'
            ) {
              counter += 1 * 3 * 2
            }
            if (arrayWord[i] === 'd' || arrayWord[i] === 'g') {
              counter += 2 * 3 * 2
            }
            if (
              arrayWord[i] === 'b' ||
              arrayWord[i] === 'c' ||
              arrayWord[i] === 'm' ||
              arrayWord[i] === 'p'
            ) {
              counter += 3 * 3 * 2
            }
            if (
              arrayWord[i] === 'f' ||
              arrayWord[i] === 'h' ||
              arrayWord[i] === 'v' ||
              arrayWord[i] === 'w' ||
              arrayWord[i] === 'y'
            ) {
              counter += 4 * 3 * 2
            }
            if (arrayWord[i] === 'k') {
              counter += 5 * 3 * 2
            }
            if (arrayWord[i] === 'j' || arrayWord[i] === 'x') {
              counter += 8 * 3 * 2
            }
            if (arrayWord[i] === 'q' || arrayWord[i] === 'z') {
              counter += 10 * 3 * 2
            }
            i += 1 // add another position to the array to see if the brackets are closed
          }
          if (arrayWord[i] === ']') {
            i += 1 // add another position to the array as we wont jump to the for loop
          }
        } else if (
          arrayWord[i] === 'a' ||
          arrayWord[i] === 'e' ||
          arrayWord[i] === 'i' ||
          arrayWord[i] === 'o' ||
          arrayWord[i] === 'u' ||
          arrayWord[i] === 'l' ||
          arrayWord[i] === 'n' ||
          arrayWord[i] === 'r' ||
          arrayWord[i] === 's' ||
          arrayWord[i] === 't'
        ) {
          counter += 1 * 2
        } else if (arrayWord[i] === 'd' || arrayWord[i] === 'g') {
          counter += 2 * 2
        } else if (
          arrayWord[i] === 'b' ||
          arrayWord[i] === 'c' ||
          arrayWord[i] === 'm' ||
          arrayWord[i] === 'p'
        ) {
          counter += 3 * 2
        } else if (
          arrayWord[i] === 'f' ||
          arrayWord[i] === 'h' ||
          arrayWord[i] === 'v' ||
          arrayWord[i] === 'w' ||
          arrayWord[i] === 'y'
        ) {
          counter += 4 * 2
        } else if (arrayWord[i] === 'k') {
          counter += 5 * 2
        } else if (arrayWord[i] === 'j' || arrayWord[i] === 'x') {
          counter += 8 * 2
        } else if (arrayWord[i] === 'q' || arrayWord[i] === 'z') {
          counter += 10 * 2
        }
        i++
      }
      // add another position to the array to see if the brackets are closed
      if (arrayWord[i] === '}') {
        i += 1 // add another position to the array as we wont jump to the for loop
      }
    } else if (arrayWord[i] === '[') {
      // check first if there are triple letters
      i += 1 // add a position to the array

      while (arrayWord[i] !== ']') {
        if (i === arrayWord.length) {
          counter = 0
          return counter
        }
        if (arrayWord[i] === '{') {
          // check first if there are triple letters
          i += 1 // add a position to the array
          while (arrayWord[i] !== '}') {
            if (i === arrayWord.length) {
              counter = 0
              return counter
            }
            if (
              arrayWord[i] === 'a' ||
              arrayWord[i] === 'e' ||
              arrayWord[i] === 'i' ||
              arrayWord[i] === 'o' ||
              arrayWord[i] === 'u' ||
              arrayWord[i] === 'l' ||
              arrayWord[i] === 'n' ||
              arrayWord[i] === 'r' ||
              arrayWord[i] === 's' ||
              arrayWord[i] === 't'
            ) {
              counter += 1 * 2 * 3
            } else if (arrayWord[i] === 'd' || arrayWord[i] === 'g') {
              counter += 2 * 2 * 3
            } else if (
              arrayWord[i] === 'b' ||
              arrayWord[i] === 'c' ||
              arrayWord[i] === 'm' ||
              arrayWord[i] === 'p'
            ) {
              counter += 3 * 2 * 3
            } else if (
              arrayWord[i] === 'f' ||
              arrayWord[i] === 'h' ||
              arrayWord[i] === 'v' ||
              arrayWord[i] === 'w' ||
              arrayWord[i] === 'y'
            ) {
              counter += 4 * 2 * 3
            } else if (arrayWord[i] === 'k') {
              counter += 5 * 2 * 3
            } else if (arrayWord[i] === 'j' || arrayWord[i] === 'x') {
              counter += 8 * 2 * 3
            } else if (arrayWord[i] === 'q' || arrayWord[i] === 'z') {
              counter += 10 * 2 * 3
            }
            i++
          }
        }
        // add another position to the array to see if the brackets are closed
        if (arrayWord[i] === '}') {
          i += 1 // add another position to the array as we wont jump to the for loop
        } else if (
          arrayWord[i] === 'a' ||
          arrayWord[i] === 'e' ||
          arrayWord[i] === 'i' ||
          arrayWord[i] === 'o' ||
          arrayWord[i] === 'u' ||
          arrayWord[i] === 'l' ||
          arrayWord[i] === 'n' ||
          arrayWord[i] === 'r' ||
          arrayWord[i] === 's' ||
          arrayWord[i] === 't'
        ) {
          counter += 1 * 3
        }
        if (arrayWord[i] === 'd' || arrayWord[i] === 'g') {
          counter += 2 * 3
        }
        if (
          arrayWord[i] === 'b' ||
          arrayWord[i] === 'c' ||
          arrayWord[i] === 'm' ||
          arrayWord[i] === 'p'
        ) {
          counter += 3 * 3
        }
        if (
          arrayWord[i] === 'f' ||
          arrayWord[i] === 'h' ||
          arrayWord[i] === 'v' ||
          arrayWord[i] === 'w' ||
          arrayWord[i] === 'y'
        ) {
          counter += 4 * 3
        }
        if (arrayWord[i] === 'k') {
          counter += 5 * 3
        }
        if (arrayWord[i] === 'j' || arrayWord[i] === 'x') {
          counter += 8 * 3
        }
        if (arrayWord[i] === 'q' || arrayWord[i] === 'z') {
          counter += 10 * 3
        }
        i += 1 // add another position to the array to see if the brackets are closed
      }
      if (arrayWord[i] === ']') {
        i += 1 // add another position to the array as we wont jump to the for loop
      }
    } else if (arrayWord[i] === '}' || arrayWord[i] === ']') {
      
      counter = 0
      return counter
    }
    if (
      arrayWord[i] === 'a' ||
      arrayWord[i] === 'e' ||
      arrayWord[i] === 'i' ||
      arrayWord[i] === 'o' ||
      arrayWord[i] === 'u' ||
      arrayWord[i] === 'l' ||
      arrayWord[i] === 'n' ||
      arrayWord[i] === 'r' ||
      arrayWord[i] === 's' ||
      arrayWord[i] === 't'
    ) {
      counter += 1
    } else if (arrayWord[i] === 'd' || arrayWord[i] === 'g') {
      counter += 2
      // console.log('here2')
    } else if (
      arrayWord[i] === 'b' ||
      arrayWord[i] === 'c' ||
      arrayWord[i] === 'm' ||
      arrayWord[i] === 'p'
    ) {
      counter += 3
    } else if (
      arrayWord[i] === 'f' ||
      arrayWord[i] === 'h' ||
      arrayWord[i] === 'v' ||
      arrayWord[i] === 'w' ||
      arrayWord[i] === 'y'
    ) {
      counter += 4
    } else if (arrayWord[i] === 'k') {
      counter += 5
    } else if (arrayWord[i] === 'j' || arrayWord[i] === 'x') {
      counter += 8
    } else if (arrayWord[i] === 'q' || arrayWord[i] === 'z') {
      counter += 10
    } else if (arrayWord[i] === '|') {
      counter = 0
      return counter
    }
  }

  return counter
}

//console.log(scrabble('{[d]og}'))
//console.log(scrabble('OXYPHENBUTAZONE'))
//console.log(scrabble('d{o}g'))
 console.log(scrabble('{[dog]}'))
module.exports = scrabble
