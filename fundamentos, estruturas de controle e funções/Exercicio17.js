function aumento(planoTrabalho, salarioAtual) {

    if (isNaN(salarioAtual))
        return 'Salário inválido!'

    switch (planoTrabalho) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido!'
    }
}

console.log(aumento('A', 1000.00))
console.log(aumento('C', 1500.00))
console.log(aumento('B', 2500.00))
console.log(aumento('u', 300.00))
console.log(aumento('',))