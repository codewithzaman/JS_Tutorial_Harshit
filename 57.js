// map method
const numbers = [3,4,5,6];

// const square = function(number){
//     // return number*number; // use return in map method
//     console.log(number*number); // Donot use console.log in map method
// }

// const squareNumber = numbers.map(square);
// const squareNumber = numbers.map(function(number){
//     return number*number; 
// })
// const squareNumber = numbers.map((number)=>{
//     return number*number;
// })

// const squareNumber = numbers.map((number,index)=>{
//     return `index: ${index} , ${number*number}`;
// })
// const squareNumber = numbers.map((number,index)=>{
//     return index ;
// })


// console.log(squareNumber);

const users = [
    {FirstName:"Nader",age:34,gender:"male"},
    {FirstName:"Nafir",age:24,gender:"male"},
    {FirstName:"Nasir",age:34,gender:"male"},
    {FirstName:"Nasim",age:44,gender:"male"},
    {FirstName:"Nater",age:54,gender:"male"},

]

const userNames = users.map((user)=>{
    return user.FirstName;
})
console.log(userNames);