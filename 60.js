// sort method
// ASCI Table
// char : asci Value

// '0':48
// '1': 49
// '2': 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// ':' : 58
// '; : 59
// '<' : 60
// '=' : 61
//'>' : 62
// '?' : 63
// '@' : 64

// 'A': 65
// 'B' : 66
// 'C' : 67
// 'D': 68
// 'E': 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K': 75
// 'L': 76
// 'M' : 77
// 'N' : 78
// '0' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S': 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X': 88
// 'Y' : 89
// 'Z' : 90

// '[': 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96
// 'a': 97
// 'b' : 98
// 'c': 99
// 'd' : 100
// 'e': 101
// 'f': 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r': 114
// 's': 115
// 't' : 116
// 'u': 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{': 123
// '/' : 124
// '}' : 125

// Sort 

// 5,9,1200,400,3000
// 5,9,400,1200,3000 (Expected)
// const numbers = [5,9,1200,400,3000];
//["5","9","1200","400","3000"];
//[53,57,49,52,51] //ASCI values of above array


// Js will sort this rray as a string not as a number . To sort a string we use ASCI Code. JS will pick only first character of the string and see the ASCI code of the 1st Character as in 1200 js will see only ASCI code of 1 it will leave the remaining 120. 
// '0':48
// '1': 49
// '2': 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// numbers.sort();
// console.log(numbers);

// const userNames = ["Saber","Babar","abcd","Nader","Haider","aabc"]; // first capital letters sorting will be done then small letters
// userNames.sort();
// console.log(userNames);
const numbers = [5,9,1200,400,3000]; // using call back functions in sor method
//  numbers.sort((a,b)=>{
//     return a-b ;
//  })
// numbers.sort((a,b)=>a-b);
    // console.log(numbers);
    // 1200,410
    // a-b ===> 1200-410 = 790
    // a-b ===> positive (greater then zero)
    // 410 , 1200
    // a-b ===> negative ==> a,b
    // 5,9 =>> -4 

numbers.sort((a,b)=>{
    return b-a ;
 })
 console.log(numbers);
 









 