// alert("hello"); here we are using node js so we should not use browser js terms 
// alert is used for pop msg in browser

const { boolean } = require("mathjs");

// const input = "33abc";
const input = true;

// console.log(typeof input)
// console.log(typeof (input))//both have same effect

let changednumber = Number(input);
// console.log(typeof changednumber)
// console.log( changednumber)
// here it shows as a number but it is not a number in console it  shows as "Nan"
//"33"=>33 but "33abc"=>NaN but its type is number 
//javascript is not a strict language
//if we give null instead of a string then we get it as 0
//if we change undefined to a number then we get it is Nan and its type is number
//if we convert boolean into  number then we get true as 1 and false as 0


let boolnumber = 1;
let bool = boolean(boolnumber);
console.log(bool)

//here when we change boolnumber 1 => to boolean then it is converted into true