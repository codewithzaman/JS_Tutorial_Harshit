// Template string
let age = 22 ;
let firstName = "Nader";
// "My name is nader and my age is 22"
// let aboutMe = " My Name is "+ firstName + " and My age is  " + age; // using concatination method by using + 
let aboutMe = `My name is ${firstName} and my age is ${age}`; // By using template string or ~ ~ to concatinate variables
console.log(aboutMe);