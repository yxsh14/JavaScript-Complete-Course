function Sum(a, b){
    console.log(a+b)
}
const result=Sum(13,34);
console.log(result);
// a,b are parameters whereas 13,34 are arguments


function Sum1(a, b){
    return a+b
}
const result1=Sum1(13,34);
console.log(result1);

// rest operation when we don't know how many items are there as input parameter
function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(3));

function calculateCartPrice1(...num1){
    return num1;
}
console.log(calculateCartPrice1(232,234,456)); //will automatically to the array


