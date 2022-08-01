function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#foto')
    var dataAtual = new Date()
    //var hora = dataAtual.getHours()
    var hora = 16
    var minuto = dataAtual.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.</br>`
    if(hora >= 0 && hora < 12){
        img.innerHTML = '<img src="img/fotomanha.png">'
        document.body.style.background = '#ffda66'
    } else if(hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="img/fototarde.png">'
        document.body.style.background = '#ab6d6f'
    }else {
        img.innerHTML = '<img src="img/fotonoite.png">'
        document.body.style.background = '#0954b0'
    }
        
}

