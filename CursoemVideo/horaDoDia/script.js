function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'src/manha.png'
        document.body.style.background = '#d1bbac'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'src/tarde.png'
        document.body.style.background = '#f8c177'
    } else {
        // boa noite
        img.src = 'src/noite.png'
        document.body.style.background = '#353e61'
    }
}