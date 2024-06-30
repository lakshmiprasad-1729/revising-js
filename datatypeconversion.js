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
// console.log(bool)

//here when we change boolnumber 1 => to boolean then it is converted into true

//--------------------------operations-----------------//

//we can change sign by following method

let value =3;
let negvalue = -value;
// console.log(negvalue);

// we can add string 
// console.log("hello"+" world");

//example
// console.log("1"+2+2);
// console.log(1+2+'2');

//some example of true
// console.log(true)//=>true
// console.log(+true)//=>1
// console.log(true+)

let a=3;
let b=++a;
// console.log(b);
// console.log(a);

// console.log("2">1)
// console.log("2"<1) string is converted to a number


// console.log(null>0)
// console.log(null==0) here <,>,>=,<= and == works different cpomparision operators convert null  to 0
// console.log(null>=0)

// console.log(undefined>0)
// console.log(undefined==0) 
// console.log(undefined>=0)

//strict check
console.log("2"===2)