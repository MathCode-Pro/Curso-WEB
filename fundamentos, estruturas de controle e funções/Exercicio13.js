function dia(dia) {
    if (dia < 1 || dia > 7)
        return "Dia inválido!"

    switch (dia) {
        case 1:
            return "Fim de semana!"
        case 7:
            return "Fim de semana!"
        default:
            return "Dia útil!"
    }
}

console.log(dia(1))
console.log(dia(2))
console.log(dia(7))
console.log(dia(10))
console.log(dia(5))
console.log(dia(6))
console.log(dia(0))