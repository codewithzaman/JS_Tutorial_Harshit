// Arrow Functions 

const birthDaySong = () => {
    console.log("Happy BirthDay To You");
}
birthDaySong;

let towPlusFour = ()=> {
       console.log(2+4);
}
towPlusFour;

const isEven =(number) =>{
if(number%2===0){
   return true;
}else{
   return false;
         }
 }
 isEven;

 const firstchar =(anystring) => {
       return anystring[0];
     }

     firstchar;

let findTarget = (array,target)=> {
    for(let i=0 ; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
        return -1;
    }
}