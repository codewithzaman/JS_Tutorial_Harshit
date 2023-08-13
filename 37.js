//difference between dot and bracket notation
// const person = {
//     name : "nader",
//     age :34,
//     hobbies:["reading","cooking","sleeping"]
// }
// console.log(person);
// how to access data from objects
// console.log(typeof person);
// console.log(person.name); // accessing property of an object using dot notation
// console.log(person["name"]); // accessing property of an object using bracket notation , in js key is by default in string so we have to use qouats.
// // console.log(person.age);
// console.log(person["age"]);
// // console.log(person.hobbies);
// // person.gender = "male"; // using dot notation
// person["gender"] = "female"; // using bracket notation
// console.log(person);
const key = "email";
const person = {
    name : "nader",
    age :34,
    "person hobbies":["reading","cooking","sleeping"] // we can not use spaces in js it will create an error so we will write it into a string or using qouts
} // keys are single word 
// console.log(person["person hobbies"]); // we will use bracket notation here to access 2 word keys we can not use dot notation to access the property or key of an object.
// person.key = "nader@gmail.com"; // we can not get key = email by using dot method
// person["key"] = "nader@gmail.com"; // we can not get key = email by using bracket method and wrapping key with qoutes
person[key] = "nader@gmail.com"; // we can  get key = email by using bracket method and without wrapping key with qoutes.
console.log(person);