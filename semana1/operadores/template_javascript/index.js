// Questão-1

// // a. false
// // b. false
// // c. true
// // d. boolean

//Questão-2

//Meu colega esqueceu que o prompt sempre devolve uma string.
//então, a soma está acontecendo entre strings.
//Eu vou ajudá-lo a transformar o resultado do promt em Number.

//Questão-3
//Colega, você pode fazer assim:

// let primeiroNumero =Number(prompt("Digite um Número!"))
// let segundoNumero =Number(prompt("digite outro número!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


//EXERCÍCIO DE ESCRITA
//QUESTÃO-1
const idade =Number(prompt("Qual a sua idade?"))
const idadeDoAmigo =Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"))

let idadeMaior = idade > idadeDoAmigo
let diferencaIdade = idade - idadeDoAmigo

console.log("sua idade é maior que a do seu amigo?", idadeMaior)
console.log("A diferença de idade entre vocês é:", diferencaIdade)


//QUESTÃO-2

// const numPar = Number(prompt("insira um número par"))

// const restoDiv = numPar % 2
//console.log("resto da divisão:", restoDiv)
//o padrão notado é que sempre resta 0
//se o usuário insere um número ímpar, o console retorna o resto da divisão.


// //QUESTÃO-3
// const idade = Number(prompt("Qual a sua idade?"))

// const meses = idade * 12
// const dias = idade * 365
// const horas = dias *24

// console.log("Sua idade é", idade, "anos", "e você viveu", meses, "meses,", dias, "dias", "e", horas)

//QUESTÃO-4

// const numUm =Number(prompt("Insira um número"))
// const numDois =Number(prompt("Insira outro número"))

// const maiorQue = numUm > numDois
// const igual = numUm === numDois
// const div = numUm % numDois === 0
// const divInversa = numDois % numUm === 0
// console.log(maiorQue, igual, div, divInversa)

