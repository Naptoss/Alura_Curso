// console.log(`Trabalhando com listas`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

// console.log(`Destinos Possiveis: ${salvador}, ${saoPaulo}, ${rioDeJaneiro} `)
    // Uma forma desnecessaria de se fazer, muito codigo para uma função simples

// const destinos = ["Paraiba ", "Recife ", "Natal ", "Rio de janeiro "]
// console.log(`Destinos possiveis: ${destinos}`)
    // Uma forma rapida e limpa de se realizar um codigo simples

const listaDeDestinos = new Array(
            `Salvador`,
            `Rio de Janeiro`,
            `São Paulo`
)
listaDeDestinos.push("Recife")
    // Usando a função push para adicionnar mais uma cidade na lista

listaDeDestinos.splice(2)
    // a função splice serve para remover um elemento da lista 


console.log("Lista de destinos:",listaDeDestinos[1]) // nesse console.log serve para imprimir um valor unico 