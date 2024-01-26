const accountId=123;
let accountEmail="yash@gmail.com";
var accountPassword="234234";
accountCity="Jaipur"; //ese bhi define kar skte but not a recommended way of doing things.
let accountState; //will be undefined for now 


// accountId=2; //not allowed
console.log(accountId);
/*
Prefer not to use var bcoz of issue in block scope
and functional scope. anything which has '{}' is scope.
So let is introduced.
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

