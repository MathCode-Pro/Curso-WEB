function classificacao(notas = []) {
    notas.forEach(x => {
        if (x >= 0.0 && x <= 4.9)
            console.log(`Nota ${x} = D`)
        else if (x >= 5.0 && x <= 6.9)
            console.log(`Nota ${x} = C`)
        else if (x >= 7.0 && x <= 8.9)
            console.log(`Nota ${x} = B`)
        else if (x >= 9.0 && x <= 10.0)
            console.log(`Nota ${x} = A`)
    })
}

classificacao([10, 13, 9, 8.2, 2.5, 7.7, 6.8])