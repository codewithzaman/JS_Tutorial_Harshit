// default Parameters 
// function addTwo(a,b){
//     return a+b
// }
// const ans = addTwo(4,7);
// console.log(ans);

// function addTwo(a,b){
//     return a+b
// }
// const ans = addTwo(4); // if we dont pass value of b console will give NaN
// console.log(ans);
// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b
// }
// const ans = addTwo(4);
// console.log(ans);

// function addTwo(a,b=0){ // here b =0 is default value of b 
//          return a+b
//      }
// const ans = addTwo(4); 
// console.log(ans);
function addTwo(a,b=0){ // here b =0 is default value of b 
    return a+b
}
const ans = addTwo(4,8); 
console.log(ans);