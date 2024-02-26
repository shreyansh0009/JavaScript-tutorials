// conversions


let score = 33

console.log(typeof score);
// o/p = number

let score2 = "33"

console.log(typeof score2);
//o/p = string

//but if we want print the number inside the double quote, then we have to convert in into number by using following function...

let valueInNumber = Number(score2)

console.log(typeof valueInNumber);
// o/p = number

let score3 = "a33bc"
//still in this case the output will be number

console.log(typeof score3);
console.log(score); // o/p = 33
console.log(score2); // o/p = 33

console.log(score3); //o/p = a33bc

let score4 = undefined;
console.log(typeof score4); //o/p = undefined

let score5 = null;
console.log(typeof score5);


