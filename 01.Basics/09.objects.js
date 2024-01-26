//singleton (contructor se banega)
// Object.create

// object literals 

// defining a symbol
mySym=Symbol("k1");
const JsUser={
    name:"yash",
    "fullname":"yash sahu",
    age:23,
    [mySym]:"k2",
    location:"Jabalpur",
    email:"yash@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname); 
// console.log(JsUser["fullname"]);
// console.log(typeof JsUser[mySym]);
JsUser.email="yash12@gmail.com"; //email will change with this (so we can update any property)
// if we don't want object values to be changed we can freeze object 

 // Object.freeze(JsUser);
// JsUser.email="yash1345@gmail.com"; //not give error but also not change the value bcoz object is freezed.

JsUser.greeting=function(){
    console.log("hello JS User");
}

console.log(JsUser.greeting()); //hello JS User

console.log(JsUser.greeting); //[Function (anonymous)]
JsUser.greeting2=function(){
    console.log(`Hello JS user ${this.name}`); //this is used to access the property of object in the same object's function
}

console.log(JsUser.greeting2());