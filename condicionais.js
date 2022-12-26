const destinosPossiveis = new Array(
            `João Pesso`,
            `Natal`,
            `Lagoa de Dentro`,
            `Jacarau`,
)
console.log("Destinos possiveis:")
console.log(destinosPossiveis)

const idadeComprador = 17
const estaAcompanhada = true

if(idadeComprador >=18){    // aqui ele verifica se o individuo e maior ou igual a 18 anos
    console.log("Comprador Maior de idade")
    destinosPossiveis.splice(1,1) // Removendo item 

}
else {

    if (estaAcompanhada) {
        console.log("Comprador está acompanhado")
    }
    else {
        console.log("Não e maior de idade ")
    }

}

console.log(destinosPossiveis)