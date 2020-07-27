function pagPlano(idade) {

    let valorPgto = 100

    if (idade < 10) valorPgto += 80
    else if (idade >= 10 && idade < 30) valorPgto += 50
    else if (idade >= 30 && idade < 60) valorPgto += 95
    else if (idade >= 60) valorPgto += 130

    return `R$${valorPgto.toFixed(2)}`
}

console.log(pagPlano(8));
console.log(pagPlano(15));
console.log(pagPlano(35));
console.log(pagPlano(52));
console.log(pagPlano(80));