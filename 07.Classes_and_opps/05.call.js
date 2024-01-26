// This function we are using to check if the username already exists or not
function SetUsername(username){
    // complexDB calls
    this.username=username
    console.log("called");
}
function createUser(username, email,password){
    // SetUsername(username); // Although SetUsername is running but after the execution of the function the context of the execution is lost that means this of SetUsername is deleted we have to save it to use it in createUser
    SetUsername.call(this,username); // yaha call use karne se setUsername ka context createUser k context mai aa jayega delete nhi hoga.
    this.email=email
    this.password=password
    
}
const yash=new createUser("yash","yash@g.com","sdfasd");
console.log(yash); //called // createUser { email: 'yash@g.com', password: 'sdfasd' }


//  To do that we'll use call :The call() method of Function instances calls this function with a given this value and arguments provided individually.
