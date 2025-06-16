function mostrarResultados() {
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = document.querySelector('input#ano')
    
    var resultado = document.querySelector('p#resposta')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName(`sexo`)
        var img = document.querySelector('img#foto')

        var idade = ano - Number(formAno.value)
        var genero = ''

        if (formSex[0].checked) {
            genero = 'Homem'

            if (idade < 10) {
                img.setAttribute('src', './imagens/bebeHomem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/jovemHomem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/homemAdulto.jpg')
            } else {
                img.setAttribute('src', './imagens/idoso.jpg')
            }
        } else {
            genero = 'Mulher'

            if (idade < 10) {
                img.setAttribute('src', './imagens/bebeMulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/jovemMulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/mulherAdulta.jpg')
            } else {
                img.setAttribute('src', './imagens/idosa.jpg')
            }
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}