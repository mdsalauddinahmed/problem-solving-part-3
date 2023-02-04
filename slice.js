const friends =[14,15,25,85,25,48,36,95]
const partial = friends.slice(2,5);
const partial2 = friends.splice(2,5);
const partial3 = friends.splice(2,5,32,34,577);
console.log(partial)
console.log(friends)
console.log(partial2)
console.log(partial3)
// slice is a array which remove from parent array;
// splice is a array which is remove array and add element new array;