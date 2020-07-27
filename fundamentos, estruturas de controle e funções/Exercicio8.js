function comparar(pontos) {
    
    let ponto = pontos.split(', ')
    let recordes = []
    let piorJogo = 0
    let maior = ponto[1]
    let menor = ponto[0]

    for (x in ponto) {
        if (ponto[x] > maior) {
            recordes.push(ponto[x])
            maior++
        } else if (ponto[x] < menor) {
            menor = ponto[x]
            piorJogo = ++x
        }
    }

    return [recordes.length, piorJogo]
}

console.log(comparar("10, 20, 20, 8, 25, 3, 0, 30, 1"))