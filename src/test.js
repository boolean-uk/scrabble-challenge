const word = ' \t\n'

// if ( word.indexOf(' ') != -1 ) { return word.replaceAll(' ', '_')}

let sanitizedWord = word.replace(' ', '_').replace('\t', '_').replace('\n', '_')
console.log(sanitizedWord)
