// Important Array methods 

const numbers = [4,5,3,6];

// function multiplyBy2(number,index){
//     console.log(`index is ${index} and number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
// }
// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);

// for(let i =0 ; i < numbers.length ; i++){
//     multiplyBy2(numbers[i],i);
// }

// ForEach
// numbers.forEach(multiplyBy2);
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// })
// numbers.forEach(function(number){
//     console.log(number*2);
// })

const users = [
    {FirstName:"Nader",age:34,gender:"male"},
    {FirstName:"Nafir",age:24,gender:"male"},
    {FirstName:"Nasir",age:34,gender:"male"},
    {FirstName:"Nasim",age:44,gender:"male"},
    {FirstName:"Nater",age:54,gender:"male"},

]
// users.forEach(function(user){
//     console.log(user.FirstName);
// })
users.forEach((user)=>{
    console.log(user.FirstName);
})
// for(let user of users){
//     console.log(user.FirstName);
// }

//Map 

//Filter

// Reduce