/* Describe your own laptop as a JavaScript object. Try to think of
 as many properties as you can!
 
 Your object should contain: string , number , array , boolean


 object {}
 */

const laptop={
    hardware:{
        barand:'bell',
        ram:4,
        cpu:"cori7",
        heard:"1 trabit"
    },
    color:'red',
    software:['office','photoshap','coreldraw','visual stadio code',
    'visual stadio','sql'],
}
// console.log(laptop);

// console.log(laptop.hardware);
// console.log(laptop.hardware['barand']);//bell
// console.log(laptop.software[1]);//photoshap
// console.log(laptop.color);//red



// const kitten = {
//   ageMonths: 3,
//   isFemale: true,
//   furColour: "brown",
// };

// const { ageMonths, isFemale, furColour } = kitten;
// console.log(ageMonths, isFemale, furColour);

// spread 
function sum(z,y,x){
  return z+x+y;
}
const number=[1,2,3];
// console.log(sum(...number));

