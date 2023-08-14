// Nested De Structuring
const users = [
    {userid:1,firstName:"nader",gender:"male"},
    {userid:2,firstName:"zaman",gender:"male"},
    {userid:3,firstName:"zahida",gender:"female"},
    
]
// const [user1,user2,user3] = users; // this will give full objects
// console.log(user1);
const [{firstName:pehlaName,userid},,{gender}]= users;
// console.log(firstName);
console.log(pehlaName);
// console.log(gender);
// console.log(user2);
// console.log(user3);
console.log(userid);
