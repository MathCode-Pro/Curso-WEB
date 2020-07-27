function negativo(vet = []) {

    let resultado = 0
    let soma = 0
    for (x in vet) {
        soma += vet[x]
    }
    resultado = soma / vet.length

    return resultado
}
console.log(negativo([12, 13, 14, 16, 18, 20]))