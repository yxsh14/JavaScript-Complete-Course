class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username) //We have already setted the username
        this.email=email,
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const yash=new Teacher("yash","yash@gmail.com","123")
yash.addCourse();
const stark=new User("Tony");
stark.logMe();
console.log(yash instanceof Teacher);
console.log(yash instanceof User);

