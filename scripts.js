const numerosApostados = [];
const resultado = [];
let valorAposta = 0;
let qtdAcertos = 0;
const btnApostar = document.getElementById('btnApostar');
btnApostar.disabled = true;

function sortearNumeros(){

    for(i=0; i<6; i++){
        let numeroSorteado  = Math.round(Match.rando() * 59 + 1);

        while(resultado.includes(numeroSorteado)){
            let numeroSorteado  = Math.round(Match.rando() * 59 + 1);
        }
        resultado.push(numeroSorteado);
    }
}
function selecionarNumeros(numero){

    if(numerosApostados.length >= 0 && numerosApostados.length < 15){
        // adiciona o numero na lista
        numerosApostados.push(numero)

        // desabilita o numero escolhido
        desabilitarNumeroEscolhido(numero);

        // habilita o botão quando a lista por maior que 5
        if(numerosApostados.length > 5){
            btnApostar.disabled = false;

            // mostra o valor da aposta
            valorDaAposta();

        }
        
        // mostrar quantidade de números apostados
        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML = `<p> Qtd Números</p> <p class='valor'>${numerosApostados.length}</p> `

        // mostra o valor da aposta
        
    }
}
function desabilitarNumeroEscolhido(numero){
    document.getElementById("num_"+numero).disabled = true;
    document.getElementById("num_"+numero).style.color = "#fff"
    document.getElementById("num_"+numero).style.background = "#009e4c"
}
function valorDaAposta(){
    switch(numerosApostados.length){
        case 6: 
            valorAposta = "R$ 4,50"
            break;
        case 7: 
            valorAposta = "R$ 31,50"
            break;
        case 8: 
            valorAposta = "R$ 126,00"
            break;
        case 9: 
            valorAposta = "R$ 378,00"
            break;
        case 10: 
            valorAposta = "R$ 945,00"
            break;
        case 11: 
            valorAposta = "R$ 2.079,00"
            break;
        case 12: 
            valorAposta = "R$ 4.158,00"
            break;
        case 13: 
            valorAposta = "R$ 6.006,00"
            break;
        case 14: 
            valorAposta = "R$ 10.510,50"
            break;
        case 15: 
            valorAposta = "R$ 17.517,50"
            break;
        default: valorAposta = "R$ 0,00"
            break;
    }
    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML = `<p>Valor da Aposta</p> <p class="valor">${valorAposta}</p>`;
    // console.log(divValorAposta);

}

function apostar(){
    // fazer a aposta comparar as duas listas
    for( i=0; i<numerosApostados.length; i++){
        for( j=0; j<resultado.length; j++){
            if(numerosApostados[i] == resultado[j]){
                qtdAcertos++;
            }
        }
    }
    // mostrar o resultado

    // desabilitar o botao selecionar numeros
}