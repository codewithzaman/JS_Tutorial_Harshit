// Arrow Functions 

const birthDaySong = () => {
    console.log("Happy BirthDay To You");
}
birthDaySong;

let towPlusFour = ()=> {
       console.log(2+4);
}
towPlusFour;

const isEven =number =>{  // if a single parameters u can remove brackets
if(number%2===0){
   return true;
}else{
   return false;
         }
 }
 isEven;

 const firstchar = anystring => anystring[0];
    firstchar (); // If there is single parameter u can also remove curly and small brackets

let findTarget = (array,target)=> {
    for(let i=0 ; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
        return -1;
    }
}