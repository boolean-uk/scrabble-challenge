const letterPoint= 
    {'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1, 
    'D': 2, 'G': 2, 
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8, 
    'Q': 10, 'Z': 10}

// const value = Object.values(letterPoint)
// const arrLetters = Object.keys(letterPoint)

// const inputString = string.split('')


function scrabble(inputString) {
    
    let letter = inputString.toUpperCase()
    letter = letter.split('')

    const matchKey = letterPoint.filter(key =>letter.includes(key))
    console.log('wahat is it', matchKey)
    return letterPoint
}
//     const matchingKey = Object.keys(letterPoint).find(key => key === letter)
    
//     if (matchingKey === undefined) {
//         return 0
//     
//     return letterPoint[letter]
    
// }
console.log(scrabble('pii'))





// let strIng = 'TOM'

// for (let i = 0; i < arrLetters.length; i++) {
//     console.log(arrLetters[i])
//     if (strIng === arrLetters[i]) {

//     }

// }


// function scrabble(inputString) {
//     for (let i = 0; letter.length > i; i++) {

//         const letterChar = letter[i]
        
//         for (let p = 0; letterPoint.length > p; p++) {
//             const letterPointChar = letterPoint[p]

//             if (letterChar === letterPointChar) {


//             }

//         }
//     }

// }








// object keys match with given string
// matching key values add up


// create object with letters = keys, value = values of an object
// given string letters must match with objects keys
// every key has its value 
// the value must add up
// the value in string must add up
// result must show the point of string
// input string
// output value points
// not letter values has zero valuation
// to find matched value key
// find object values by its key
// add values





// function getKey(object, value){
    //     console.log("object is", object)
    //     console.log("value is", value)
    
    //     const keys = Object.keys(object)
    //     console.log("keys are", keys, '\n\n') // added some new lines to put some space in the console
    
    //     const findResult = keys.find(key => {
        //       console.log("key in find is", key)
        //       console.log("object[key] in find is", object[key], '\n\n') // added some new lines to put some space in the console
        
        //       return object[key] === value
        //     })
        
        //     console.log("findResult is", findResult)
        
        //     return findResult
        //   }
        
        
// module.exports = scrabble


