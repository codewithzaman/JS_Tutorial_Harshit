// Function Expression -- if we write a function with in a variable using let const var it will be a function expression.
//  function birthDaySong(){
//     console.log("Happy BirthDay To You");
// }
const birthDaySong =function (){
    console.log("Happy BirthDay To You");
}
birthDaySong();

let towPlusFour=function (){
       console.log(2+4);
}
towPlusFour();

const isEven = function (number){
if(number%2===0){
   return true;
}else{
   return false;
         }
 }
 isEven();

 const firstchar= function (anystring){
       return anystring[0];
     }

     firstchar();

let findTarget =  function (array,target){
    for(let i=0 ; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
        return -1;
    }
}