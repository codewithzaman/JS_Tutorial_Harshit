// objects destructuring
const band = {
    bandName : "led zepline",
    famousSong : "Stairway to heaven",
    year : 1970,
    author : "Anthoney"
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,famousSong);
// console.log(bandName);
// console.log(famousSong);
// console.log(band); 
// const {bandName,famousSong} = band; 
// let {bandName,famousSong} = band; 
let {bandName:var1,famousSong:var2} = band;
let {bandName,famousSong,...restProps} = band; 
famousSong = "Love me like you do"
console.log(famousSong);
console.log(var1,var2);
console.log(restProps);
