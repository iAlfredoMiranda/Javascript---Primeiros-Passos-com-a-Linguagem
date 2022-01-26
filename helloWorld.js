console.log("Hello World, JavaScript!")
console.log("Work with variables")

const yearsAgo = 25

console.log(yearsAgo)

const yearsAgoSum = yearsAgo+2
console.log(yearsAgoSum)
console.log(`I'm ${yearsAgo} years ago and in more than two year, I'll be ${yearsAgoSum} years ago`)

minhaFunc = (arrayDeStrings, palavra) => {
    console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`)
}

const palavra = 'alura'

minhaFunc`Eu estudo na ${palavra} todos os dias`;