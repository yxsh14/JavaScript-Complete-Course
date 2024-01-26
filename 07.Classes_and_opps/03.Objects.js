function multiplyBy5(num){
    this.num=num;
    return num*5;
}
// this.num will save input num's value in prototype of a function
// So we can say function is also an object atleast we can say it is built from an object.

multiplyBy5.power=2 //it's like accessing a property of an object
console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); //{}


function createUser(username,score){
    this.username=username,
    this.score=score
}
// Agar function ek object hai to kya hum usme new functionalities daal sakte hain
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai= new createUser("Chai",20);
const tea=new createUser("tea",230);
chai.increment();
chai.printMe();
tea.printMe();
