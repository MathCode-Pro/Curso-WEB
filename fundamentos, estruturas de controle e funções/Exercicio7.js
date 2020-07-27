function bhaskara(a, b, c) {

    let bhaskara = []
    const delta = (b ** 2) - (4 * a * c)
    if (delta < 0) {
        return "Delta é menor que 0"
    }
    bhaskara.push((-b + Math.sqrt(delta)) / (2 * a))
    bhaskara.push((-b - Math.sqrt(delta)) / (2 * a))
    return bhaskara
}

console.log(bhaskara(3, 5, 12))