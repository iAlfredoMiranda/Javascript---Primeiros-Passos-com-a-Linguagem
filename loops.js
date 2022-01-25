const listaDeDistinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

const clientYear = 21
let withParents = false
let haveTicket = false
const destination = "São Paulo"

console.log("\nChoose your Travel:")
console.log(listaDeDistinos)

const canBuy = clientYear >= 18 || withParents == true

let destinationExist = false

for (let cont = 0; cont < 3; cont++) {

    if (listaDeDistinos[cont] == destination) {

        console.log("The destination is available")
        destinationExist = true
        break
    }

}

console.log("The destination is " + destination)

if (destinationExist == false) {
    console.log("The destination not exist")
    console.log("\nChoose your Travel:")
    console.log(listaDeDistinos)

}