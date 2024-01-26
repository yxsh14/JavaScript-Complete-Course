const myNum=[1,2,3,5]
//const newNums=myNum.map((num)=>{return num+10})
// console.log(newNums)

// Chaining:using more than one method in one tym

// const newNums=myNum.map((num)=>num*10).map((num)=> num+1)

// console.log(newNums)

const newNums=myNum.map((num)=>num*10).map((num)=> num+1).filter((num)=> num>=40);
console.log(newNums)
