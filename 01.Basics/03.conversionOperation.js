let score=33;
console.log(typeof score)

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


let score1="123@34";
let valueInNumber1=Number(score1);
console.log(typeof valueInNumber1); //this will give number but the value will give NaN not a number so this is a problem of js we have to make sure that we don't make mistake while converting data comming from any api later.
console.log(valueInNumber1);

let score2=null;
let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2); // similarly it will convert the value to 0.
console.log(valueInNumber2);

let score3=undefined;
let valueInNumber3=Number(score3); 
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// "33" => 33
// "33abc"=> NaN
//  true => 1
// 1=> true
// 0 => false
// "" => false
// "YAsh" => true



// *************************** OPERATION ****************

let value=3;
let negval=-value;
console.log(negval);

console.log(2+2);
console.log(2**3); //power
let str1="hello ";
let str2="Yash";
console.log(str1+str2);
console.log("1"+2);
console.log(1+"2");
console.log(2+1+"2");
console.log("1"+2+3);

 
/* Increment (++)
The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.*/
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);  
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"