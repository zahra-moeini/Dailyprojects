// let laptop = {
//   brand: "Lenovo",
//   screenSize: 13,
//   isTouchscreen: true,
//   colors: ["spaceGray", "black", "white"],
//   spec: {
//     owner: "vahid",
//     age: 24,
//     height: undefined,
//   },
// };

// console.log(laptop.colors[1][0])//b
// console.log(laptop.spec['age']);//24
// console.log(laptop['spec'].age);//24
// console.log(laptop['spec']['age']);//24
// console.log(laptop.spec.age);//24
// console.log(laptop['colors'][2])//white

// const mystery='snswer'
// const num=21;
// const inversOfPl=1/Math.PI;
// // console.log(inversOfPl);

// const jasem={
//     p1:10,
//     p2:20,
//     f1(){},//fanction declaration
//     f2:()=>{},
//     [mystery]:21,
//     inversOfPl
// }
// console.log(jasem[mystery]);//21
// console.log(jasem.inversOfPl);//0.3183098861837907

// const x=function(){
//     console.log("X",this);//window
// }
// x();

// const x = () => {
//   console.log(this);//window
// };
// x();


// const jasem={
//     answer:21,
// };
// console.log(jasem.answer);//21
// رو یکی یکی نشون بده arrayتمام ایندکس های این 
// console.log([1,2,3].map(n=> console.log(n)));

// const testerObj = {
//   func1: function () {
//     console.log("func1", this);
//     //func1 =>object
//     //func1
//     //func2
//     //jasem
//   },
//   func2: () => {
//       console.log("funccc2",this);//window
//   },
//   jasem: {
//       jasem1: function () {
//         console.log("executed form jasem1", this);
//         //executed form jasem1 =>object
//         //jasem1
//         //jasem2
//         //zahraa
//       },
//       jasem2: () => {
//         console.log("funcccc", this); //window
//       },

//       zahraa: {
//         zahra1: () => {
//           console.log("zahra", this);//window
//         },
//       },
//   },

// };

// console.log(testerObj.func1());//undefined
// console.log(testerObj.func2());
// console.log(testerObj.jasem.jasem1());
// console.log(testerObj.jasem.jasem2());
// console.log(testerObj.jasem.zahraa.zahra1());

// function sum(x,y,z){
//     return x+y+z;
// }
// const numbers=[1,2,3];
// console.log(sum(...numbers));

// let numberStore=[0,1,2];
// let newNumber=12;
// console.log(numberStore=[...numberStore,newNumber]);
// array
// 0:0
// 1:1
// 2:2
// 3:12
// length:4

// function myfunction(x,y,z){
//     return x+y+z
// }
// let args=[0,1,2];
// myfunction(...args);

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }
// // console.log(max(4, 1, 9, -2));

// let numbers=[5,1,7];
// console.log(max(...numbers));

// let words=['never','fully'];
// console.log(["will", ...words, "understand"]);
// let string=['str2','str3','str4','str5'];
// console.log('str1',...string,'str6');


// const kitten={
//     ageMonths:3,
//     isFemale:true,
//     furColour:"brown",
// };
// console.log(kitten);
// const {ageMonths,isFemale,furColour}=kitten;
// console.log(ageMonths, isFemale, furColour);//3 true brown


// console.log(kitten.ageMonths, kitten["isFemale"], kitten["fur" + "Colour"]);//3 true brown

// keys
// const years={
//     1999:'good',
//     2000:'bad',
// };
// console.log(years["1999"]);//good
// console.log(years[1999]);//good

// const dumb={
//     true:"dat",
//     null:"jafar",
// };
// console.log(dumb[true]);//dat
// console.log(dumb['true']);//dat

// const person={
//     firstName:'zahra',
//     lastName:"moeini",
//     age:21,
// }
// console.log(person.firstName);//zahra
// console.log(person["firstName"]);//zahra
// console.log(person["first"+"Name"]);//zahra

// let num="age";
// //age=21  num=21
// let firstName=`${num}`;
// //firstname=num
// console.log(person[firstName]);
// // firstname=21

