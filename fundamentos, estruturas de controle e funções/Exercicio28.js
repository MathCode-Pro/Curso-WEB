const par_impar = (vet = []) => {
    let par = 0
    let impar = 0
    for (x in vet) {
        if (vet[x] % 2 == 0)
            par++
        else
            impar++
    }
    return `Números pares: ${par}
Números ímpares: ${impar}`
}

console.log(par_impar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))