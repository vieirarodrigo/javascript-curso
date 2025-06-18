let valores = []
let res = document.getElementById('res')

function verificarValor(numero) {
    if (numero.value.length == 0 || numero.value < 0 || numero.value > 100 || valores.indexOf(Number(numero.value)) != -1) {
        return false
    } else {
        return true
    }
}

function adicionarSelect(valor) {
    let option = document.createElement('option')
    option.innerHTML = `Valor ${valor} adicionado.`

    let select = document.getElementById('valores')

    select.appendChild(option)
}

function popularValores(numero) {
    valores.push(numero)
}

function adicionar() {
    let valor = document.getElementById('numero')

    if (verificarValor(valor)) {
        let numero  = Number(valor.value)
        
        popularValores(numero)
        adicionarSelect(numero)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }

    res.innerHTML = ""
}

function finalizar() {
    if (valores.length == 0) {
        alert ('Adicione valores antes de finalizar!')
        
        return
    }

    let maior = valores[0]
    let menor = valores[0]
    let soma = 0

    for(let i in valores) {
        
        if (valores[i] > maior) {
            maior = valores[i]
        } else if (valores[i] < menor) {
            menor = valores[i]
        }

        soma += valores[i]
    }

    res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>À média dos valores digitados é ${soma / valores.length}</p>`
}