// const restaurant={
//     name:"brother's of rahmani except jafar",
//     address:`${Math.floor(Math.random()*100+1)}shah yad ave`,
//     city:"tehran",
//     state:'persia',
//     zipcode:'99999',
// }
// const { address, city, state, zipcode } = restaurant;
// // console.log(address, city, state, zipcode);
// const fulladdress=[address,city,state,zipcode];
// console.log(...fulladdress);

// const phone={
//     brand:'iphone',
//     model:'iphone X',
//     launchyear:2017,
//     isUnloacked:true,
// };
// phone.brand="Apple";
// const phonebrand=phone.brand;
// const phoneLaunchYear=phone['launchyear'];
// console.log(phonebrand);
// console.log(phoneLaunchYear);



// const dog={
//     name:"billy",
//     wantsToPlay:false,
// };

// dog.name="Rex";
// dog.wantsToPlay=true;

// console.log(dog.name);
// console.log(dog.wantsToPlay);

// const laptop={
//     brand:"lenovo",
//     screenSize:21,
// };

// laptop.colourrs="space Gray";
// laptop.touchScreen=false;
// laptop.owner="zahra";
// laptop.brand="Apple"
// console.log(laptop);


// const kitten1={
//     name:"zahramoeini",
//     weeksOld:2,
// };

// const kitten2={
//     name:"shilamoeini",
//     weeksOld:1,
// };

// const kitten3={
//     name:"billyNoPv",
//     wesksOld:5,
// };

// const kittens=[kitten1,kitten2,kitten3];
// console.log(kittens);
// console.log(kittens[0].name);

// let stringnam="zahra moeini";
// function handleAnimal(){
//     stringnam = "scorpionfish";
//     console.log(stringnam);
// }
// console.log(stringnam);//zahra moeini
// handleAnimal()//بعد که این فانکشن رو اجرا کرد میره داخل فانکشن مقدارش تغییر میکنه 

// let redius=8;

// //block scope
// if(redius===8){
//     var PI=3.14;
//     var msg="hi";
//     console.log(msg);//hi
// }
// console.log(redius);//8
// console.log(PI);//3.14
// console.log(msg);//hi

// for (var i = 0; i < 5; i++) {
//   // BLOCK SCOPE
//   var msg = "jasem is not a name, it is a culture.(benyamin(ع))";
//   console.log(msg);
// }
// console.log("this is outside the block scope:", msg);
// console.log(i);


//  از فانکشن بیرون نیمادvar
// function smum(a,b){
//     var result=a+b;
//     x=4
// }
// console.log(smum(4,2));
// console.log(result);
// for (let i = 1; i <=5; i++) {  
// }
// console.log(i);
//let block scope
//از پایان بلاکش دیگ بیرون نمیاد
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }


//lexical
// function bankRobbery() {
//   const heros = ["spiderman", "batman", "superman"];
//   console.log("bankRobbery", heros);
//   //   Array(3)
//   //   0:spiderman
//   //   1: batman
//   //   2:superman
//   //   length: 3
//   function whoHelps() {
//     const hero = heros[1];
//     console.log(hero); //batman

//     function whoWins() {
//       const winner = "Superman";
//       console.log("whoWins: ", heros);
//       // 0: "spiderman"
//       // 1: "batman"
//       // 2: "superman"
//       // length: 3
//       console.log("whoWins: ", hero); //whoWins:  batman
//       console.log("winner: ", winner); //winner:  Superman
//     }

//     whoWins();
//   }
//   whoHelps();
// }

// bankRobbery();

// higher
// یک فانکشن ک یک فانکشن رو به عنوان توابع میگره و یا یک فانکشن رو برمیگردونه
// function callTwice(func){
//     func();
//     func();
// }
// //math.floor It rounds down
// function rollDie(){
//     const roll=Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }
// callTwice(rollDie);

// function sum(number){
//     number();
//     number();
// }
// function sumNamber(){
//     const number1=2;
//     const number2=2;
//     const summ=number1+number2;
//     console.log(summ);
// }
// sum(sumNamber);

// const myMath={
//     PI:3.14,
//     square:function(num){
//         return num*num//9 retrun if num=3
//     },
//     cube:function(num){
//         return num*num*num//27 if num=3
//     },
// };
// console.log(myMath.square(3));

