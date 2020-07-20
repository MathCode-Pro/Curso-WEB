const triangulo = function (x, y, z) {

    if (x == y && x == z && y == z)
        console.log('Equilátero')
    else if (x == y || x == z || y == z)
        console.log('Isósceles')
    else if (x != y && x != z && y != z)
        console.log('Escaleno')
}

triangulo(1, 1, 1)