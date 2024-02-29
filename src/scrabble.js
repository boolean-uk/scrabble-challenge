function scrabble() {
  // write code here
}
function scrabble(string) {
    if (string === null  || string === undefined ) {
        return 0
    } 
    
   

    //const one = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
    //const two = ['D', 'G']
    //const three = ['B', 'C', 'M', 'P']
    //const four = ['F', 'H', 'V', 'W', 'Y']
    //const five = ['K']
    //const eight = ['J', 'X']
    //const ten = ['Q', 'Z']

    let sum = 0
    const word = string.toUpperCase()
    for (let i = 0; i < word.length; i++){
       console.log(word[i])
      

       if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U' || word[i] ==='L' || word[i] === 'N' || word[i] === 'R' || word[i] === 'S' || word[i] === 'T') {
        sum ++
      } else if (word[i] === 'D' || word[i] === 'G') {
        sum += 2
      } else if (word[i] === 'B' || word[i] === 'C' || word[i] === 'M' || word[i] === 'P') {
        sum += 3
      } else if (word[i] === 'F' || word[i] === 'H' || word[i] === 'V' || word[i] === 'W' || word[i] === 'Y') {
        sum += 4
      } else if (word[i] === 'K') {
        sum += 5
      }else if (word[i] === 'J' || word[i] === 'X') {
        sum += 8
      } else if (word[i] === 'Q' || word[i] === 'Z') {
        sum += 10
      } else {
        sum += 0
      } 
    }
    return sum
 

}

//console.log(scrabble('DOG')) 
//console.log(scrabble('OXYPHENBUTAZONE')) 
module.exports = scrabble