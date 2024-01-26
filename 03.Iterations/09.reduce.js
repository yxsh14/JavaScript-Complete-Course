const myNums=[1,2,3,4]
const myTotal=myNums.reduce((acc,curr)=>{
    console.log(`acc:${acc} , curr:${curr}`)
    return acc+curr
},0)
console.log(myTotal);