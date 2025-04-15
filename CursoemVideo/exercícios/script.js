let num = document.getElementById('txtnum')
let sel = document.getElementById('sel')
let res = document.getElementById('res')

let list = []

function adicionar() {
    let n = Number(num.value)
    
    if (num.value.length == 0 || n < 1 || n > 100 || list.includes(n)) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        list.push(n)

        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (list.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let maior = Math.max(...list)
        let menor = Math.min(...list)
        let soma = 0
        for (let valor of list) {
            soma += valor
        }
        let media = soma / list.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${list.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}