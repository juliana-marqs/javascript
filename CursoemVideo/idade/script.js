function verificar() {
    var res = document.getElementById('res')
    var fano = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}