// Filter Method

const numbers = [1,3,4,6,2,5,3,4];

// const isEven = function(number){
//     return number%2===0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// const isOdd = function(number){
//     return number%2!==0;
// }

// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// const isEven = function(number){
//     return number%2===0;
// }

// const evenNumbers = numbers.filter((number)=>{
//     return number%2===0;
// });
// console.log(evenNumbers);

const oddNumbers = numbers.filter((number)=>{
    return number%2!==0;
});
console.log(oddNumbers);