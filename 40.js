// Spread Operator
 // spread operator in array

const array1 = [1,2,3];
const array2 = [5,3,4];

// const newArray= [...array1,...array2]; This is a right method 
// const newArray= [...array1,...array2,76,34];
//  const newArray= [...array1,array2]; // This is a wrong method 
// const newArray = [..."abc"]; // If we use spread operator before "abc" it will change into array of 3 elements
// const newArray = [..."123456789"]; // string is iterable , array is iterable
const newArray = [...123456789]; // number is not iterable

console.log(newArray);