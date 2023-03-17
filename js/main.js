let inputResultado = document.getElementById("inputDisplayResultado")

let calculo = {
    primeiroValor: 0, 
    segundoValor: 0,
    funcaoParaCalcular:null
};

//Adicionar evento para iniciar quando a janela carregar
window.addEventListener("load", function(){
    atribuirEventos();
})

//Atribuir eventos para os botões da calculadora
function atribuirEventos(){
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor00").addEventListener("click", inserirNumero);

    document.getElementById("clear").addEventListener("click", limparDados);
    document.getElementById("btnDecimal").addEventListener("click", InserirPonto);

    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnSomar").addEventListener("click", clicarOperador);
}

//Ira inserir um numero na calculadora
function inserirNumero(){
    if(isNaN(inputResultado.value)){
     inputResultado.value = event.target.textContent;
    }else{
        if(inputResultado.value == 0){
            inputResultado.value = event.target.textContent;
        }else{
            inputResultado.value += event.target.textContent;
        }
    }
}



function somarValores(valor1, valor2){
    return valor1 + valor2;
}

function subtrairValores(valor1, valor2){
    return valor1 - valor2;
}

function multiplicarValores(valor1, valor2){
        return valor1 * valor2;
    }

function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro Divisão por zero!";
    }else{
        return valor1 / valor2;}
}

//função para limpar
function limparDados(){
    inputResultado.value = "";
    calculo.primeiroValor = 0;
    calculo.segundoValor = 0;
    calculo.funcaoParaCalcular = null;
}

function InserirPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
}

function clicarOperador(){
    if(!isNaN(inputResultado.value)){
        calculo.primeiroValor = Number(inputResultado.value);
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
}

function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalcular = somarValores;
    }else if(operador =="-"){
        calculo.funcaoParaCalcular = subtrairValores;
    }else if(operador =="x"){
        calculo.funcaoParaCalcular = multiplicarValores;
    }else {
        calculo.funcaoParaCalcular = dividirValores;
    }
    
}