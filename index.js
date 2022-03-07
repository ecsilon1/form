var password = document.getElementById("pwd")
 var confirm_password = document.getElementById("pwdInput");

  function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
 
function next(){
  firstButton.addEventListener("click", function() {
   
    document.getElementsByClassName("firstField")[0].classList.add("hidden");
    document.getElementsByClassName("secondField")[0].classList.remove("hidden");
    
  });

  secondButton.addEventListener("click", function() {
    document.getElementsByClassName("secondField")[0].classList.add("hidden");
    document.getElementsByClassName("finalField")[0].classList.remove("hidden");
    
  });

}


const firstBackButton = document.getElementById("firstBackButton");
const secondBackButton = document.getElementById("secondBackButton");

function previous(){
  firstBackButton.addEventListener("click", function(){
    document.getElementsByClassName("secondField")[0].classList.add("hidden");
    document.getElementsByClassName("firstField")[0].classList.remove("hidden")
  });
  secondBackButton.addEventListener("click", function(){
    document.getElementsByClassName("finalField")[0].classList.add("hidden");
    document.getElementsByClassName("secondField")[0].classList.remove("hidden");
  });

}
previous()

