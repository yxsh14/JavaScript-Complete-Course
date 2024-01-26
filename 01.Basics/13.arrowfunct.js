// this is used for current context
const user={
    username:"yash",
    welcome: function(){
        console.log(`${this.username}, welcome to the website.`)
        console.log(this); //will print current context
    },
    
}
console.log(user.welcome()); //yash
// user.username="lalit"
// console.log(user.welcome()); //lalit
// console.log(this);


// function chai(){
//     let name="yash"
//     console.log(this.username);

// }
// chai() //This will give us result undefined bcoz 'this' is used in object not in functions.

// const chai=function(){
//     let name="yash"
//     console.log(this.username);
// }
// chai()
// const chai=()=>{
//     let name="yash"
//     console.log(this.username);
// }
// chai() //As arrow function is also a function so this will give undefined


// const addTwo=(a,b)=>{
//     return a+b
// }

// implict return return lagane ki zarurat nhi hai bs itna hi hai
// const addTwo=(a,b)=> a+b
// const addTwo=(a,b)=> (a+b) //another way 
// console.log(addTwo(12,3));