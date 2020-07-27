function carro(nomeCarro) {
    switch (nomeCarro) {
        case "hatch":
            console.log("Compra efetuada com sucesso!")
            break
        case "sedan": case "motocicleta": case "caminhonete":
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui!")
            break
    }
}

carro("hatch")
carro("sedan")
carro("caminhonete")
carro("motocicleta")
carro("pão")