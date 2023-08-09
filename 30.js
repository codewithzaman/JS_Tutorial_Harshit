// for loop in an array
let fruits = ["banana",'apple','orange','mango','grapes'];
let fruits2 = [];
// console.log(fruits.length);
// console.log(fruits[fruits.length-1]);
for(let i=0; i< fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);