function getLetterScore(letter){
  const upperLetter=letter.toUpperCase();
  if ('AEIOULNRST'.includes(upperLetter)) return 1
  if ('DG'.includes(upperLetter)) return 2
  if ('BCMP'.includes(upperLetter)) return 3
  if ('FHVWY'.includes(upperLetter)) return 4
  if ('K'.includes(upperLetter)) return 5
  if ('JX'.includes(upperLetter)) return 8
  if ('QZ'.includes(upperLetter)) return 10
  return 0
}

function scrabble(happy) {
  // write code here
  if (!happy || happy.trim().length === 0){
    return 0
  };
  let score=0
  let happyMultiplier =1
  let currentLetterMultiplier =1
  let index=0
  happy=happy.trim();

  if (happy.startsWith('{') && happy.endsWith('}')) {
    happyMultiplier =2
    happy = happy.substring(1, happy.length-1);
  } else if (happy.startsWith('[') && happy.endsWith(']')){
    happyMultiplier=3;
    happy=happy.substring(1,happy.length-1);
  }
  for(let index=0; index< happy.length; index++) {
    const currentChar = happy[index];
    if(currentChar === '{'){
      currentLetterMultiplier=2;
  continue;
}
  else if (currentChar==='['){
    currentLetterMultiplier=3;
    continue;
  }
  score+=getLetterScore(currentChar)* currentLetterMultiplier;
  currentLetterMultiplier=1;}
  return score*happyMultiplier
  }
console.log(scrabble('happy'));
console.log(scrabble('')); 
console.log(scrabble(" \t\n"));
console.log(scrabble(null)); 
console.log(scrabble('a'));
console.log(scrabble('f'));
console.log(scrabble('street'));
console.log(scrabble('quirky'));
console.log(scrabble('OXYPHENBUTAZONE'));

module.exports = scrabble
