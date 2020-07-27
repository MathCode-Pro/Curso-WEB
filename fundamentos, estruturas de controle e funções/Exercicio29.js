const fora_dentro = (vet = []) => {
    let fora = 0
    let dentro = 0
    for (x in vet) {
        if (vet[x] >= 10 && vet[x] <= 20)
            dentro++
        else
            fora++
    }
    return `Números dentro do intervalo: ${dentro}
Números fora do intervalo: ${fora}`
}

console.log(fora_dentro([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))