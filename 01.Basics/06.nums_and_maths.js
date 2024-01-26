const score=400;
console.log(score);
const balance=new Number(23);
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1)); //round of up to 1 decimal digit

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3)); 
const hundreds=1000000;
console.log(hundreds.toLocaleString()); // created it to be in use number system like '1,000,000'
console.log(hundreds.toLocaleString('en-IN')) ; // in indian number system

// *************** Math's *********************
console.log(Math); //object
console.log(Math.abs(-4));
console.log(Math.round(6.4));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));

console.log(Math.min(1,2,3,4,6));
console.log(Math.max(1,2,3,4,6));

console.log(Math.random()); // give a number between 0 and 1;
console.log((Math.random()*10)+1);

const min=10;
const max=20;
// if we want to generate the values btw 10 and 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

