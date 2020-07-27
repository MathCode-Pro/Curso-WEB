function inicio_fim(inicio = 0, fim = 0) {

    if (inicio != fim) {
        for (let i = inicio; i <= fim; i++) {
            if (i % 2 != 0)
                console.log(i)
        }
    } else
        console.log('Os valores são iguais.')
}

inicio_fim(1, 10)
inicio_fim(5, 5)