//ecma
// const myMath={
//     PI:3.14,
//     square(num){
//         return num * num
//     },
//     cube(num){
//         return num*num*num
//     },
// }


// let person1 = {
//   name: "Alice",
//   age: 25,
// };

// let person2 = {
//   name: "Bob",
//   age: 30,
// };

// let person3 = {
//   name: "John",
//   age: 20,
// };


// //تعریف شده را بنویسید personشامل  3 arrayیک
// // 1- Define an array containing the 3 persons defined below.
// let persons =[person1,person2,person3];
//   // 2- Return an array of the person names (hint: use map).
//   //array az name persons ar bargardonh 
//   let personNames=persons.map((element)=>element.name);
//   // 3- Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
// //afardi ro filter konh ka kamter az 28 sal daran ro bargrdonh
// let personsYoungerThan28YearsOld=persons.filter((element)=>element.age<28)
//   /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

//   console.log(
//     "Question 1: array defined with 3 persons -> ",
//     persons[0] === person1 && persons[1] === person2 && persons[2] === person3
//       ? "Passed :)"
//       : "Not yet :("
//   );

// console.log(
//   "Question 2: array containing the person names -> ",
//   personNames[0] === "Alice" &&
//     personNames[1] === "Bob" &&
//     personNames[2] === "John"
//     ? "Passed :)"
//     : "Not yet :("
// );

// console.log(
//   "Question 3: array containing the persons younger than 28 years old -> ",
//   personsYoungerThan28YearsOld[0] === person1 &&
//     personsYoungerThan28YearsOld[1] === person3
//     ? "Passed :)"
//     : "Not yet :("
// );

// An array of travel destinations is defined below.Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.
//majmohi az maghasd safar dar zir tarif shodh ast .har maghsg dari ik name faslh az grasi va listi az vasil haml va naghl maojod bari raftrn ba onja ast.
// let destination1 = {
//   destinationName: "Edinburgh",
//   distanceKms: 80,
//   transportations: ["car", "bus", "train"],
// };

// let destination2 = {
//   destinationName: "London",
//   distanceKms: 650,
//   transportations: ["car", "bus", "train"],
// };

// let destination3 = {
//   destinationName: "Paris",
//   distanceKms: 900,
//   transportations: ["train", "plane"],
// };

// let destination4 = {
//   destinationName: "Dublin",
//   distanceKms: 350,
//   transportations: ["plane", "ferry"],
// };

// let travelDestinations = [
//   destination1,
//   destination2,
//   destination3,
//   destination4,
// ];

// // 1- Filter the travelDestinations array to return all destination names reachable within 500 kms.
// //array travelDestinations  ra filter konid ta hami namehai maghsad ghablah dstras dar 500kilomatri bazkardand shavad

// // 2- Find a destination name reachable by ferry.
// //name magsad gablh dastrasi ba kashti ra pida konid
// // 3- Print in the console all the destination names more than 300 kms far away and reachable by train.
// // تمام اسامی مقصد را که بیش از 300 کیلومتر دورتر هستند و با قطار قابل دسترسی هستند را در کنسول چاپ کنید.
//  // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)

//  let getname = (destination) => destination.destinationName;
//  let name500kms = (destination) => destination.distanceKms <= 500;
//  let destinationNamesWithin500Kms = travelDestinations
//    .filter(name500kms).map(getname); // Complete here

//  let reachableByFerry = (destination) =>
//    destination.transportations.includes("ferry");
//  let destinationNameReachableByFerry = travelDestinations
//    .filter(reachableByFerry).map(getname); // Complete here

//  let namesMoreThan300Kms = (destination) =>
//    destination.distanceKms > 300 &&
//    destination.transportations.includes("train");
//  let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
//    .filter(namesMoreThan300Kms).map(getname);

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
//   `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
// );
// console.log(
//   `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
// );
// console.log(
//   `Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`
// );

