const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*()_+=-~`";

function firstPass(){
let result = "";
for (let i = 0; i<12; i++ ){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    } 
    const firstPassword = document.getElementById("first-password");
    firstPassword.textContent = result;
    return result
}

function secondPass(){
let result = "";
for (let i = 0; i<14; i++ ){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    } 
    const secondPassword = document.getElementById("second-password");
    secondPassword.textContent = result;    
    return result
    }

function thirdPass(){
let result = "";
for (let i = 0; i<15; i++ ){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }    
    const thirdPassword = document.getElementById("third-password");
    thirdPassword.textContent = result;
    return result
    }
  
function fourthPass(){
let result = "";
for (let i = 0; i<10; i++ ){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    } 
    const fourthPassword = document.getElementById("fourth-password");
    fourthPassword.textContent = result; 
    return result
    }

const generateBtn = document.getElementById("generate-password");
generateBtn.addEventListener("click", function finalOutput(){
  firstPass()
  secondPass()
  thirdPass()
  fourthPass()
})