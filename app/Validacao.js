function VerificaChute(chute){
    const numero = +chute
    let cont = 0

    if(ChuteInvalido(numero)){
        elementoChute.innerHTML += "<div>Valor inválido!</div>"
        cont = 1
    }

    if(NumeroDiferente(numero)){
        elementoChute.innerHTML+=`<div>O número secreto precisa estar entre ${maiorValor} e ${menorValor}</div>`
        return 
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!!!</h2>
            <h3>O número secreto era ${numeroSecreto}!
            <button id='jogarNovamente'class='jogar'>Jogar Novamente</button>
        `
    } else if(numero>numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }else if(numero<numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function ChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function NumeroDiferente(numero){
    return (numero > maiorValor || numero < menorValor)
}

document.body.addEventListener('click',e=>{
    if(e.target.id =='jogarNovamente'){
        window.location.reload()
    }
})