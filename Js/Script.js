register=document.getElementById("registerForm");
login=document.getElementById("loginForm");
function registerFunction(){
   
    login.style.display="none";
   
    register.style.display="block";
}

function accountRegister(event){
  password=document.getElementById("registerPasswordInput").value ;
  confirmPassword=document.getElementById("confirmPasswordInput").value;
  if(password==confirmPassword){
    event.preventDefault();
  }
  else{
    alert("Please re-enter the password correctly");
    
  }

  }
function loginFunction(){
    
    login.style.display="block";
    
    register.style.display="none";
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function ValidateEmail(inputText,event)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
event.preventDefault();
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
