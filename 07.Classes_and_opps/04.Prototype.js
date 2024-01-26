// let myName="YASh     ";
// console.log(myName.truelength)
// I want to create a method name truelength jo iski real length nikaal kr de de 
// Yaha hum seekhenge ki khudke method bana kar unko kese ek existing object ke prototypes mai push karenge


// But we know that sare Datatypes Jese String, function, array sab Object se hi ho kar jate hain to q na hum object k prototype mai add karden ye method 




let myHeros=["thor","spiderman"]
let heroPower={
    thor: "hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }

}
Object.prototype.yash=function(){
    console.log("I can access Yash Method");
}
myHeros.yash();
heroPower.yash();
Array.prototype.HiYash=function(){
    console.log("I have access to HiYash method");
}
myHeros.HiYash();
// heroPower.HiYash(); gives error 

// INHERITANCE
const User={
    name: "yash"
}
const Teacher={
    makeVideo:true,
}
const TeachingSupport={
    isAvail:false
}

// Suppost if we want to link two or more object to share their properties we will do this by __proto__ what it does is it will add all the properties to this object

const TASupport={
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__:TeachingSupport,
}
//TASupport will have all the properties of TeachingSupport

Teacher.__proto__=User
// Teacher can use all the properties of User

// New way of doing the same thing although peeche same chezz ho rahi 
Object.setPrototypeOf(TeachingSupport,Teacher) //Teacher ki sari properties access kar payega 


let myName= "yash    ";
String.prototype.truelength=function(){
     console.log(`${this}`);
     console.log(this.trim().length);
     
}
myName.truelength();
" Yasd k".truelength();


