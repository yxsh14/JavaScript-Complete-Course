class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    // kabhi kabhi esa hota hai ki hum kis method ka access is class se instantiate huye har object ko nhi dena chahte ese case mai hum 'static ka use karte hain
    static createId(){
        return '123';
    }

}
const yash=new User("yash");
// console.log(yash.createId()); 
//without static output 123
// with static output TypeError: yash.createId is not a function

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new Teacher("Iphone","i@phone.com")
console.log(iphone.createId()); //TypeError: yash.createId is not a function