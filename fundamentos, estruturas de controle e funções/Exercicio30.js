function maior_menor(vet = []) {
    let maior = vet.reduce(function (a, b) {
        return Math.max(a, b);
    })
    let menor = vet.reduce(function (a, b) {
        return Math.min(a, b);
    })

    return `Maior valor: ${maior}
Menor valor: ${menor}`
}
console.log(maior_menor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))