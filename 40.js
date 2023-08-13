// Spread Operator
 // spread operator in array

// const array1 = [1,2,3];
// const array2 = [5,3,4];

// // const newArray= [...array1,...array2]; This is a right method 
// // const newArray= [...array1,...array2,76,34];
// //  const newArray= [...array1,array2]; // This is a wrong method 
// // const newArray = [..."abc"]; // If we use spread operator before "abc" it will change into array of 3 elements
// // const newArray = [..."123456789"]; // string is iterable , array is iterable
// const newArray = [...123456789]; // number is not iterable

// console.log(newArray);
// spread operator in objects

const obj1 ={
    key1 : "value1",
    key2 : "value2",
}
// const obj1 ={
//     key1 : "value1",
//     key2 : "value2",
//     key1 : "value34"
// }
const obj2 ={
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4",
 }
// const newObj = {...obj1,...obj2}
// const newObj = {...obj2,...obj1, key5:"value5"}

// console.log(obj1);
// const newObject = {..."abcdef"};
// const newObject = {...["item1","item2"]};
const newObject = {..."abcdefghijklmnopqrstuvwxyz"}

console.log(newObject);

