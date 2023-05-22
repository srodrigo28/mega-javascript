const numerosApostados = [];
const btnApostar = document.getElementById('btnApostar');
btnApostar.disabled = true;

function selecionarNumeros(numero){

    if(numerosApostados.length >= 0 && numerosApostados.length < 15){
        // adiciona o numero na lista
        numerosApostados.push(numero)

        // desabilita o numero escolhido
        desabilitarNumeroEscolhido(numero);

        // habilita o botão quando a lista por maior que 5
        if(numerosApostados.length > 5){
            btnApostar.disabled = false;
        }
        
        //mostrar quantidade de números apostados
        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML = `<p> Qtd Números</p> <p class='valor'>${numerosApostados.length}</p> `
    }
}

function desabilitarNumeroEscolhido(numero){
    document.getElementById("num_"+numero).disabled = true;
    document.getElementById("num_"+numero).style.color = "#fff"
    document.getElementById("num_"+numero).style.background = "#009e4c"
}