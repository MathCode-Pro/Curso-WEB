function trocar(vetorA = [], vetorB = []) {

    for (let i = 0; i < vetorA.length; i++) {
        vetorA[i] = vetorA[i] + vetorB[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
    }
    console.log('B: ' + vetorB)
    console.log('A: ' + vetorA)

}

trocar([1, 2, 3], [4, 5, 6])