const letterPoint= 
    {'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1, 
    'D': 2, 'G': 2, 
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8, 
    'Q': 10, 'Z': 10}
    


function scrabble(inputString) {

    if (inputString === null) {
        return 0
    }
    const value = Object.values(letterPoint)
    const arrLetters = Object.keys(letterPoint)
    let string = inputString
    string = string.toUpperCase()
    string.split('')
    let sum = 0
    for (let i = 0; string.length > i; i++) {
    
        const givenString = string[i]
        
        for (let l = 0; arrLetters.length > l; l++) {
    
            const givenPoint = arrLetters[l]
            
            if (givenString === givenPoint) {
                
    
                // console.log('add me up@@@@@@@@@@@@@@@', givenPoint, letterPoint[givenPoint])
    
                sum += letterPoint[givenPoint]
                // console.log(sum)
            }
        }
        
    }
return sum

}
console.log(scrabble('cabbage'))


// function scrabble(letter1) {
    
//     let letter=letter1.toUpperCase()
    
//     const matchingKey = Object.keys(letterPoint).find(key => key === letter)
    
//     if (matchingKey === undefined) {
//         return 0
        
//     }
        
//     return letterPoint[letter]
        
// }
    
    
    
// console.log(scrabble('q', 'a'))


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//     letter = letter.split('')

    //     const matchKey = arrLetters.filter(key =>letter.includes(key))       
    //     // console.log('hi', filter)
    //     return letterPoint[]
    // }



// let strIng = 'TOM'

// for (let i = 0; i < arrLetters.length; i++) {
//     console.log(arrLetters[i])
//     if (strIng === arrLetters[i]) {

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
//         console.log("object is", object)
//         console.log("value is", value)
    
//         const keys = Object.keys(object)
//         console.log("keys are", keys, '\n\n') // added some new lines to put some space in the console
    
//         const findResult = keys.find(key => {
//               console.log("key in find is", key)
//               console.log("object[key] in find is", object[key], '\n\n') // added some new lines to put some space in the console
//               console.log('tiger', object[key])
//               console.log('me too', value)
//               return object[key] === value
//             })
        
//             console.log("findResult is", findResult)
        
//             return findResult[value]
//           }
// console.log(getKey(letterPoint, 'K'))
        
module.exports = scrabble


