// for of loop in array

// const fruits = ["mango","apple","banana",'grapes'];
// for (let fruit of fruits){
//     console.log(fruit.toUpperCase());
// }
const fruits = ["mango","apple","banana",'grapes'];
const fruits2 = [];
for (let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);