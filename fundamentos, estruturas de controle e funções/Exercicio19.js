function pedido(cod, qtd) {

    switch (cod) {
        case 100:
            return `${'Cachorro Quente: ' + qtd + " un, total: R$ " + (3 * qtd).toFixed(2)}`

        case 200:
            return `${'Hambúrguer Simples: ' + qtd + " un, total: R$ " + (4 * qtd).toFixed(2)}`

        case 300:
            return `${'Cheeseburguer: ' + qtd + " un, total: R$ " + (5.5 * qtd).toFixed(2)}`

        case 400:
            return `${'Bauru: ' + qtd + " un, total: R$ " + (7.5 * qtd).toFixed(2)}`

        case 500:
            return `${'Refrigerante: ' + qtd + " un, total: R$ " + (3.5 * qtd).toFixed(2)}`

        case 600:
            return `${'Suco: ' + qtd + " un, total: R$ " + (2.8 * qtd).toFixed(2)}`

        default:
            return 'Produto inexistente!'
    }
}

console.log(pedido(100, 3))
console.log(pedido(200, 5))
console.log(pedido(300, 2))
console.log(pedido(400, 4))
console.log(pedido(500, 8))
console.log(pedido(600, 1))
console.log(pedido(700, 6))