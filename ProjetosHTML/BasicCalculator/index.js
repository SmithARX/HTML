const buttonsEL = document.querySelectorAll("button");
const inputFieldEL = document.getElementById("result");

for (let i = 0; i < buttonsEL.length; i++){
    buttonsEL[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEL[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        } else if (buttonValue === "="){
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}
function clearResult(){
    inputFieldEL.value = "";
}
function calculateResult(){
    inputFieldEL.value = eval(inputFieldEL.value);

}
function appendValue(buttonValue){
    inputFieldEL.value += buttonValue;
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    // 1. Números (0-9), ponto decimal e operadores básicos
    if (/^[0-9+\-*/.]$/.test(key)) {
        event.preventDefault(); // Evita comportamentos padrão (como barra / abrir busca rápida no Firefox)
        appendValue(key);
    } 
    // 2. Tecla Enter ou "=" para calcular
    else if (key === "Enter" || key === "=") {
        event.preventDefault(); // Evita que o Enter clique novamente no último botão focado com o mouse
        calculateResult();
    } 
    // 3. Tecla Backspace para apagar apenas o último caractere
    else if (key === "Backspace") {
        event.preventDefault();
        inputFieldEL.value = inputFieldEL.value.slice(0, -1);
    } 
    // 4. Tecla Escape (Esc) ou "c"/"C" para limpar tudo
    else if (key === "Escape" || key.toLowerCase() === "c") {
        event.preventDefault();
        clearResult();
    }
});