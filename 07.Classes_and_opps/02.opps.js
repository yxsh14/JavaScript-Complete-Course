const user={
    username:'Yash',
    logInCount:8,
    signedIn:true,
    getUserDetails: function(){
    console.log('Got user details from database')
    console.log(`Username: ${this.username}`)
    console.log(this); //gives current context
} //This is called object literal
}

// console.log(user.username);
// console.log(user.getUserDetails());

// new is used to create a new context and it is also used as constructor function 


function User(username, loggedIn, password){
    this.username=username, //this.username se jo new instance hum create karenge uske username ki value wo ho jayegi jo argument mai pass ki hai.
    this.loggedIn=loggedIn,
    this.password=password
}
const userOne=User("Yash",true,"34342");
const userTwo=User("Nishant",false,"34dggd342");
console.log(userOne);
console.log(userTwo);

// We'll see the same instance is overwritten again and again 
// Thus we'll use new to create new instance of function everytime.

const userThree= new User("Yash",true,"34342");

const userFour= new User("Nishant",false,"34dggd342");
console.log(userThree);
console.log(userFour);

// Jab new use karenge to ek new instance create hoga basically ek empty object initalise hoga.
// new k karan ek constructor function call hota hai new keyword k karan or sare argument usme inject ho jate hain.