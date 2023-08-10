// Use of Const for creating array
// const pi = 3.14;
// pi = 13; we can not change the value or assign new value to the constant it will create an error on console
// console.log(pi);
// heap memory ["mango","apple","banana"] 0x11
const fruits = ["mango","apple","banana"]; // 0x11
fruits = ["pineapple", 'peach']; // this will creat an error as we can not assign new value to constant
fruits.push("grapes");// push method can be used to add an element in an raay this is valid way
console.log(fruits);