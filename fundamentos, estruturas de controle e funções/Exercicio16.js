function calculadora(valor1, valor2, op) {

    if (isNaN(valor1) || isNaN(valor2))
        return "Valores inválidos!"

    switch (op) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return "Operação inválida!"
    }
}

console.log(calculadora(10, 5, "+"))
console.log(calculadora(10, 10, "*"))
console.log(calculadora(10, 2, '-'))
console.log(calculadora(10, 10, '/'))
console.log(calculadora(10, 10, "a"))
console.log(calculadora(1,2,''))
console.log(calculadora('z', 8, ''))