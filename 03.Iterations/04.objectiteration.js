const myObject={
    name:"yash",
    age:18,
    school:"Angelic"
}
for(const key in myObject){
    console.log(key+"-"+myObject[key]);
}

const map=new Map() 
map.set('IN','India')
map.set('USA','United States of America')
console.log(map);
// map is not iteratable by in
for (const key in map ){
    console.log(key);
}