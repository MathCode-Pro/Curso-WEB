const formatReal = (x) => console.log(`R$ ${x.toFixed(2).toString().replace('.', ',')}`)
formatReal(0.1 + 0.2)