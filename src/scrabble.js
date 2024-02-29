let totalPoints = 0
let wordLength = 0
let value = 0
let last = 0


function scrabble(word){
  totalPoints = 0
  let resultObject = {
    value: value,
    last: last
  }
  let bracketPoints = 0
  let curlyBracketPoints = 0


  if(word === null) return 0

  wordLength = word.length

  word= word.toUpperCase()
  
  for(let i = 0; i<wordLength; i++){
    
    let letter = word.charAt(i)
    
    if(word.charAt(i) === '{' ){
      console.log(`i befor curly bracket ${i}`)

      resultObject = openCurlyBracket(word.slice(i),i)

      i = resultObject.last
      curlyBracketPoints += resultObject.value * 2
      console.log(`i after curly bracket ${curlyBracketPoints}`)
      console.log(`i after curly bracket ${i}`)
    } else if (word.charAt(i) === '[') {
      resultObject = openBracket(word.slice(i), i)
      i = resultObject.last
      bracketPoints += resultObject.value * 3
    } else if (
      letter.search(/[A-Z]/) !== -1 &&
      letter.search(/]/) === -1 &&
      letter.search(/}/) === -1
    ) {
      totalPoints += switchCalculate(word.charAt(i)) + value
    } else {
      totalPoints = 0
      return totalPoints
    }
    // calculate with normal scores Method
    // return the points
  }

  wordLength = 0

  console.log(`totalPoints : ${totalPoints} & ${bracketPoints} & ${curlyBracketPoints}`)
  totalPoints = totalPoints + curlyBracketPoints + bracketPoints
  return totalPoints
}

function openCurlyBracket(restOfWord, index) {
  let resultObject = {}
  let curlyObject = {}
  let bracketObject = {}
  let nestedCurlyBracketPoints = 0
  let curlyBracketPoints = 0
  let nestedBracketPoints = 0
  let lastindex = 0
  let points = 0
  // console.log(`checkCurlyBracket : ${checkCurlyBracket}`)
  for(let i = 1; i<wordLength; i++){
    
      lastindex = i
      if(restOfWord.charAt(i) === '{' ){
    
      curlyObject =  openCurlyBracket(restOfWord.slice(i), i)
      i = curlyObject.last
      nestedCurlyBracketPoints += curlyObject.value * 2

      } else if (restOfWord.charAt(i) === '['){
    
        bracketObject =  openBracket(restOfWord.slice(i), i)
        i = bracketObject.last
        nestedBracketPoints += bracketObject.value * 3
        continue

      }
      else if (restOfWord.charAt(i) !== '}' && restOfWord.charAt(i) !== ']' ) { 
        
        curlyBracketPoints = curlyBracketPoints + switchCalculate(restOfWord.charAt(i))
        continue

      } else if (restOfWord.charAt(i) === '}'){
        break
      } 
  }
  
  if(restOfWord.charAt(lastindex) === '}'){
    
    resultObject = {
      value : curlyBracketPoints + nestedCurlyBracketPoints + nestedBracketPoints,
      last : lastindex + index
    }
    return resultObject
  }else {
    resultObject = {
      value: 0,
      last : lastindex + index
    }
    totalPoints = 0
    return resultObject
  }
  
  //add the points to totalPoints

}

function openBracket(restOfWord,index){
  let resultObject = {}
  let bracketObject = {}
  let curlyObject = {}
  let nestedBracketPoints = 0
  let nestedCurlyBracketPoints = 0
  let BracketPoints = 0
  let lastindex = 0
  let points = 0
  
  
  // console.log(`checkBracket : ${checkBracket}`)
  for(let i = 1; i<wordLength; i++){
    lastindex = i
    
    if(restOfWord.charAt(i) === '{' ){
          
        curlyObject =  openCurlyBracket(restOfWord.slice(i), i)
        i = curlyObject.last
        nestedCurlyBracketPoints += curlyObject.value * 2
         
    } else if (restOfWord.charAt(i) === '['){
        bracketObject = openBracket(restOfWord.slice(i), i)
        i = bracketObject.last
        nestedBracketPoints = bracketObject.value * 3

    } else if (restOfWord.charAt(i) !== '}' && restOfWord.charAt(i) !== ']' ) { 

          BracketPoints = BracketPoints + switchCalculate(restOfWord.charAt(i))
          continue
  
    } else if (restOfWord.charAt(i) === ']'){
        
        break
    } 
  }
  if(restOfWord.charAt(lastindex) === ']') {
    
    resultObject = {
      value : BracketPoints + nestedBracketPoints + nestedCurlyBracketPoints,
      last : lastindex + index
    }
    console.log('ttttttttttt')
    console.log(resultObject)
    return resultObject
  } else {
    resultObject = {
      value: 0,
      last : lastindex + index
    }
    totalPoints = 0
    return resultObject
  }
   
  //add the points to totalPoints
}

function switchCalculate(letter){
  let points = 0
  switch (letter) {
      
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
      points = 1
      break
    case 'D':
    case 'G':
      points = 2
      break
    case 'B':
    case 'C':
    case 'M':
    case 'P':
      points = 3
      break
    case 'F':
    case 'H':
    case 'V':
    case 'W':
    case 'Y':
      points = 4
      break
    case 'K':
      points = 5
      break
    case 'J':
    case 'X':
      points = 8
      break
    case 'Q':
    case 'Z':
      points = 10
      break
    default:
      points = 0
      break
  }
  return points
}

module.exports = scrabble

// Step1
// Take a word
// split the word to letters
// check the letters and value them

// Step 2
// -1. keep traking of totalPoints
// 0.1 if the word be'null' or '' or " \t\n" retrun 0
// 0. get the word
// 1. put the word to an array that every index is one of the letters
// 2. check every single of letters in Array and value them
// 3. sum every of values with totalPoints
// 4. return totalPoints

// Step 3
// Input: A String, Output: A number
// func : scrabble , word, wordArray , totalPoints , tempArray
