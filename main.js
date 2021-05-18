//Desafio 4 - número 1
function AVISO(){
    console.log(`Seja Bem Vindo!`)
}

AVISO()

//Desafio 4 - número 2
function MEN(nome){
    console.log(`Bom dia ${nome}, suas informações foram atualizadas!`)
}

MEN("Wellington")

//Desafio 4 - número 3
function NOT(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e meu estilo musical preferido é ${estiloMusical}!`)
}

let nome = "Wellington"
let idade = 18
let estiloMusical = "HipHop"

NOT(nome, idade, estiloMusical)

//Desafio 4 - número 4
function INFO(filme, musicaFavorita){
    console.log(`Meu filme favorito é ${filme} e a minha música favorita é do ${musicaFavorita}`)
}

INFO("Velozes e Furiosos", "Drake - Toosie Slide")

//Desafio 4 - número 5
function TRI(t){
    return t * 3
}

console.log(TRI(15))