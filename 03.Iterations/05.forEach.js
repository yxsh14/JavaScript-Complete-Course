const coding =["js","ruby","java","python","cpp"]

coding.forEach(function(item){
    let k=item+"kadf"
    console.log(k);
})
// when we pass function as parameter in another function it is known as call back function 

function PrintMe(item){
    console.log(item)
}
coding.forEach(PrintMe); // we have to give the reference of the parameter

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding=[
    {
        lang:"C++",
        langFile:"cpp"
    },
    {
        lang:"javascript",
        langFile:"js"
    },
    {
        lang:"Python",
        langFile:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.lang,item.langFile);
})