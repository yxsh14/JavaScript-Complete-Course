// const coding =["js","ruby","java","python","cpp"]
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values)
// It will not return any value but suppose if we want to return any particular value we are accessing using forEach then this method is failing

const myNums=[1,2,3,4,5,6,7]
// let nums=myNums.filter((num)=>num>4);
// console.log(nums);

// let nums=myNums.filter((num)=>(num>4));
// console.log(nums);

let nums=myNums.filter((num)=>{ return num>4}); //when we put {} we have to return the value by saying return it will not return explicitly
console.log(nums);
