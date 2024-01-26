// ES6
// class User{
//     constructor(username,email,password){
//         this.username=username,
//         this.email=email,
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abadfgf`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const yash=new User("yash","yash@gmail.com","1234");
// console.log(yash.encryptPassword());
// console.log(yash.changeUserName());

// Same thing as (Behind the scene ye ho raha hai)

function User(username,email,password){
    this.username=username,
    this.email=email,
    this.password=password
}
User.prototype.encryptPassword=function(){
    return `${this.password}abadfgf`
}
User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}
const yash=new User("yash","yash@gmail.com","1234");
console.log(yash.encryptPassword());
console.log(yash.changeUserName());