/*
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, the number of customers in the restaurant at the moment and the menu with prices.
در زیر چند رستوران در گلاسکو آورده شده است. هر رستوران دارای یک نام، تعداد کل صندلی ها، تعداد مشتریان رستوران در حال حاضر و منو با قیمت است.
We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1- Define a method findAvailableRestaurants which takes a number of people in parameter and returns all the restaurant names which have the required number of seats available at the moment.

(  مراجعه کنید به زیرrestaurantFinderApplication)ما می خواهیم یک شی برای شبیه سازی یک برنامه رستوران یاب بسازیم .
2- Define a method findRestaurantServingDish which takes a dish name in parameter and returns all the restaurant names serving this dish.
3- یک روش countNumberOfRestaurantsInArea تعریف کنید که مساحت گلاسکو را در پارامتر (مرکز، غرب) گرفته و تعداد رستوران های این ناحیه را برمی گرداند
3- Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west), and returns the number of restaurants in this area.
*/

// let restaurant1 = {
//   name: "Paesano",
//   totalSeats: 10,
//   numberOfCustomers: 8,
//   address: {
//     city: "Glasgow",
//     area: "center",
//   },
//   menu: ["pizza", "calzone", "salad"],
// };

// let restaurant2 = {
//   name: "Ubiquitous Chip",
//   totalSeats: 20,
//   numberOfCustomers: 10,
//   address: {
//     city: "Glasgow",
//     area: "west",
//   },
//   menu: ["salad", "chocolate cake", "roast lamb"],
// };

// let restaurant3 = {
//   name: "Monkeyz",
//   totalSeats: 15,
//   numberOfCustomers: 8,
//   address: {
//     city: "Glasgow",
//     area: "center",
//   },
//   menu: ["stew", "chocolate cake", "panini"],
// };

// let restaurants = [restaurant1, restaurant2, restaurant3];

// let restaurantFinderApplication = {
//   applicationName: "Restaurant Finder",
//   applicationVersion: "1.0",
//   restaurants: restaurants,
//   findAvailableRestaurants: function (numberOfPeople,restaurant) {
//       const availableSeats =
//         restaurant.totalSeats - restaurant.numberOfCustomers >= numberOfPeople;
//     // Complete here
//   },
//   findRestaurantServingDish: function (dishName) {
//     // Complete here
//   },
//   countNumberOfRestaurantsInArea: function (area) {
//     // Complete here
//   },
// };
// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
//   5
// )
// console.log(
//   `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
// )

// let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
//   "salad"
// )
// console.log(
//   `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
// )

// let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
//   "center"
// )
// console.log(
//   `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
// )


//cat
// const cat={
//     name:"cat",
//     color:"grey",
//     breed:"persion cat",
//     meow(){
//       console.log(`${this.color} ${this.breed} cats are amazing`); //grey persion cat cats are amazing
//     },
//     thisIs:`this is${this}`,
// }
// // console.log(cat.meow());//undefined
// const meow2=cat.meow
// console.log(cat.meow2);

