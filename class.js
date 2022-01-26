class Book {
    constructor(name, editora, pages){
        this.name = name
        this.editora = editora
        this.pages = pages
    }
    adTitle(){
        console.log(`Title: ${this.name}`)
    }
    descriveTitle(){
        console.log(`${this.name} is a book of editora ${this.editora} and have ${this.pages} pages`)
    }
}

const NodeJS = new Book("Primeiros passos com NodeJs", "Casa do código", 195)
NodeJS.adTitle()
NodeJS.descriveTitle()

///herança
class bookCollection extends Book{
    constructor(name, nameCollection){
        super(name)
        this.nameCollection = nameCollection
    }
    descriveCollection(){
        console.log(`O livro ${this.name} faz parte da coleção ${this.nameCollection}`)
    }
    
}

const LogicOfProgramming = new bookCollection("Logica de programação", "Comece a programar")
LogicOfProgramming.descriveCollection()