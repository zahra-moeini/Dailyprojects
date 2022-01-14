/* variables
counter variable(++ , -- , += ,-=)
let 
count
var (the old variable keyword)
*/
// ------let--------
// let x=4;
// x=8;
// console.log("x"+x);
// ------const------
// const y=5;
// y=3;
// console.log("y"+y);
// ------var------
// var z=2;
// z=4;
// console.log("z"+z);

// Block scope
//nested bloack scope  let  const

// if (true) {  //Block Scope
//     const j=0
// }
// console.log(j);

// let

// for (let i = 0; i <=0; i++) {
// // Block scope
// console.log(i);
// }

//   میتوانیم دسترسی پیدا کنیم  تویی محدوه هاvar ما با استفاده از کلمه 
// هم نمیتوانیم به محدوده تابع دسترسی پیدا کنیمvarحتی با  


// function sum(a,b){
//     //function scope
//     //  نمیتواند از بلوک فانکشن بیرون برودvar 
//     var output=a+b;
//     console.log(output);

//     x=8
// }
// console.log(sum(2,2));
// console.log(x);


// let g=4
// function sum(){
//     let total=5;
//     g=6
// }
//  sum();
// // console.log(total);
// console.log(g);

function sum(){
    total=8;
    let x=4;
    var y=5;
}
sum();
console.log(total);