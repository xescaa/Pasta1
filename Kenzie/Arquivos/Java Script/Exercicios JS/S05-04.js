// function numNegativo (){

//     for (let linha = 0; linha <= numNegativo.length ; linha++){
//         let qtdNeg = [[],[]]

//         for (let colunas = 0 ; colunas <numNegativo[linha].length ; colunas++)

//         let nota = 

//         }      
    

// }
// console.log(numNegativo([-82,-41,44,-94,90,76,62,-33,62,58]))

function binRota(arr){

    let resultado = []
        for (let i = 0; i <= arr.lenght; i++){
            console.log(arr[i].lenght)
            if(i % 2 == 0){
                for (let j = 0; j < arr[i].lenght; j++){
                    resultado.push(arr[i][j])
                         
            }
            } else {
                for(let j = arr[i].lenght; j > 0 ; j--){
                    resultado.push(arr[i][j])
                }
            }
          
        }
    return resultado
    
 }
 console.log(binRota([["Bob","Nora"],["Ruby","Carl"]]))