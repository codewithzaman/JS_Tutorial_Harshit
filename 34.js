// for in loop in array

// const fruits = ["mango","apple","banana",'grapes'];
// const fruits2 = [];
// for (let index in fruits){
//     console.log(fruits[index]);
// }
const fruits = ["mango","apple","banana",'grapes'];
const fruits2 = [];
for (let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);