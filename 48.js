// Functions inside function

// const app = ()=>{
//     const myFunc = ()=>{
//         console.log("Inside myFunc");
//     }
//     const addTwo = (num1,num2)=>{
//         return num1+num2 ;
//     }
//     const multiply =(num1,num2) => num1*num2;
//     console.log("Inside App");
// }
// app();

function app (){
    const myFunc = ()=>{
        console.log("Inside myFunc");
    }
    const addTwo = (num1,num2)=>{
        return num1+num2 ;
    }
    const multiply =(num1,num2) => num1*num2;
    console.log("Inside App");
    myFunc();
    addTwo(34,76); // this will not print a value on console due to return so we have to use console.log
    console.log(addTwo(34,76));
    multiply(23,34); // this will not print a value on console due to return so we have to use console.log
    console.log(multiply(23,34));
}
app();