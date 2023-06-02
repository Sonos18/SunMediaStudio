const signinBtn = document.getElementById("signinBtn")
const signupBtn = document.getElementById("signupBtn")
const formBx = document.getElementById("formBx")
const body = document.querySelector("body");
signupBtn.addEventListener("click", function(){ 
    formBx.classList.add("active");
    body.classList.add("active");
 });
 signinBtn.addEventListener("click", function(){ 
    formBx.classList.remove("active");
    body.classList.remove("active");
 });