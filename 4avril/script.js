const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const subitError = document.getElementById("subit-error");


function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML='phone no is required';
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML="phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]-{10}$/)==0){
        phoneError.innerHTML="Phone no is required";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function vaildateEmail(){
    var email = document.getElementById("content-email").value;
    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2.4}$/)){
        emailError.innerHTML='Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("content-message").value;
    var required=30;
    var left=required - message.length;
    if(left>0){
        messageError.innerHTML=left+'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone()|| !vaildateEmail()|| !validateMessage()){
        subitError.style.display='block';
        subitError.innerHTML="Please fix error to subit";
        setTimeout(function(){subitError.style.display="none"},3000);
        return false;
    }
}