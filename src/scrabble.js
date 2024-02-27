function scrabble(word) {
  let tempArray
  let totalPoints = 0
  if(word === null) return 0

  for(let i = 0; i < word.length; i++){
   tempArray = word.charAt(i).toUpperCase()

   switch(tempArray) {
    case 'A':
      case 'E':
        case 'I':
         case 'O':
          case 'U':
            case 'L':
              case 'N':
                case 'R':
                  case 'T':
                    case 'S': 
                    totalPoints += 1
                    continue
                    case 'D':
                      case 'G':
                        totalPoints +=2
                        continue
                        case 'B':
                          case 'C':
                            case 'M':
                              case 'P':
                                totalPoints += 3
                                continue
                                case 'F':
                                  case 'H':
                                    case 'V':
                                      case 'W':
                                        case 'Y':
                                          totalPoints += 4
                                          continue
                                          case 'K':
                                            totalPoints += 5
                                            continue
                                            case 'J':
                                              case 'X':
                                                totalPoints += 8
                                                continue
                                                case 'Q':
                                                  case 'Z':
                                                    totalPoints += 10
                                                    continue
                                                    default:
                                                      totalPoints += 0
   }
  }
  return totalPoints
}

module.exports = scrabble







//Step1
//Take a word
//split the word to letters
//check the letters and value them

//Step 2
// -1. keep traking of totalPoints
// 0.1 if the word be'null' or '' or " \t\n" retrun 0 
// 0. get the word
// 1. put the word to an array that every index is one of the letters
// 2. check every single of letters in Array and value them
// 3. sum every of values with totalPoints
// 4. return totalPoints

//Step 3
// Input: A String, Output: A number 
// func : scrabble , word, wordArray , totalPoints , tempArray
