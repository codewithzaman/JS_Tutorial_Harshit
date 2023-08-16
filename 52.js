// Rest Parameters

// function myFunc(a,b,c){
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     console.log(`value of c is ${c}`);
// }
// myFunc(5,3,7);

// function myFunc(a,b,...c){ // ...c is rest parameter
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     // console.log(`value of c is ${c}`);
//     console.log(`value of c is`, c);
// }
// myFunc(5,3,7,43,5,6,74,54); // value of a and b will be 5 and 3 and rest values 7,43,5,6,74,54 are values of c by using rest (...) parameter

// function addAll ( ...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// addAll(2,3,344,5,65,6,67,7)

function addAll(...numbers){
let total =0;
for(let number of numbers){
    total = total+number;
}
return total;
}
const ans = addAll(1,2,3,4,5,6,7,8);
console.log(ans);