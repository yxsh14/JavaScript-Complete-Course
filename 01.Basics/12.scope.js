
// {} is scope basically
if (true){
    let a=10
    const b=20
    var c=30
}
// console.log(a); //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
console.log(c); //30
const arr=[1,2,3]
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


// DOM= Document Object Model

function one(){
    const username="yash"
    function two(){
        const website="Trenders"
        console.log(username);
    }
    two()
}
one()

console.log(addOne(5)); //give 6
function addOne(num){
    return num+1;
}
console.log(addTwo(5)); //give error because of hoisting we are accessing a value before it's initailization

const addTwo=function(num){
    return num+2
}
