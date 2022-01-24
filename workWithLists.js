console.log("Work with lists")

const listaDeDistinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

console.log("Choose your Travel")
listaDeDistinos.push("Porto Alegre")
console.log(listaDeDistinos)

listaDeDistinos.splice(1,1)
console.log(listaDeDistinos)

console.log(listaDeDistinos[1],listaDeDistinos[2])