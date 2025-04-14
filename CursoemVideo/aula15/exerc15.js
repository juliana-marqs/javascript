let num = [5, 8, 9, 3]
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
num.sort() // decrescente
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
