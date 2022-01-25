console.log("Work with lists")

const listaDeDistinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

const clientYear = 21
let withParents = false
let haveTicket = true

console.log("Choose your Travel:")

if (clientYear >= 18 || withParents == true) {
    console.log("The client can buy the ticket")
    console.log(listaDeDistinos)

} else {
    console.log("The client is minor and not buy the ticket")
}

if (clientYear >= 18 && haveTicket == true) {
    console.log("Good Travel")

} else {
    console.log("The client cannot get the bus")
}