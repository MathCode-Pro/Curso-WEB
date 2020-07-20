function jurosSimples (capInicial, juros, tempAplic) { return capInicial + (capInicial * juros * tempAplic)}
function jurosCompostos (capInicial, juros, tempAplic) {return capInicial*(1+juros)**tempAplic}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosCompostos(100, 10/100, 2))