// const person = {
//   firstName: "Donald",
//   lastName: "Trump",
//   fullName() {
//     // local scope
//     console.log(this);
//     // object
//     // firstName
//     // lastName
//     // fullName
//     // hisName
//     // shoutName
//     // sayName
//     return `${this.firstName} ${this.lastName}`;
//   },
//   hisName: () => {
//     // global scope
//     console.log(this); //Window
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName() {
//     setTimeout(function () {
//       console.log(this)//window
//       console.log(this.fullName())
//     }, 3000)
//   },
//   //take a look at window.setTimeout
//   sayName: function () {
//     setTimeout(() => {
//       console.log(this)
//       console.log(this.fullName())
//     }, 3000)
//   },
// }

// console.log(person.fullName())//Donald Trump
// console.log(person.hisName())//undefined undefined
// console.log(person.shoutName())//undefined
// console.log(person.sayName())//undefide
// console.log(person.sayName2())//error

//objectkey

// let footballClubs = {
//   chelsea_fc: "esteghlal ahvaz",
//   fc_barcelona: "folad mobarake",
//   ac_milan: "Italy",
// };
// console.log(Object.keys(footballClubs));//[ 'chelsea_fc', 'fc_barcelona', 'ac_milan' ]

// let footballClubs = {
//   chelsea_fc: "England",
//   fc_barcelona: "Spain",
//   ac_milan: "Italy",
// }
// console.log(Object.values(footballClubs));//[ 'England', 'Spain', 'Italy' ]

// let capitalCities = {
//   scotland: "Edinburgh",
//   kenya: "Nairobi",
//   australia: "Canberra",
//   canada: "Ottawa",
// };

// let highScores = {
//   55: "Alistair",
//   100: "David",
//   89: "Hannah",
//   34: ["Sergi", "Frank"],
// };
// let capitalCitiesKeys = Object.keys(capitalCities);
// // console.log(capitalCitiesKeys);//[ 'scotland', 'kenya', 'australia', 'canada' ]

// let highScoresKeys = Object.keys(highScores);
// // console.log(highScoresKeys);//[ '34', '55', '89', '100' ]

// let capitalCitiesValues = Object.values(capitalCities);
// // console.log(capitalCitiesValues);//[ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

// let highScoresValues = Object.values(highScores);
// // console.log(highScoresValues);//[ [ 'Sergi', 'Frank' ], 'Alistair', 'Hannah', 'David' ]

// let mentorsAges = {
//   james: 29,
//   JOSH: 35,
//   JAMIE: 25,
//   Mozafar: 30,
// };

// let mentorsNames = Object.keys(mentorsAges);
// let mentorsNameDUpparcase = mentorsNames.map((i)=>i.toUpperCase())
// console.log(mentorsNameDUpparcase);//["JAMES", "JOSH", "JAMIE", "MOZAFAR"];

// // forin
// const flowers = {
//   tulip: 20,
//   rose: 10,
//   lily: 15,
// };
// for (const key in flowers) {
//   console.log(`${key}:${flowers[key]}`);
// //   tulip:20
// //   rose: 10;
// //   lily: 15;
// }

// const traineeGrades = {
//   tom: 20,
//   george: 17,
//   abdul: 19,
// };
// for (const key in traineeGrades) {

//     console.log(traineeGrades[key]>17?`${key.toUpperCase()}-${traineeGrades[key]}`:'');
// }

// TOM - 20;

// ABDUL - 19;

// const domesticAnimals = ["Cows", "Sheep", "Goat"];
// const notSoDomesticAnimals = ["Salamander", "Iguana", "Moth", "Sloth"];
// const newAnimalsArray = [...domesticAnimals,...notSoDomesticAnimals];
// console.log(newAnimalsArray);

// const notSoDomesticAnimals = ["Salamander", "Iguana", "Moth", "Sloth"];

//  const airplane = [
//   ["motahare", "anahid", "amirmostafa"],
//   ["maryam", "amir", "mina"],
//   ["fatemeh", "fereshte", "kian"],
//   ["kosar", "mohammad", "yousof"],
//   ["mohsen", "hoseyn ", "shaden"],
// ];

// const array = airplane.map(elemnet=>{
//   let arrayindex=elemnet.map(arrayindexarray=>{
//     console.log(arrayindexarray);
//     return `${arrayindexarray}`;
//   })
//   return arrayindex;
// })
// console.log(array);



// const array = airplane.map(element=>{
//   let index = element.map(i=>{
//     console.log(i);
//     return`${i}`
//   })
//   return index
// })
// console.log(array);

const strings=[
  ['zahra','shiva','shila','dina','rena','maryam','rasoul'],
  ['asmail','pervanh','hemid','akbar','mohamad','niloufar'],
]
//map
// const namesfamily=strings.map(Element=>{
//   let indexarray=Element.map(i=>{
//     console.log(i);
//     return`${i}`
//   })
//   return indexarray
// })
// console.log(namesfamily);

//foreach
// const namesfamily=strings.forEach(Element=>{
//   console.log('row');
//   Element.forEach(element=>{
//     console.log(`             ${element}`);
//   })
// })

//for of
// for (const iterator of strings) {
//   console.log('row');
//   for (const element of iterator) {
//     console.log(`             ${element}`);
//   }
// }
// let arrayList = ["a", "b", "c", "d", "e", "f"];
// arrayList=[];
// console.log(arrayList.length);

var counterArray = {
  A: 3,
  B: 4,
};
counterArray["C"] = 1;
console.log(counterArray);
