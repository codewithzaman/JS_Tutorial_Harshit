// how to iterate an object

// const person = {
//     name : "nader",
//     age :34,
//     "person hobbies":["reading","cooking","sleeping"],
// }
// // we use to method for loop in objects
// // for in loop
// for(let key in person){
//     console.log(key);
// }
const person = {
    name : "nader",
    age :34,
    "person hobbies":["reading","cooking","sleeping"],
}
// we use to method for loop in objects
// for in loop
for(let key in person){
    // console.log(person.key); // this will give undefined because it will not find a key with proerty named key 
    // console.log(person[key]); // this will print value only
    // console.log(`${key} : ${person[key]}`); // this will print value and key pair both
    console.log(key,":",person[key]);

}

// object.keys