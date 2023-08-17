// Important Array methods 

const numbers = [4,5,3,6];

function multiplyBy2(number,index){
    console.log(`index is ${index} and number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
}
// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);

for(let i =0 ; i < numbers.length ; i++){
    multiplyBy2(numbers[i],i);
}

// ForEach 

//Map 

//Filter

// Reduce