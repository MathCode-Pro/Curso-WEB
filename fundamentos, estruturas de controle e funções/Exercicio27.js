const crianca1 = {
    altura: 0,
    taxaCrescimento: 0
}

const crianca2 = {
    altura: 0,
    taxaCrescimento: 0
}

function crescimento(crianca1, crianca2) {
    let menor = null
    let maior = null
    let alturaMenor = []
    let alturaMaior = []

    if (crianca1.altura == crianca2.altura) {
        if (crianca1.taxaCrescimento < crianca2.taxaCrescimento)
            return console.log('A criança 2 ultrapassará a criança 1 em 1 ano.')
        else if (crianca1.taxaCrescimento > crianca2.taxaCrescimento)
            return console.log('A criança 1 ultrapassará a criança 2 em 1 ano.')
        else
            return console.log('As duas crianças têm/terão a mesma altura sempre.')

    } else {
        if (crianca1.altura < crianca2.altura) {
            if (crianca1.taxaCrescimento <= crianca2.taxaCrescimento)
                return console.log('A criança menor não ultrapassará a maior.')
            else {
                menor = crianca1
                maior = crianca2
            }
        } else if (crianca2.altura < crianca1.altura) {
            if (crianca2.taxaCrescimento <= crianca1.taxaCrescimento)
                return console.log('A criança menor não ultrapassará a maior.')
            else {
                menor = crianca2
                maior = crianca1
            }
        }
    }

    if (menor != null) {
        do {
            if (alturaMaior.length < 20) {
                alturaMenor.push(menor.altura += menor.taxaCrescimento)
                alturaMaior.push(maior.altura += maior.taxaCrescimento)
            } else
                break
        } while (menor.altura < maior.altura)

        resultado(alturaMenor, alturaMaior)
    }

}

function resultado(alturaMenor, alturaMaior) {

    for (x in alturaMenor) {
        let alturaTotalMenor = Math.ceil(alturaMenor[x])
        let alturaTotalMaior = Math.ceil(alturaMaior[x])

        if (alturaMenor[x] > alturaMaior[x])
            return console.log(`A criança menor ultrapassará a criança maior em ${++x} anos (altura que a criança menor terá: ${alturaTotalMenor} cm), (altura que a criança maior terá: ${alturaTotalMaior} cm).`)
        else if (x == alturaMenor.length - 1)
            return console.log(`A criança menor não ultrapassará a criança maior em ${++x} anos (altura que a criança menor terá: ${alturaTotalMenor} cm), (altura que a criança maior terá: ${alturaTotalMaior} cm).`)
    }
}

const c1_1 = { altura: 150, taxaCrescimento: 2 }
const c2_1 = { altura: 130, taxaCrescimento: 4 }

const c1_2 = { altura: 130, taxaCrescimento: 2 }
const c2_2 = { altura: 150, taxaCrescimento: 2 }

const c1_3 = { altura: 130, taxaCrescimento: 2 }
const c2_3 = { altura: 130, taxaCrescimento: 2 }

const c1_4 = { altura: 130, taxaCrescimento: 2 }
const c2_4 = { altura: 130, taxaCrescimento: 2.8 }

const c1_5 = { altura: 130, taxaCrescimento: 3 }
const c2_5 = { altura: 130, taxaCrescimento: 2 }

const c1_6 = { altura: 110, taxaCrescimento: 4.9 }
const c2_6 = { altura: 122, taxaCrescimento: 2.8 }

crescimento(c1_1, c2_1)
crescimento(c1_2, c2_2)
crescimento(c1_3, c2_3)
crescimento(c1_4, c2_4)
crescimento(c1_5, c2_5)
crescimento(c1_6, c2_6)



