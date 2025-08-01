const btnA = document.querySelector(".btn");
const inputA = document.querySelector(".input");
const copyIcon = document.querySelector(".far");
const alertContainer = document.querySelector(".active");

btnA.addEventListener("click",() =>{
    generatePassword();
});

copyIcon.addEventListener("click", () => {
    copyPassword();
    if (inputA.value){
        alertContainer.classList.remove("active");
        setTimeout(() =>{
            alertContainer.classList.add("active");
        }, 2000);
    }
});

function generatePassword() {
    const char =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_:{}[]|<>?';ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let index = 0 ; index < passwordLength ; index++){
        const randNum = Math.floor(Math.random() * char.length);
        password += char.substring(randNum, randNum + 1);
    }
    inputA.value = password;
    alertContainer.innerText = password + " Copied";
}

function copyPassword(){
    inputA.select();
    inputA.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputA.value);
}