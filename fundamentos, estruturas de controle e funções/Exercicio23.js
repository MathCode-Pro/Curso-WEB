function media(cod, n1, n2, n3) {

    let valPesoMaior = 4
    let valPesoMenor1 = 3
    let valPesoMenor2 = 3
    let somaPesos = 4 + 3 + 3

    if (n1 > n2 && n1 > n3) {
        valPesoMaior *= n1
        valPesoMenor1 *= n2
        valPesoMenor2 *= n3
    } else if (n2 > n3) {
        valPesoMaior *= n2
        valPesoMenor1 *= n1
        valPesoMenor2 *= n3
    } else {
        valPesoMaior *= n3
        valPesoMenor1 *= n1
        valPesoMenor2 *= n2
    }

    let media = (valPesoMaior + valPesoMenor1 + valPesoMenor2) / somaPesos
    return `Código: ${cod}, ${n1}, ${n2}, ${n3}, ${media >= 5 ? 'APROVADO!' : 'REPROVADO!'}`
}

console.log(media(123, 2.8, 6, 3.5))

