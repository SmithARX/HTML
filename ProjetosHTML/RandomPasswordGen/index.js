const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIconEl = document.querySelector(".copy-btn");
const alertContainerEl = document.querySelector(".alert-container")
btnEl.addEventListener("click", ()=>{
    createPassword()
});
copyIconEl.addEventListener("click", ()=>{
    console.log('aqui')
    copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
    setTimeout(() => {
        alertContainerEl.classList.add("active");
        }, 2000);
    }
});
    

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = 16
    let password = ""
    for (let index = 0; index < passwordLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"
}
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value); 
}