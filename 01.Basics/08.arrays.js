const myArr=[0,1,2,3,5,true,"Yash"]
console.log(myArr[3]);
// array creates shallow copies

const myHeros=["Iron","captain"]
console.log(myHeros.length);
myArr.push(6);
console.log(myArr);
myArr.pop(6);
console.log(myArr);

myArr.unshift(8);// add at zeroth index
console.log(myArr);
myArr.shift(); //takes no input and remove the 0th index

console.log(myArr);
console.log(myArr.includes(9)); //boolean
console.log(myArr.indexOf(3)); //-1 or index based of if it's present or not

console.log(myArr.join()) // creating a string out of all the elements of array 

console.log(myArr);


// slice, splice
const ma1=myArr.slice(1,3); // give us value of index1 to index3(excluded)
console.log('A',ma1);
console.log('array after slice',myArr);
const ma2=myArr.splice(1,3); //give the same result but it will remove index1 to index3(included) from original array
console.log('B',ma2);
console.log('array after splice',myArr);



// array methods
const arr1=[1,2,3,4,5]
const arr2=[6,7,9]
// arr1.push(arr2) // put arr2 as an element in arr1

// const newarr=arr1.concat(arr2); // concat arr2 and arr1 and we have to store it in a new array;
// console.log(newarr);

// Method preferred by developers 
const arr3= [...arr1,...arr2];
console.log(arr3);
const arr4=[1,2,3,4,[1,2,3,[13,14,15]]];
const newarr=arr4.flat(1); //1 represent the depth we can change the depth and see the results
console.log(newarr);

console.log(Array.isArray("yash")); //false
console.log(Array.from("Yash"));
console.log(Array.from({name:"yash"})); //give empty array because it doesn't know if it should create a array of keys or values
console.log(Array.of("Yash"));


