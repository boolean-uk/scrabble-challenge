const letters = {
  value1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ,'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  value2: ["D", "G", "d", "g"],
  value3: ["B", "C", "M", "P", "b" ,"c" ,"m", "p"],
  value4: ["F", "H", "V", "W", "Y", "f", "h", "v", "w", "y"],
  value5: ["K", "k"],
  value8: ["J", "X" ,"j" ,"x"],
  value10: ["Q", "Z", "q", "z"]
}
class Scrabble {
  // Write your implementation here#
  constructor(word){
    this.word = word
  }

  score(){

    if(this.word === ""){
      return 0
    }
    if(this.word === null){
      return 0
    }
    if(this.word === " \t\n"){
      return 0
    }
    let result = 0
    for(let i = 0; i < this.word.length; i++){
      if(letters.value1.includes(this.word[i])){
        result = result + 1
      }
      if(letters.value2.includes(this.word[i])){
      result = result + 2
      }
      if(letters.value3.includes(this.word[i])){
        result = result + 3
      }
      if(letters.value4.includes(this.word[i])){
        result = result + 4
      }
      if(letters.value5.includes(this.word[i])){
        result = result + 5
      }
      if(letters.value8.includes(this.word[i])){
        result = result + 8
      }
      if(letters.value10.includes(this.word[i])){
        result = result + 10
      }
    }
    return result
  }
}
// checking the error message
module.exports = Scrabble
