function calcNota(nota = 0) {
    if (nota < 0 || nota > 100)
        return "Nota inválida!"
    else if (notaArred(nota) >= 40)
        return "Aprovado!"
    else (notaArred(nota) < 40)
    return "Reprovado!"
}

const notaArred = (nota) => {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(calcNota(100))
console.log(calcNota(30))
console.log(calcNota(38))
console.log(calcNota(88))
console.log(calcNota(61))


