//INTERPRETAÇÃO DE CÓDIGO
//1. 10
//2.a- 19, 21, 23, 25, 27, 30
//2.b- 
//3.



const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos =0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}











// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for(let numero of lista){
//     if (numero > 18){
//         console.log(numero)
//     }
// }


// let valor = 0
// for(let i = 0; i < 5; i++){
//     valor += i
// }
// console.log(valor)