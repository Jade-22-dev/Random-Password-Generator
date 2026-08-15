import generateResult from "./generateResult.js"
import validateCopy from "./validateCopy.js"
import { renderUI } from "./renderUI.js"

renderUI();

const password = document.getElementById("password")

const lengthInput = document.getElementById("length")

const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

const generateBtn = document.getElementById("generateBtn")
const copyBtn = document.getElementById("copyBtn")


const upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerChar = "qwertyuiopasdfghjklzxcvbnm"
const numbersChar = "1234567890"
const symbolsChar = "!@#$%^&*()_+[]{}<>?|/"


generateBtn.addEventListener("click", generatePassword);

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        generatePassword();
    }
})

function generatePassword(){
    let chars = ""
    const length = Number(lengthInput.value);

    if(uppercase.checked) chars+=upperChar;
    if(lowercase.checked) chars+=lowerChar;
    if(numbers.checked) chars+=numbersChar;
    if(symbols.checked) chars+=symbolsChar;

    if(!chars){
        alert("please check atleast one box");
        return
    }
    generateResult(chars, length)
    
}

copyBtn.addEventListener("click", () => {
    validateCopy(password.value)
});

