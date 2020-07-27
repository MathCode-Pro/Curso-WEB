function fruta(nomeFruta) {
    switch (nomeFruta) {
        case "Maçã":
            console.log("Não vendemos esta fruta aqui.")
            break
        case "Kiwi":
            console.log("Estamos com escassez de Kiwis.")
            break
        case "Melancia":
            console.log("Aqui está! São 3 reais o quilo.")
            break
        default:
            console.log("Fruta inválida!")
            break
    }
}

fruta("Maçã")
fruta("Kiwi")
fruta("Melancia")
fruta("Meia")