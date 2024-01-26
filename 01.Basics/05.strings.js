const name="yash";
const repo=50;
console.log(`My name is ${name} and have ${repo} repositries.`);

// console.log(typeof name); string
// console.log(name[0]);
// console.log(name.__proto__);

// console.log(name.length);


const gameName=new String("Yash Sahu"); // declaring like this is same as before basically it is invoking an object.
console.log(typeof gameName); //object
console.log(gameName[0]);S
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
const newString=gameName.slice(-8,4);
console.log(newString);

const newStringOne="         yasdf       ";
console.log(newStringOne.trim()); // remove extra spaces

const url="https://yash.com/yash%20sahu"; //%20 is basically a space.
console.log(url.replace('%20','-'));
console.log(url.includes('sunder'));

