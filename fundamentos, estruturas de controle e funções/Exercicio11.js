const bissexto = (ano) => {
    
    if (ano <= 0)
        return false
    else if (ano % 400 === 0)
        return true
    else if (ano % 100 === 0)
        return false
    else if (ano % 4 === 0)
        return true
    else
        return false
}

console.log(bissexto(105))
console.log(bissexto(0))
console.log(bissexto(2020))
console.log(bissexto(2004))
console.log(bissexto(2400))