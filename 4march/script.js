// object literals
//  let clinet={
//      name:"zahra",
//      balance:800,
//      mebership:function(){
//          let name;
//          if(this.balance>1000){
//              name="gold"
//          }
//         else if(this.balance>500){
//             name="silver";
//         }
//         else{
//             name="normal";
//         }
//         return name
//      }
//  }
//  console.log(clinet);
//  console.log(clinet.balance);
//  console.log(clinet.name);
//  console.log(clinet.mebership());

//object constractor

// let client= function(name,balance){
//     this.balance=balance,
//     this.name=name,
//     this.memebership=function(){
//         let name;
//         if(this.balance>1000){
//             name='gold'
//         }
//         else if(this.balance>500){
//             name='silver'
//         }
//         else{
//             name="nolmal"
//         }
//         return name
//     }
// }
// let person1=new client("zahra",2000)
// let person2=new client("ali",200)
// console.log(person1);
// console.log(person2);


// const string1='hamid'
// const string2=new String("hamid")

// console.log(string1);
// console.log(string2);

// console.log(string1 == string2);

// const number1=21;
// const number2=new Number(21);
// console.log(number1);
// console.log(number2);

// console.log(number1===number2);


// const array1=[1,2,3,4,5];
// const array2=new Array(1,2,3,4,5)
// console.log(array1);
// console.log(array2);



// const function1=function(a,b){
//     return a+b
// }
// console.log(function1(5,6));

// const function2=new Function('a','b','return a+b')
// console.log(function2(5,6));


//Es6
class Client{
    // constractor
    constructor(name,balance){
        this.name=name,
        this.balance=balance
    }
    //about the membership
    mebership(){
        let name;
        if(this.balance>1000){
            name='gold'
        }
        else if(this.balance>500){
            name='silver'
        }
        else{
            name='normal'
        }
        return name
    }
    // get some information abut clients
    getClientInfo(){
        return `name:${this.name},balance:${this.balance},membershipinfo:${this.mebership()}`
    }
    // widraw some money
    widraw(amount){
        return this.balance-=amount
    }
    // depost some money
    deposit(amount){
        return this.balance+=amount
    }
    
}

let person1=new Client("zahra",2000)
let persone2=new Client("hamid",5000)
console.log(person1);
console.log(persone2);


class Bussiness extends Client{
    constructor(name,balance,phone,category){
        super(name,balance)
        this.phone=phone,
        this.category=category
    }
    getClientInfo(){
        return `name:${this.name},balance:${this.balance},memebership:${this.mebership},phone:${this.phone},`
    }
}
const bussiness1=new Bussiness("zahraaaaa",3000,091356767,'Developer')
console.log(bussiness1);
console.log(bussiness1.getClientInfo());
