function tabuada() {
    let numero = document.getElementById("numero")

    if (numero.value.length == 0) {
        alert("Digite um número!")
    } else {
        let tabuada = document.getElementById("tabuada")

        tabuada.innerHTML = ""

        for (var i = 1; i <= 10; i++) {
            let resultado = Number(numero.value) * i

            let option = document.createElement("option")

            option.value = `tabuada${i}`
            option.innerHTML = `${numero.value} x ${i} = ${resultado}`
            tabuada.appendChild(option)
        }
    }
}