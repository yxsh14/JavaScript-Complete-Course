// Suppose we don't wanna give access to password so we can show an alternative text when password property is accessed.

// Ever Class already have getter and setters but defaulty they have nothing in them 
class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    // jab koi property crate karte hain uska getter & setter ka method form ho jayega
    
    get password(){
        return `${this._password} dfasd`
    }
    set password(value){
        // this.password=value //agar hum set mai or constructor mai value set karte rahnge to Stack Limit Excceeded Error ayega qki dono race kar rahe honge same value change karne k liye isiliye humne hamare variable ka name _password kar diya.
        this._password=value
    }
}
const yash=new User("yash@gmail.com","123");
console.log(yash.password);


// Getter Setter in case of Function
function User1(username,password){
    this._username=username;
    this._password=password
    Object.defineProperty(this,'email',{
        get:function(){
            return this._username.toUpperCase
        },
        set:function(value){
            this.username=value
        }
    })
}

const yash1=new User1("yash1","11212");
console.log(yash1._password);
console.log(yash1._username);


