let myDate= new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate);
console.log(myCreateDate.toDateString());

let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
let newDate=new Date()
console.log(newDate)
console.log(newDate.getHours);
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default',{
    weekday:"long"
})
);
console.log(newDate.toLocaleString('default',{
    weekday:"short"
})
);

