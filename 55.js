// Function returning function // Higher Order Function

// function myFunc(){
//     return "a";

// }
// const ans = myFunc();
// console.log(ans);

// function myFunc(){
//     return [1,2,3];

// }
// const ans = myFunc();
// console.log(ans);

// function myFunc(){
//     return {name:"nader",age:34};

// }
// const ans = myFunc();
// console.log(ans);

// function myFunc(){
//     return 344;

// }
// const ans = myFunc();
// console.log(ans);

function myFunc(){
    function hello(){
        // console.log("Hello World");
        return "Hello world"

    }
    return hello;

}
const ans = myFunc();
// console.log(ans);
console.log(ans());
// const ans2 = ans();
// console.log(ans2);
