
value1 = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't', 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
value2 = ['d', 'g', 'D', 'G']
value3 = ['b', 'c', 'm', 'p', 'B', 'C', 'M', 'P']
value4 = ['f', 'h', 'v', 'w', 'y', 'F', 'H', 'V', 'W', 'Y']
value5  = ['k', 'K']
value8 = ['j', 'x', 'J', 'X']
value10 = ['q', 'z', 'Q', 'Z']



scrabble = (word) => {

    dlScore = (num) => {
        return num * 2
    }
    
    tlScore = (num) => {
        return num * 3
    }

    if (typeof word !== 'string'){  
        return 0
    }    

    let total = 0

    wordLength = word.length

for (i = 0; i < word.length; i++){

//value1   

    if (value1.find(letter => letter === word[i])){

        if (word[i - 1] === '{' && word[i + 1] === '}'){
            let dl = 0
            dl = dl + 1
            total = total + dlScore(dl) * 1
        }
}   

    if (value1.find(letter => letter === word[i])){

        if (word[i - 1] === '[' && word[i + 1] === ']'){
            let tl = 0
            tl = tl + 1
            total = total + tlScore(tl) * 1
        }
}
    if (value1.find(letter => letter === word[i])){

        if (word[i - 1] !== '{' && word[i + 1] !== '}' &&
            word[i - 1] !== '[' && word[i + 1] !== ']' ||
            word[0] === '{' && word[wordLength-1] === '}' &&
            word[i - 1] === '{' && word[i + 1] !== '}' ||
            word[i + 1] === '}' && word[i - 1] !== '{' ||
            word[0] === '[' && word[wordLength-1] === ']' &&
            word[i - 1] === '[' && word[i + 1] !== ']' ||
            word[i + 1] === ']' && word[i - 1] !== '[' 
        ){
            total = total + 1 
        }
}     

//value2

    if (value2.find(letter => letter === word[i])){

        if (word[i - 1] === '{' && word[i + 1] === '}'){
            let dl = 0
            dl = dl + 1
            total = total + dlScore(dl) * 2
    }
}   
    if (value2.find(letter => letter === word[i])){

        if (word[i - 1] === '[' && word[i + 1] === ']'){
            let tl = 0
            tl = tl + 1
            total = total + tlScore(tl) * 2
    }

}
if (value2.find(letter => letter === word[i])){

    if (word[i - 1] !== '{' && word[i + 1] !== '}' &&
        word[i - 1] !== '[' && word[i + 1] !== ']' ||
        word[0] === '{' && word[wordLength-1] === '}' &&
        word[i - 1] === '{' && word[i + 1] !== '}' ||
        word[i + 1] === '}' && word[i - 1] !== '{' ||
        word[0] === '[' && word[wordLength-1] === ']' &&
        word[i - 1] === '[' && word[i + 1] !== ']' ||
        word[i + 1] === ']' && word[i - 1] !== '[' 
    ){
        total = total + 2
    }
}     

//value 3

    if (value3.find(letter => letter === word[i])){
        if (word[i - 1] === '{' && word[i + 1] === '}'){
            let dl = 0
            dl = dl + 1
            total = total + dlScore(dl) * 3
    }
}   
    if (value3.find(letter => letter === word[i])){

        if (word[i - 1] === '[' && word[i + 1] === ']'){
            let tl = 0
            tl = tl + 1
            total = total + tlScore(tl) * 3
    }
}
    if (value3.find(letter => letter === word[i])){

        if (word[i - 1] !== '{' && word[i + 1] !== '}' &&
            word[i - 1] !== '[' && word[i + 1] !== ']' ||
            word[0] === '{' && word[wordLength-1] === '}' &&
            word[i - 1] === '{' && word[i + 1] !== '}' ||
            word[i + 1] === '}' && word[i - 1] !== '{' ||
            word[0] === '[' && word[wordLength-1] === ']' &&
            word[i - 1] === '[' && word[i + 1] !== ']' ||
            word[i + 1] === ']' && word[i - 1] !== '[' 
    ){
            total = total + 3
    }
}     

//value 4

    if (value4.find(letter => letter === word[i])){
        if (word[i - 1] === '{' && word[i + 1] === '}'){
            let dl = 0
            dl = dl + 1
            total = total + dlScore(dl) * 4
    }
}   
    if (value4.find(letter => letter === word[i])){
        if (word[i - 1] === '[' && word[i + 1] === ']'){
            let tl = 0
            tl = tl + 1
            total = total + tlScore(tl) * 4
   
    }
}
    if (value4.find(letter => letter === word[i])){

        if (word[i - 1] !== '{' && word[i + 1] !== '}' &&
            word[i - 1] !== '[' && word[i + 1] !== ']' ||
            word[0] === '{' && word[wordLength-1] === '}' &&
            word[i - 1] === '{' && word[i + 1] !== '}' ||
            word[i + 1] === '}' && word[i - 1] !== '{' ||
            word[0] === '[' && word[wordLength-1] === ']' &&
            word[i - 1] === '[' && word[i + 1] !== ']' ||
            word[i + 1] === ']' && word[i - 1] !== '[' 
    ){
            total = total + 4
    }
}     

//value5

    if (value5.find(letter => letter === word[i])){

        if (word[i - 1] === '{' && word[i + 1] === '}'){
            let dl = 0
            dl = dl + 1
            total = total + dlScore(dl) * 5
    }
}   
    if (value5.find(letter => letter === word[i])){

        if (word[i - 1] === '[' && word[i + 1] === ']'){
            let tl = 0
            tl = tl + 1
            total = total + tlScore(dl) * 5
    }
}
    if (value5.find(letter => letter === word[i])){

        if (word[i - 1] !== '{' && word[i + 1] !== '}' &&
            word[i - 1] !== '[' && word[i + 1] !== ']' ||
            word[0] === '{' && word[wordLength-1] === '}' &&
            word[i - 1] === '{' && word[i + 1] !== '}' ||
            word[i + 1] === '}' && word[i - 1] !== '{' ||
            word[0] === '[' && word[wordLength-1] === ']' &&
            word[i - 1] === '[' && word[i + 1] !== ']' ||
            word[i + 1] === ']' && word[i - 1] !== '[' 
    ){
            total = total + 5
    }
}     


//value8

    if (value8.find(letter => letter === word[i])){

        if (word[i - 1] === '{' && word[i + 1] === '}'){
            let dl = 0
            dl = dl + 1
            total = total + dlScore(dl) * 8
    }
}   
    if (value8.find(letter => letter === word[i])){
        if (word[i - 1] === '[' && word[i + 1] === ']'){
            let tl = 0
            tl = tl + 1
            total = total + tlScore(tl) * 8
    }
}
    if (value8.find(letter => letter === word[i])){

        if (word[i - 1] !== '{' && word[i + 1] !== '}' &&
            word[i - 1] !== '[' && word[i + 1] !== ']' ||
            word[0] === '{' && word[wordLength-1] === '}' &&
            word[i - 1] === '{' && word[i + 1] !== '}' ||
            word[i + 1] === '}' && word[i - 1] !== '{' ||
            word[0] === '[' && word[wordLength-1] === ']' &&
            word[i - 1] === '[' && word[i + 1] !== ']' ||
            word[i + 1] === ']' && word[i - 1] !== '[' 
    ){
            total = total + 8
    }
}     

//value10

    if (value10.find(letter => letter === word[i])){

        if (word[i - 1] === '{' && word[i + 1] === '}'){
            let dl = 0
            dl = dl + 1
            total = total + dlScore(dl) * 10
    }
}   
    if (value10.find(letter => letter === word[i])){

        if (word[i - 1] === '[' && word[i + 1] === ']'){
            let tl = 0
            tl = tl + 1
            total = total + tlScore(tl) * 10
    }
}
    if (value10.find(letter => letter === word[i])){

        if (word[i - 1] !== '{' && word[i + 1] !== '}' &&
            word[i - 1] !== '[' && word[i + 1] !== ']' ||
            word[0] === '{' && word[wordLength-1] === '}' &&
            word[i - 1] === '{' && word[i + 1] !== '}' ||
            word[i + 1] === '}' && word[i - 1] !== '{' ||
            word[0] === '[' && word[wordLength-1] === ']' &&
            word[i - 1] === '[' && word[i + 1] !== ']' ||
            word[i + 1] === ']' && word[i - 1] !== '[' 
    ){
            total = total + 10
    }
}     
}

//Double/Triple Word

    if (word[0] === '{' && word[wordLength-1] === '}'){
        total = total * 2 
}   
    if (word[0] === '[' && word[wordLength-1] === ']'){
        total = total * 3
}

//Total

return total 

}

console.log(scrabble('[c[h]oreo{g}raphy]'))


module.exports = scrabble
