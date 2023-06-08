const menorValor = 1
const maiorValor = 100

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor + 1)
}

const elementoMenor = document.getElementById('menor_valor')
elementoMenor.innerHTML = menorValor

const elementoMaior = document.getElementById('maior_valor')
elementoMaior.innerHTML = maiorValor

console.log(numeroSecreto)

