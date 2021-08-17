// LEITURA DE CÓDIGO

//1.a) O código analisa se um número é par.
//1.b) Ele imprimirá no console "Passou no teste" para números pares.
//1.c) Ele imprimirá no console "Não passou no teste" para números ímpares.

//2.a) Serve para informar o preço da fruta a partir da resposta do prompt.
//2.b) A mensagem exibida será: "O preço da fruta Maçã é R$ 2.25"
//2.c) A mensagem exibida será: "O preço da fruta Pêra é R$ 5"

//3.a) A primeira linha está pedindo um número para o usuário.
//3.b) Será exibida a mensagem: "Esse número passou no teste"
//3.c) Sim. Não é possível acessar algo dentro do escopo da função if

// ------ESCRITA DE CÓDIGO

// //EXERCÍCIO 1

// const idadeUsuario = Number(prompt("Qual a sua idade?"))
// if (idadeUsuario >18) {
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir.")
// }

// //EXERCÍCIO 2

// const turnoDeEstudo = prompt("Digite a letra inicial para o turno que você estuda, sendo: M para Matutino, V para Vespertino ou N para Noturno").toUpperCase()
// if (turnoDeEstudo === "M") {
//     console.log("Bom Dia!")
// } else if (turnoDeEstudo === "V") {
//     console.log("Boa Tarde!")
// }else if (turnoDeEstudo === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("Insira uma inicial válida")
// }

// //EXERCÍCIO 3

// const turnoDoEstudante = prompt("Digite a letra inicial para o turno que você estuda, sendo: M para Matutino, V para Vespertino ou N para Noturno").toUpperCase()
// switch (turnoDoEstudante) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Insira uma letra inicial válida")
// }

//EXERCÍCIO 4

// const generoDoFilme = prompt("Qual o gênero do filme que vamos assistir?")
// const precoDoFilme = Number(prompt("Qual o preço do ingresso do filme?"))

// if (generoDoFilme === "fantasia" && precoDoFilme < 15) {
//     console.log("Bom Filme!")
// } else {
//     console.log("Escolha outro filme. :(")
// }

//DESAFIO 1

const generoDoFilme = prompt("Qual o gênero do filme que vamos assistir?")
const precoDoFilme = Number(prompt("Qual o preço do ingresso do filme?"))

if (generoDoFilme === "fantasia" && precoDoFilme < 15) {
    const perguntaLanche = prompt("Qual lanche você irá comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite seu(a) ${perguntaLanche}`)
} else {
    console.log("Escolha outro filme. :(")
}
