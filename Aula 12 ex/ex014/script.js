function carregar() {
    var dom = window.document

    var bodyStyle = dom.body.style
    var divHoraAtual = dom.querySelector('div#horaAtual')
    var imagem = dom.querySelector('img#imagem')

    var data = new Date()
    var hora = data.getHours()

    hora = 10

    divHoraAtual.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        bodyStyle.background = "rgba(46, 153, 121, 0.56)"

        imagem.src="./imagens/manha.jpg"
        imagem.alt="Manhã ensolarada"
    } else if (hora < 18) {
        bodyStyle.background = "rgba(13, 153, 43, 0.72)"
        
        imagem.src="./imagens/tarde.avif"
        imagem.alt="Tarde ensolarada"
    } else {
        bodyStyle.background = "rgba(8, 6, 133, 0.719)"
        
        imagem.src="./imagens/noite.avif"
        imagem.alt="Noite estrelada"
    }
}

