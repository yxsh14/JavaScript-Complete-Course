const fetch = require("node-fetch");
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// We will learn how to create promises and how to consume already existing promises like fetch, then, catch ,finally

// First we will look into how to create a promise

const PromiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async 1 task is complete");
        // resolve();  this is manditory if we want to run then function after it 
    },1000);
    

    

})
PromiseOne.then(function(){
    console.log("Promise 1 Consumed");
})// This will not run untill we execute resolve inside Promise then is directly connected to resolve.




new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 completed");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved.");
})
  

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Yash", age:"22"}) // we can send data as an object in resolve

    },1000);
})
promiseThree.then(function(user){
    console.log(user);// this will give the same data that we entered in resolve
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if (!error){
            resolve({username: "Yash", age:"22"})
        }else{
            reject('ERROR: Something in the way')
        }
    },1000);
})
promiseFour.then(function(user){
    return user.username;
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("PromiseFour ran giving us resolve or reject."));

// Yaha hum chaining ya Thening kar rahe because jo pahla then return karega wo dusre then k input mai aa raha hoga 

const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if (!error){
            resolve({username: "javascript", age:"22"})
        }else{
            reject('ERROR: Something in the way')
        }
    },1000);
})
// promise handle karne ka dusra tarika hai async await esa nhi hai ki sirf then catch se hi kar skte hain handle

async function consumingPromiseFive(){
    try {
        const response=await promiseFive //PromiseFive is an object so we will consume it like this only
        console.log(response);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    
}
consumingPromiseFive();


// Now we will talk about fetch: It is basically an object which take an url for network request and returns a promise. 
// async function getMyDetails(){
//     try {
//         const response=await fetch('https://api.github.com/users/yxsh14');
//         const data=await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// getMyDetails();

// ANOTHER METhOD To DO the SAME THING:
fetch('https://api.github.com/users/yxsh14').then(function(response){
    return response.json();
}).then((data)=> console.log(data)).catch(function(err){
    console.log(err);
})

// Why the fetch is executing before all the other functions before it.
//  as we know that all the sync processes runs by a different queue and they will be entered in the call stack when their timeout or interval is over.
// but in case of 'fetch' a different queue is made it's called microtask queue or fetch queue or priority queue it will have more priority than async queue so it will run first.
// Sometimes when fetch takes long time some task of task queue with less priority can execute.


// Fetch runs in two parts the first part is a private field we can call it data has two arrays which we can't access
// Part One: 1. Onfulfilled[] 2.OnRejection[]
// Part Two: WebBrowser=>Network Request

// NOTE: jo bhi value network request se aayegi uska data Onfulfilled mai save hoga fir chahe error hi q na aaye waha se.
// NOTE: OnRejection mai data tab aayega jab fetch request jaane mai fail ho gai ho agar successful hai or api error de rahi to bhi Onfulfilled mai hi jayega data