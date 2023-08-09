// primitive Vs reference data types

// primitive // data stores in a stack
// number ,string, boolean , null and undefined
// let num1 = 6;
// let num2 = num1;
// console.log("Value of num1 is ", num1);
// console.log("Value of num2 is ", num2);
// num1++
// console.log("Value of num1 is ", num1);
// console.log("Value of num2 is ", num2);

// reference types
// arrays objects and functions
let array1 = ["item1","item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("array1",array1);
console.log("array2",array2);
