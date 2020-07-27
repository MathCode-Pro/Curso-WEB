function sacar(valor) {

    let celula100 = 0
    let celula50 = 0
    let celula10 = 0
    let celula5 = 0
    let celula1 = 0

    let notaSaque = contNotas(valor)

    while (valor >= notaSaque) {

        switch (notaSaque) {
            case 100:
                valor -= 100
                celula100++
                break
            case 50:
                valor -= 50
                celula50++
                break
            case 10:
                valor -= 10
                celula10++
                break
            case 5:
                valor -= 5
                celula5++
                break
            case 1:
                valor -= 1
                celula1++
                break
        }

        notaSaque = contNotas(valor)
    }

    return saida(celula100, celula50, celula10, celula5, celula1)
}

function contNotas(valor) {
    if (valor >= 100)
        return 100
    else if (valor >= 50)
        return 50
    else if (valor >= 10)
        return 10
    else if (valor >= 5)
        return 5
    else
        return 1
}

function saida(celula100, celula50, celula10, celula5, celula1) {

    let saida = ''

    if (celula100 > 0) saida += `${celula100} nota(s) de R$ 100. `
    if (celula50 > 0) saida += `${celula50} nota(s) de R$ 50. `
    if (celula10 > 0) saida += `${celula10} nota(s) de R$ 10. `
    if (celula5 > 0) saida += `${celula5} nota(s) de R$ 5. `
    if (celula1 > 0) saida += `${celula1} nota(s) de R$ 1. `

    return saida
}

console.log(sacar(18))