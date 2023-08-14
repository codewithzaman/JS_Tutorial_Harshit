// objects inside an array
// very usefull in real world applications
const users = [
    {userid:1,firstName:"nader",gender:"male"},
    {userid:2,firstName:"zaman",gender:"male"},
    {userid:3,firstName:"zahida",gender:"female"},
    
]
console.log(users);
for(let user of users){
    // console.log(user);
    console.log(user.userid);
    console.log(user.firstName);
    console.log(user.gender);
}