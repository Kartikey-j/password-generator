function generatePassword(){
    const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*()_+=-~`";
    const charactersLength = characters.length;

let result = "";

    for (let i = 0; i<16; i++ ){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const firstPassword = document.getElementById("first-password");
    firstPassword.textContent = result;
    const secondPassword = document.getElementById("second-password");
    secondPassword.textContent = result;    
    const thirdPassword = document.getElementById("third-password");
    thirdPassword.textContent = result;
    const fourthPassword = document.getElementById("fourth-password");
    fourthPassword.textContent = result;    
} 

function clearText(){
    const firstPassword = document.getElementById("first-password");
    firstPassword.replaceChildren( );
    const secondPassword = document.getElementById("second-password");
    secondPassword.replaceChildren( );    
    const thirdPassword = document.getElementById("third-password");
    thirdPassword.replaceChildren( );
    const fourthPassword = document.getElementById("fourth-password");
    fourthPassword.replaceChildren( );   
}
const generateBtn = document.getElementById("generate-password");
generateBtn.addEventListener("click", function finalOutput(){
   clearText()
   generatePassword()
})
