// CallBack Functions // higher Order Function

// 
function myFunc(callBack){
    console.log("I am inside myFunc");
    callBack("nader");
}
// function myFunc2(){
//     console.log("Inside MyFunc2");
// }
function myFunc2(name){
    console.log("Inside MyFunc2");
    console.log(`my name is ${name} `);
}
// myFunc([1,2,3,4]);
// myFunc("abcdef");
// myFunc({Name:"Nader"});
myFunc(myFunc2);