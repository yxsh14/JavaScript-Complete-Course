// // for of 
// const arr=[1,2,3,4,5]
// for (const ir of arr) {
//     console.log(ir);
// }

// const obj={
//     name:1,
//     age:2,
//     dep:3,
//     we:4
// }
// for (const i of Object.keys(obj)){
//     console.log(i);
// }
// const str="fasdfk"
// for (const s of str) {
//     console.log(s);
// }

// Maps
const map=new Map() //value unique hogi or usi order mai entries hongi 
map.set('IN','India')
map.set('USA','United States of America')
// console.log(map);
// for (const key of map ){
//     console.log(key);
// }
for (const [key,value] of map ){
    console.log(`${key} : ${value}`);
}

