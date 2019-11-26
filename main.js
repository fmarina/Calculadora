var display = "";
var valorAnterior = "";
var operacion = "";

function actualizarDisplay(){
    document.getElementById("display").innerText = display;
}

window.onload = function(){
    this.actualizarDisplay();
}

function presionarNumero(numero){
    if(numero === "." && display.includes(".")){
        return;
    }
    if(display.length < 22){
        display += numero;
        actualizarDisplay();
    }
}

function realizarOperacion(operation){
    valorAnterior = display;
    display = '';
    operacion = operation;
    actualizarDisplay();    
}

function resultadoIgual(){
    switch(operacion){
        case "+":
            display = Number(display) +  Number(valorAnterior);
            break;
        case "-":
            display = Number(valorAnterior) - Number(display);
            break;
        case "*":
            display = Number(display) * Number(valorAnterior);
            break;
        case "/":
            display = Number(valorAnterior) / Number(display);
            break;
        case "+/-":
            display *= -1;
            break;
        case "%":
            display = (Number(valorAnterior) * Number(display)) / 100;
            break;
        default:
            break;
    }
    actualizarDisplay();
}

function limpiarDisplay(){
    document.getElementById("display").innerText = '';
    display = '';
    valorAnterior = '';
    op = '';
    actualizarDisplay();
}
