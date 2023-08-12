// array destructuring
// const myArray = ["value1","value2","value3"];
const myArray = ["value1","value2","value3","value4"];
// let myNewArray = myArray.slice(2);

// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("Value of myVar1",myVar1);
// console.log("Value of myVar2",myVar2);

// let [myVar1,myVar2,myVar3] = myArray;
let [myVar1,,myVar2,...myNewArray] = myArray;


console.log("Value of myVar1",myVar1);
console.log("Value of myVar2",myVar2);
// console.log("Value of myVar3",myVar3);
console.log("Value of myNewArray is", myNewArray);
