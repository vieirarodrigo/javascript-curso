function contar() {    
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)

    var resultado = document.querySelector('div#resultado')

    resultado.innerHTML = ""

    if (!document.querySelector('input#inicio').value || !document.querySelector('input#fim').value || !document.querySelector('input#passo').value) {
        resultado.innerHTML = "Impossível contar!"

        return
    } else if (passo == 0) {
        alert ('Passo inválido! Considerando passo igual a 1')

        passo = 1
    }

    var novoP = document.createElement("p")

    novoP.textContent = "Contanto: "
    resultado.appendChild(novoP)

    if (inicio < fim) {
        for (var i = inicio; i <= fim; i += passo) {
            resultado.innerHTML += i
            resultado.innerHTML += " &#128073 ";
        }
    } else {
        for (var i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += i
            resultado.innerHTML += " &#128073 ";
        }
    }

    resultado.innerHTML += "&#127937;"
}
