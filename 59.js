// Reduce Method

// const numbers = [1,2,3,4,5];
// // aim : sum off all numbers in above array 
// const sum = numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator + currentvalue;
// })

// console.log(sum);

// const numbers = [1,2,3,4,5];
// // aim : sum off all numbers in above array 
// const sum = numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator + currentvalue;
// },100) // 100 will be initial value

// console.log(sum);

// accumulator   ,currentvalue    ,return
//     1               2              3
//     3               3              6
//     6               4              10
//     10              5              15

const userCart = [
    {poductId:1, productName:"Mobile", Price:12000},
    {poductId:2, productName:"Laptop", Price:11000},
    {poductId:3, productName:"Watch", Price:15000},
    {poductId:4, productName:"Ipad", Price:17000},
]

const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.Price;
},0)

console.log(totalAmount);