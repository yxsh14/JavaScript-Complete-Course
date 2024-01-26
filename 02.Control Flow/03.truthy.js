const userEmail="h@hitest.ai"
if(userEmail){
    console.log("Got user email.");
}else{
    console.log("Don't have user email.");
}

// falsy Values
// false,0,-0, BigInt, 0n,"",null,undefined,NaN

// truthy Values
// "0", "false"," ",[],{},function(){}

// how to check if array is empty 
// arr.length==0

// const emptyObj={}
// how to check if object is empty
// Object.keys(emptyObj).length===0 

// Nullish Coalescing Operator (??): null defined
let val1;
// val1=5??10
// when the first value will be null second value will be automatically assigned to the val1
val1=null ?? 10

console.log(val1);

// Terniary Operator 
// condition ? true :false
let y=4;
let k=3==y ? `Equal`: "Not Equal";
console.log(k);
