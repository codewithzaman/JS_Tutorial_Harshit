// block Scope vs Function Scope
// let and const are function scope
// var is block scope

// {
// let firstName = "Nader"; // { } this is a block
// const lastName = "Zaman"; // we can only access let and const inside the block if we want to access let and const outside the block it will create an error.
// console.log(firstName);
// console.log(lastName);
// }
// // console.log(firstName);
// // console.log(lastName);

// {
//     let firstName = "Zahid";
//     const lastName = "Khan"
//     console.log(firstName);
//     console.log(lastName);
// }
// let firstName = "shahid";
// console.log(firstName);

// {
//     var firstName = "Nader"; // we can access firstName outside the block when using Var as var has function or globle scope
// }
// console.log(firstName);
// {
// var firstName = "Zaman";
// console.log(firstName);

// }

// {
//     var firstName = "Khan";
//     console.log(firstName);
// }

    // {
    // var firstName = "Zaman";
    // console.log(firstName);
    
    // }
    
    // {
    //     console.log(firstName);
    // }

    // if(true){
    //     let firstName = "Nader";
    //     console.log(firstName);
    // }
    // console.log(firstName); //this will give error as let is used which is block scoped
    
    // if(true){
    //   var firstName = "Nader"; // this will pring firstname on console as Var is used which is goble scoped
    //     console.log(firstName);
    // }
    // console.log(firstName);
    // let fName = "garima"
    // function myApp(){
    //     if(true){
    //         let fName = "Harshit";
    //         console.log(fName);
    //     }
    //     console.log(fName);
    // }
    // myApp();
    // function myApp(){
    //     if(true){
    //         var fName = "Harshit";
    //         console.log(fName);
    //     }
    //     if(true){
    //         console.log(fName);
    //     }
    //     console.log(fName);
    // }
    // myApp();


