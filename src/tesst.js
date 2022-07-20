var a = "I want apple";
var b = " an";
var position = 6;
var output = [a.slice(0, position), b, a.slice(position)].join('');
console.log(output)