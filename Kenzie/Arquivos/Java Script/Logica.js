// function somandoDoisValores (valor1, valor2){

//     return valor1 + valor2

// }
// console.log (somandoDoisValores(15, 876))





// function avaliarTipo (tipo){
//     return typeof(tipo)
// }
// console.log(avaliarTipo(false))




// function somarNota (nota1, nota2, nota3, nota4){

//     if (typeof(nota1, nota2, nota3, nota4) === "number") {
//         return nota1 + nota2 + nota3 + nota4
//     } else {
//         return "A função só poderá receber números"
//     }

// }
// console.log(somarNota(4, 7, 4, 8))



function soma(valor1, valor2, valor3, valor4){
    return valor1 + valor2 + valor3 + valor4
  }

function media(value){
    return value / 4   
}

function resultado(nota1, nota2, nota3, nota4){ 
    return media(soma(nota1, nota2, nota3, nota4))
  }

console.log('Média do aluno Carlos: ' + resultado(5, 6, 8, 9))