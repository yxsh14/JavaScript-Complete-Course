// Immediately Invoked Function Expression
//jese hi function bana hai uske immediate hi usko access karna 
// global scope se child function mai pollution na ho isliye bhi use karte hai 

function chai(){
    console.log(`DB CONNECTED`);
}
chai();
// can also be written as 

(function chai(){
    console.log(`DB CONNECTED`);
})();
// () first will give a seperate block to form a function and second () will execute the function 

// (()=>{})() to stop a iife function we have to add semi colon at the end 
console.log(this);