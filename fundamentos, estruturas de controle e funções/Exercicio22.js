function anuidade(valor = 0, mes = 1) {
    let valorPgto = 0

    if (mes > 0 && mes <= 12) {
        valorPgto = (valor * (1.05 ** (mes - 1))).toFixed(2)
    }

    return valorPgto
}

console.log(anuidade(100, 4))