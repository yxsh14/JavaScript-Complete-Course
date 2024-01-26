const newObj=new Object();
console.log(newObj);

const newObj2={};
console.log(newObj2);
// Both are same only difference between the two is newObj is singleton where as newObj2 is not singleton.

// Merging of two object

const obj1={1:"a",3:"c"}
const obj2={2:"b",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3);
const obj4=Object.assign({},obj1,obj2)
console.log(obj4);
const obj5={...obj1,...obj2} //merging two objs by seperator
console.log(obj5);

console.log(Object.keys(obj5));// return an array of all the keys
console.log(Object.values(obj5));


const course={
    courseName:"js",
    coursePrice:234,
    courseInstruct:"yash",
}
// console.log(course.courseInstruct);
// anothor favourable method
const {courseInstruct}=course
console.log(courseInstruct);
const {courseInstruct:i}=course
console.log(i);