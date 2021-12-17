// solving without classes //

function scrabble(string) {
    let count = 0;
    for (let i=0; i<string.length; i++) {
      if (string[i].match(/[^A-Z]/i)) {
            return 0;
          }
      if (string[i].match(/[AEIOULNRST]/i)){
        count++
      }
      if (string[i].match(/[DG]/i)){
        count+=2
      }
      if (string[i].match(/[BCMP]/i)){
        count+=3
      }
      if (string[i].match(/[FHVWY]/i)){
        count+=4
      }
      if (string[i].match(/[K]/i)){
        count+=5
      }
      if (string[i].match(/[JX]/i)){
        count+=8
      }
      if (string[i].match(/[QZ]/i)){
        count+=10
      }
    }
    return count;
  }
  
  console.log(scrabble("hello"))
  console.log(scrabble("a"));
  console.log(scrabble(""));
  console.log(scrabble("/s/f"));
  console.log(scrabble("quirky"));

  