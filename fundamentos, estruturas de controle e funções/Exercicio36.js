function f1(vet = [], mult = 0) {
    let resultadoF1 = []

    vet.forEach(x => {
        resultadoF1.push(mult * x)
    })

    return resultadoF1
}

function f2(vet = [], mult = 0) {

    let resultadoF2 = []

    vet.forEach(x => {
        if (x > 5)
            resultadoF2.push(mult * x)
    })

    return resultadoF2
}

const vetor1 = [1, 2, 3, 4, 5]
const vetor2 = [2, 7, 1, 5, 6, 10, 15]

console.log(f1(vetor1, 3))
console.log(f2(vetor2, 2))