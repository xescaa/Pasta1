// Crie uma função que leia uma string neste exemplo usamos:Pneumoultramicroscopicossilicovulcanoconiótico
// Crie a lógica para deixar todas as letras em maiúsculo.
// Crie a lógica para substituir as letras 'o' por 'y'.
// Crie a lógica para remover as letras repetidas.
// Crie a lógica para inverter a palavra resultante.
// Crie a lógica para deixar somente a letra inicial maiúsculo.

// Crie uma função que leia uma string neste exemplo usamos:Pneumoultramicroscopicossilicovulcanoconiótico
function lerString(string){


   

// Crie a lógica para deixar todas as letras em maiúsculo.
// let stringMaiuscula = string.toUpperCase()  
//     return stringMaiuscula


// Crie a lógica para substituir as letras 'o' por 'y'.
let trocaOPorY = ""

    for(let i =0; i < string.length; i++){

        if (i = "o"){
            trocaOPorY = string.replace("o", "y")
        
        }else{}
    }

    
    return trocaOPorY     

        
    


}
console.log(lerString("Pneumoultramicroscopicossilicovulcanoconiotico"))