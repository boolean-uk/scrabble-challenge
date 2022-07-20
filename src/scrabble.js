aToT = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't', 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
dToG = ['d', 'g', 'D', 'G']
bToP = ['b', 'c', 'm', 'p', 'B', 'C', 'M', 'P']
fToY = ['f', 'h', 'v', 'w', 'y', 'F', 'H', 'V', 'W', 'Y']
kay  = ['k', 'K']
jToX = ['j', 'x', 'J', 'X']
qToZ = ['q', 'z', 'Q', 'Z']


 

function scrabble(word){

if (typeof word !== 'string'){
        return 0
    }    
    
total = 0

for (i = 0; i < word.length; i++){

   
    if (aToT.find(letter => letter === word[i])){
        total = total + 1
}   
    if (dToG.find(letter => letter === word[i])){
        total = total + 2
}
    if (bToP.find(letter => letter === word[i])){
        total = total + 3
}
    if (fToY.find(letter => letter === word[i])){
        total = total + 4
}
    if (kay.find(letter => letter === word[i])){
        total = total + 5
}
    if (jToX.find(letter => letter === word[i])){
        total = total + 8
}
    if (qToZ.find(letter => letter === word[i])){
        total = total + 10
}

if (typeof word !== 'string'){
    total = 0
  }
    



}

return total

}





module.exports = scrabble
