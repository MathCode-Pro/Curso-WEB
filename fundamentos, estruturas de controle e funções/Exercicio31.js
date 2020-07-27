function negativo(vet = []) {
    let negativos = 0

    for (x in vet) {
        if (vet[x] < 0)
            negativos++
    }
    return `Quantidade de números negativos: ${negativos}`
}
console.log(negativo([-1, -2, 3, 4, -5, 6, 7, 8, -9, 10, 11, 12, 13]))