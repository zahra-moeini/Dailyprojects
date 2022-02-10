class UI{

    //show anu message in html
    printmesaage(mesaage,className){
        //create div tag
        const div=document.createElement("div");
        //append text message to the div tag
        div.appendChild(document.createTextNode(mesaage));
        //append class name to the tag
        div.className=className;
        // show the message into the html
        document.querySelector("#message").appendChild(div);

        // console.log(div);

        //remove message after 3second 
        setTimeout(()=>{
            this.removeMesaage();

        },3000);
        
    }
    //ramove mesage after showing onfo the html
    removeMesaage(){
        const alert=document.querySelector(".alert");
        if(alert){
            alert.remove()
        }
    }
    
}