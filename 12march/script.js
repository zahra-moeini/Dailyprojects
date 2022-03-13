var countDownDate = new Date("2022-3-13 16:26:59");
var x=setInterval(function (){
    var now=new Date().getTime();
    var distance=countDownDate-now;
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/1000);
   
    document.getElementById("demo")
    .innerHTML =days + "Day" +"  "  +hours +"hours" +" "+ minutes +"minutes" +" "+ seconds +"seconds";
    function secondess(){
        if (days == 0 && hours == 0 && minutes==0 &&seconds<10) {
            document.getElementById("demo").style.color="green"
        }
    }
    secondess();
    function back(){
        
        document.body.style.backgroundColor="red"
    }
    function daa(){
        if(days == 0 && hours == 0 && minutes==0 &&seconds<59){
           
            
        }
    }
    
    daa();
    if(distance<0){
        clearInterval(x);
      document.getElementById("demo").innerHTML = ".سال 1401 هجری شمسی  مبارک باد";
       back();
    }
},1000);
