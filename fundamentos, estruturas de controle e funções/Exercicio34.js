function interseccao(string1 = '', string2 = '') {
    let estaContido = false

    for (let i = 0; i < string1.length; i++) {
        let cString1 = string1.charAt(i).toLowerCase()

        for (let j = 0; j < string2.length; j++) {
            let cString2 = string2.charAt(j).toLowerCase()

            if (cString1 == cString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

const string1 = 'abCdefg'
const string2 = 'abcdEfg'
const string3 = 'abGmH'

console.log(interseccao(string1, string2))
console.log(interseccao(string1, string3))