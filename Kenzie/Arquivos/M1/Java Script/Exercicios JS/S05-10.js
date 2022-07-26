
function lerString(string){


   
// // Crie a lógica para deixar todas as letras em maiúsculo.
let stringMaiuscula = string.toUpperCase()  
    console.log(stringMaiuscula)


// // Crie a lógica para substituir as letras 'o' por 'y'.
let oPorY = string.replace(/o/gi, 'y') 
    console.log(oPorY)



// Crie a lógica para remover as letras repetidas.
    
let novaString = " "
let contador = 0
    
for (let i = 0; i < string.length; i++){
        
    if (novaString.includes(string[i])){

    }else {novaString+=string[i]}
        
    }
console.log(novaString)

// Crie a lógica para inverter a palavra resultante.

let palavraInvertida = ""
    
for (let i = novaString.length-1; i > 0; i--){
        palavraInvertida+=novaString[i]
    }

console.log(palavraInvertida)


// Crie a lógica para deixar somente a letra inicial maiúsculo.

let primeiraMaiuscula = ""
    for (i = 0; i <= palavraInvertida.length-1; i++){
        if (i == 0){
            primeiraMaiuscula+= palavraInvertida[i].toUpperCase()
        }else{
            primeiraMaiuscula+= palavraInvertida[i]
        }
    }
console.log(primeiraMaiuscula)

}
console.log(lerString("Pneumoultramicroscopicossilicovulcanoconiotico"))