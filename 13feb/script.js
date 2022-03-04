
/////////////////////////prototype//////////////////////////
// const arr=[1,2,3,4];
// const filteradarr=arr.filter(n=>n !==3);
// console.log(filteradarr);

// arr.sing=function(){
//     return console.log("lllllllllllllllll");
// };


// console.log(arr);
// arr.push(5);
// console.log(arr);
// const body=document.body;
// console.dir(body);


// String.prototype.khandeh=()=>alert("kkkkkkkkkkkkk");
// const cat="blue";
// cat.khandeh();

// String.prototype.yell=function(){
//     console.log(this.toUpperCase());
// }


///////////////////factorfunction////////////////

// function makeUser(username,email){
//     const user={};
//     user.name=username;
//     user.emailAddress=email;
//     user.login=function(){
//         const {name,emailAddress}=this;
//         return `user named ${name} has this email:${emailAddress}`;
//     };
//     user.info=function(){
//         const {name,emailAddress}=this;
//         return `user named ${name} has this email:${emailAddress}`;
//     };
//     return user;
// }

// const zahra=makeUser("zahra","zahra@gmail.com");
// console.log(zahra,zahra.login(),zahra.info());

// const zahra=makeUser("zahra","zahra.@mail.com")


// function mackeColour(r,g,b){
//     const colour={};
//     colour.r=r;
//     colour.g=g;
//     colour.b=b;

//     colour.rgb=function(){
//         const {r,g,b}=this;
//         return `rgb(${r},${g},${b})`;
//     };
//     colour .hex=function(){
//         const {r,g,b}=this;
//         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);   
//     };
//     return colour
// }
// mackeColour(35,255,150).rgb();
// const firstColours=mackeColour(35,255,150);
// console.log(firstColours);
// console.log(firstColours.hex());
// firstColours.hsl=()=>"here is your hsl";
// console.log(firstColours);
// const black=mackeColour(0,0,0);
// console.log(black.rgb());
// console.log(black.hex());



// ////////////////constructiorFunction//////////////
// function colour(r,g,b){
//     this.r=r;
//     this.g=g;
//     this.b=b;
// }
// const white=colour(255,255,255)
// console.log(white);//undefined

// colour.prototype.rgb=function(){
//     const {r,g,b}=this;
//     return ` rgb(${r},${g},${b})`;
// };

// colour.prototype.hex=function(){
//     const {r,g,b}=this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// };
// colour.prototype.rgba=function(a=1.0){
//     const {r,g,b}=this;
//     return `rgba(${r},${g},${b},${a})`;
// };
// const colour1=new colour(40,255,60);
// console.log(colour1);

// // colour {r: 40, g: 255, b: 60}
// // b: 60
// // g: 255
// // r: 40
// // [[Prototype]]: Object

// console.log(colour1.hex());//#28ff3c
// console.log(colour1.rgba(0.5));//rgba(40,255,60,0.5)


// ///////////////  Classes  /////////////////

// class User{
//     constructor(username, email){
//         this.username=username;
//         this.emil=email;
//         this.count=0;
//         this.harchi=[];
//         this.jadid={};
//     }
//     login(){
//         this.count++;
//         console.log(`user ${this.username} logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`user logged out`);
//         return thisl
//     }
//     loginCounter(){
//         console.log(`counter login:${this.count}`);
//         return this;
//     }
// }

// const zahra=new User("zahra","zahra@gmail.com");
// zahra.login();
// zahra.login().login().login().loginCounter()

// class Colour{
//     constructor(r,g,b,name){
//         this.r=r;
//         this.g=g;
//         this.b=b;
//         this.name=name;
      
//     }
//     innerRGb(){
//         const {r,g,b}=this;
//         return `${r},${g},${b}`;
//     }
//     rgb(){
//         const {r,g,b}=this;
//         return ` rgb(${r},${g},${b})`;
//     }
//     rgba(a=1){
//         const {r,g,b}=this;
//         return `rgb(${r},${g},${b},${a})`;
//     }

// }

// const red=new Colour(255,255,98,"tomato");
// red.rgba(0.5);

// const white=new Colour(255,255,255,"ice");
// console.log(white.innerRGb());



// //////////more classes//////////////////


