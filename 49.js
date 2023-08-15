// Lexical Scope

// function myApp (){
//     const myVar = "value1";
//     function myFunc(){
//         // const myVar = "value59" // JS will check myVar inside the myFunc function if it is not present inside myfunc but myfunc is decleared inside myapp function lexical environement so myVar inside the myApp function will be called inside myfunc. 
//         console.log("Inside myFunc",myVar);
//     }
//     const myFunc2 = function(){}
//     const myFunc3 = ()=>{}
//     console.log(myVar);
//     myFunc();
// }
// myApp();
const myVar = "value1"; // myVar is decleared outside the myApp function.
function myApp (){
    // const myVar = "value1";
    function myFunc(){
        const myFunc2 = function(){
            console.log("Inside myFunc",myVar);
        }
        myFunc2();
        // const myVar = "value59" // JS will check myVar inside the myFunc function if it is not present inside myfunc but myfunc is decleared inside myapp function lexical environement but myVar is also not decleared inside myApp. myVar is decleared ouside the myApp in the globle scope so myVar will be called from the globle scope outside the myApp as myApp is present inside the globle scope. this is called lexical environment or scope chaining. 
        
    }
    
    const myFunc3 = ()=>{}
    console.log(myVar);
    myFunc();
}
myApp();
