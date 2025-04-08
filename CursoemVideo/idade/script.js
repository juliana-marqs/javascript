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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'src/bebeH.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'src/jovemH.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'src/adultoH.png')
            } else {
                // idoso
                img.setAttribute('src', 'src/idosoH.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'src/bebeF.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'src/jovemF.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'src/adultoF.png')
            } else {
                // idoso
                img.setAttribute('src', 'src/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}