// Function is a reusable code to do a task multiple times

// function birthDaySong(){
//     console.log("Happy BirthDay To You");
// }
// function towPlusFour(){
//     console.log(2+4);
// }
// dry dont repeat urself
// birthDaySong();
// birthDaySong();
// birthDaySong();
// birthDaySong();
// birthDaySong();
// towPlusFour();
// towPlusFour();
// towPlusFour();
// towPlusFour();
// towPlusFour();
// function towPlusFour(){
//     return 2+4;
// }
// // towPlusFour(); // this will not print any value
// // console.log(towPlusFour());
// const returnedValue = towPlusFour();
// console.log(returnedValue); 
// This is not reusable function 
// Function with Parameters will be reusable
// function SumTwoNumbers(number1,number2){
//         return number1+number2;
//     }
//     // const returnedValue = SumTwoNumbers(45,56);
//     // const returnedValue = SumTwoNumbers();// If we will not a value of parameters NaN will print on console
//     const returnedValue = SumTwoNumbers(undefined,undefined);
//     console.log(returnedValue);
    // function SumTwoNumbers(number1,number2,number3){
    //     return number1+number2+number3;
    // }
    // const returnedValue = SumTwoNumbers(45,56,46);
    // console.log(returnedValue);

    // isEven
    // input : 1 number
    // output : true ,false

    // function isEven(number){
    //         if(number%2===0){
    //             return true;
    //         }else{
    //             return false;
    //         }
    // }
    // console.log(isEven(5));
    // console.log(isEven(46));
//     function isEven(number){
//         if(number%2===0){
//             return true;
//         }
//         return false;
// }
// console.log(isEven(5));
// function isEven(number){
//    return  number % 2 === 0;
// }
// console.log(isEven(14));\
// function
// input : string
// output : firstcharacter
// function firstchar(anystring){
//     return anystring[0];
// }
// console.log(firstchar("xerox"));

// function 
// input : array, target (number)
// output : index of target if target present in array
function findTarget(array,target){
    for(let i=0 ; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
        return -1;
    }
}
const myArray = [34,4,43,55]
const ans = findTarget(myArray,55);
console.log(ans);