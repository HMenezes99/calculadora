let inputresultado = document.getElementById("inputDisplayResultado")

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

    document.getElementById("clear").addEventListener("click", limparDados)
}

//Ira inserir um numero na calculadora
function inserirNumero(){
    if(isNaN(inputresultado.value)){
     inputresultado.value = event.target.textContent;
    }else{
        if(inputresultado.value == 0){
            inputresultado.value = event.target.textContent;
        }else{
            inputresultado.value += event.target.textContent;
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
    inputresultado.value = "";
    calculo.primeiroValor = 0;
    calculo.segundoValor = 0;
    calculo.funcaoParaCalcular = null;
}