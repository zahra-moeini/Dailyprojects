// object literals
 let clinet={
     name:"zahra",
     balance:800,
     mebership:function(){
         let name;
         if(this.balance>1000){
             name="gold"
         }
        else if(this.balance>500){
            name="silver";
        }
        else{
            name="normal";
        }
        return name
     }
 }
 console.log(clinet);
 console.log(clinet.balance);
 console.log(clinet.name);
 console.log(clinet.mebership());